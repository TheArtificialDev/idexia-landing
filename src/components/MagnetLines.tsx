import React, { useRef, useEffect } from "react";

type MagnetLinesProps = {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function MagnetLines({
  rows = 9,
  columns = 24,
  // default to fill parent when mounted in an inset-0 container
  containerSize = "100%",
  // subtle bluish lines
  lineColor = "rgba(59,130,246,0.14)",
  // thinner lines for density
  lineWidth = "0.28vmin",
  // shorter lines so they look like strokes
  lineHeight = "3.6vmin",
  baseAngle = -10,
  className = "",
  style = {},
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // refs to avoid re-reading DOM for every pointer event
  const itemsRef = useRef<HTMLElement[]>([]);
  const centersRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

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
      // run again after paint to ensure accurate rects
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
      for (let i = 0; i < items.length; i++) {
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
  }, []);

  const total = rows * columns;
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
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
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
