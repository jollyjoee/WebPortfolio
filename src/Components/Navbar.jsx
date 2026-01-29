import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, User, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'about', label: 'About', icon: User },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'about'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (window.lenis) {
      const target = document.getElementById(id);
      if (target) {
        window.lenis.scrollTo(target, { offset: -100 });
      }
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'
          }`}
      >
        <div
          className={`max-w-2xl mx-auto px-2 py-2 rounded-2xl transition-all duration-500 ${scrolled
              ? 'glass-strong shadow-2xl shadow-black/20'
              : 'bg-transparent'
            }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                      ? 'text-[--accent-light]'
                      : 'text-[--text-secondary] hover:text-[--text-primary]'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[--accent-subtle] rounded-xl border border-[--accent]/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 capitalize">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-xl glass hover:bg-[--accent-subtle] transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[--accent]" />
              ) : (
                <Menu className="w-5 h-5 text-[--text-primary]" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 glass-strong rounded-2xl p-4 md:hidden"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                      ? 'bg-[--accent-subtle] text-[--accent-light]'
                      : 'text-[--text-secondary] hover:bg-[--bg-tertiary]'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{item.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;