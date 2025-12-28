import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}