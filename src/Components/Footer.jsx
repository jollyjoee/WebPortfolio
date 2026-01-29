import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/jollyjoee',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:piskjulijo@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-[--border-subtle]">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--accent]/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold gradient-text mb-1">Julijo Pisk Jr.</h3>
            <p className="text-[--text-muted] text-sm">Full Stack Developer</p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[--bg-tertiary] border border-[--border-subtle] flex items-center justify-center text-[--text-secondary] hover:text-[--accent] hover:border-[--accent]/50 hover:bg-[--accent-subtle] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right - Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[--text-muted] text-sm flex items-center gap-1"
          >
            © {currentYear} Built
            using React & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;