import { useState, useEffect } from 'react';

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className='min-h-screen bg-slate-950'>
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-126 h-126 bg-cyan-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
            <div className="absolute w-96 h-96 md:w-196 md:h-196 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping [animation-duration:5s]"></div>
            <div className="absolute w-126 h-126 bg-blue-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
          </div>

          <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-[gradientShift_3s_ease_infinite] bg-[length:200%_auto]">
                Julijo Pisk Jr.
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">Full Stack Developer</p>
            <p className="text-xl text-gray-400 mb-8">Building modern web experiences</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-colors"
              >
                About Me
              </button>
            </div>
          </div>
          <style jsx>{`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% -50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </div>
    </section>
  );
}

export default Hero;