import SmoothScroll from './Components/SmoothScroll';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 relative overflow-x-hidden">
        {/* Gradient Orbs Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[600px] h-[600px] bg-emerald-500/40 rounded-full blur-[150px] -top-64 -left-64" />
          <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px] top-1/2 right-0 translate-x-1/2" />
          <div className="absolute w-[400px] h-[400px] bg-emerald-500/30 rounded-full blur-[150px] bottom-0 left-1/3" />
        </div>

        {/* Grid Overlay */}
        <div className="fixed inset-0 grid-bg pointer-events-none opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Projects />
          <About />
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}