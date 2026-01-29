import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Gamepad2, Pill, Music, Globe, Code } from 'lucide-react';

// Icon mapping for projects
const iconMap = {
  hum: Music,
  Starcast: Globe,
  Ulticlick: Zap,
  MinMacro: Gamepad2,
  'Modrinth Projects': Code,
  'Kosmed Website': Pill,
};

function ProjectCard({ project, index }) {
  const Icon = iconMap[project.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative card p-6 h-full flex flex-col"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[--accent]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner Gradient */}
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[--accent]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[--bg-tertiary] border border-[--border-subtle] flex items-center justify-center group-hover:border-[--accent]/50 group-hover:bg-[--accent-subtle] transition-all duration-300">
            {project.icon && typeof project.icon === 'object' ? (
              project.icon
            ) : Icon ? (
              <Icon className="w-6 h-6 text-[--accent]" />
            ) : (
              <span className="text-xl">{project.icon}</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-[--text-primary] group-hover:text-[--accent-light] transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[--text-secondary] mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="tech-tag px-3 py-1 rounded-lg text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex gap-3">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-primary text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-outline text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;