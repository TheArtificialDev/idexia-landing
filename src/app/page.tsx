"use client";

import MagnetLines from "../components/MagnetLines";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.9 }
          50% { transform: translateY(-20px) scale(1.03); opacity: 1 }
          100% { transform: translateY(0) scale(1); opacity: 0.9 }
        }
        .float {
          animation: floatUp 6s ease-in-out infinite;
        }
      `}</style>

      {/* animated magnet lines background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {/* responsive density: let MagnetLines compute rows/columns from viewport */}
        <MagnetLines containerSize="100%" lineWidth="0.44vmin" lineHeight="3.8vmin" spacing={56} />
      </div>

      {/* content */}
      <main className="relative z-10 px-6 py-20 text-center max-w-6xl">
        <h1 className="mx-auto font-extrabold leading-tight text-[4.5rem] sm:text-[8rem] md:text-[9rem] bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400">
          Idexia Studio
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">Coming soon — social media content analysis &amp; recommendations</p>
      </main>

      {/* decorative floating color blobs */}
      <div className="absolute -left-40 -top-32 w-72 h-72 rounded-full blur-3xl float" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(236,72,153,0.14))' }} />
      <div className="absolute -right-40 -bottom-32 w-96 h-96 rounded-full blur-3xl float" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(234,179,8,0.10))', animationDelay: '1.5s' }} />

      <footer className="absolute bottom-6 w-full text-center z-10 text-gray-500">© {new Date().getFullYear()} Idexia Studio</footer>
    </div>
  );
}
