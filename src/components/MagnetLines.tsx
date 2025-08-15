import React, { useRef, useEffect, useState } from "react";

type MagnetLinesProps = {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  spacing?: number; // desired spacing in pixels between grid centers (responsive)
  className?: string;
  style?: React.CSSProperties;
};

export default function MagnetLines({
  rows,
  columns,
  // default to fill parent when mounted in an inset-0 container
  containerSize = "100%",
  // subtle bluish lines
  lineColor = "rgba(59,130,246,0.14)",
  // slightly thicker lines by default
  lineWidth = "0.36vmin",
  // shorter lines so they look like strokes
  lineHeight = "3.8vmin",
  baseAngle = -10,
  spacing = 56,
  className = "",
  style = {},
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // refs to avoid re-reading DOM for every pointer event
  const itemsRef = useRef<HTMLElement[]>([]);
  const centersRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

  const [computedRows, setComputedRows] = useState<number>(rows ?? 0);
  const [computedCols, setComputedCols] = useState<number>(columns ?? 0);

  // compute rows/columns from viewport spacing if explicit values not provided
  useEffect(() => {
    const computeGrid = () => {
      if (typeof rows === "number" && rows > 0) {
        setComputedRows(rows);
      } else {
        const h = window.innerHeight || document.documentElement.clientHeight;
        const r = Math.max(3, Math.floor(h / spacing));
        setComputedRows(r);
      }

      if (typeof columns === "number" && columns > 0) {
        setComputedCols(columns);
      } else {
        const w = window.innerWidth || document.documentElement.clientWidth;
        const c = Math.max(3, Math.floor(w / spacing));
        setComputedCols(c);
      }
    };

    computeGrid();

    let gridRaf: number | null = null;
    const onResizeGrid = () => {
      if (gridRaf != null) cancelAnimationFrame(gridRaf);
      gridRaf = requestAnimationFrame(() => {
        computeGrid();
        gridRaf = null;
      });
    };

    window.addEventListener("resize", onResizeGrid);
    window.addEventListener("orientationchange", onResizeGrid);

    return () => {
      window.removeEventListener("resize", onResizeGrid);
      window.removeEventListener("orientationchange", onResizeGrid);
      if (gridRaf != null) cancelAnimationFrame(gridRaf);
    };
    // only depends on rows/columns/spacing props
  }, [rows, columns, spacing]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const computeCenters = () => {
      const items = Array.from(container.querySelectorAll("span")) as HTMLElement[];
      itemsRef.current = items;
      centersRef.current = items.map((item) => {
        const rect = item.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      });
    };

    // initial compute and ensure layout has painted — run compute twice (next rAF)
    computeCenters();
    requestAnimationFrame(() => {
      computeCenters();
    });

    // recompute on resize/scroll (throttle via rAF)
    let resizeRaf: number | null = null;
    const onResize = () => {
      if (resizeRaf != null) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        computeCenters();
        resizeRaf = null;
      });
    };

    const processPointer = () => {
      const p = pointerRef.current;
      if (!p) return;
      const centers = centersRef.current;
      const items = itemsRef.current;
      const n = Math.min(items.length, centers.length);
      for (let i = 0; i < n; i++) {
        const c = centers[i];
        if (!c) continue;
        const dx = p.x - c.x;
        const dy = p.y - c.y;
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        items[i].style.transform = `rotate(${angle}deg)`;
      }
      rafRef.current = null;
    };

    const onPointerMove = (ev: PointerEvent) => {
      pointerRef.current = { x: ev.clientX, y: ev.clientY };
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(processPointer);
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);

    // set initial pose to viewport center so lines have a stable starting orientation
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    pointerRef.current = { x: vw / 2, y: vh / 2 };
    // ensure centers are available before processing
    if (centersRef.current.length) processPointer();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (resizeRaf != null) cancelAnimationFrame(resizeRaf);
    };
  }, [computedRows, computedCols]);

  const total = computedRows * computedCols;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        transform: `rotate(${baseAngle}deg)`,
        willChange: "transform",
        opacity: 0.95,
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${computedCols}, 1fr)`,
        gridTemplateRows: `repeat(${computedRows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
}

export { MagnetLines };
