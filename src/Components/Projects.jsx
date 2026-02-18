import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import useModrinthStats from '../Hooks/useModrinthStats';
import ScrollReveal from './ScrollReveal';

function Projects() {
  const modrinthDownloads = useModrinthStats();

  const projects = [
    {
      name: 'Starcast',
      icon: (
        <img src="https://starcast.ph/android-chrome-512x512.png" className="w-8 h-8 rounded" alt="Starcast" />
      ),
      description:
        'Contest voting platform for various contests. Features real-time results and an admin panel. Fully integrated with Paymongo checkout API.',
      tech: ['React', 'JavaScript', 'TailwindCSS', 'Cloudflare', 'API Integration'],
      link: 'https://starcast.ph',
      github: '',
    },
    {
      name: 'hum',
      icon: (
        <img src="https://tryhum.cc/favicon.ico" className="w-8 h-8 rounded" alt="hum" />
      ),
      description:
        'An AI powered lyric and music generator, powered by dual AI-model technology. Fully integrated with Creem.io checkouts for payments.',
      tech: ['Next.js', 'JavaScript', 'TailwindCSS', 'Cloudflare', 'API Integration'],
      link: 'https://tryhum.cc',
      github: '',
    },
    {
      name: 'SHMusic',
      icon: (
        <img src="https://shmusic.jpisk.site/favicon.ico" className="w-8 h-8 rounded" alt="SHMusic" />
      ),
      description:
        'A brick-and-mortar business website with a modern design and a focus on user experience. Features a responsive layout and a clean interface.',
      tech: ['React', 'JavaScript', 'TailwindCSS', 'Cloudflare'],
      link: 'https://shmusic.jpisk.site',
      github: '',
    },
    {
      name: 'Ulticlick',
      description: 'Java automation software with Cloudflare worker authentication via D1 SQL Storage.',
      tech: ['Java', 'JavaScript', 'AutoHotKey', 'Cloudflare'],
      link: '',
      github: '',
    },
    {
      name: 'MinMacro',
      description:
        'A niche game automation tool with highly advanced macro capabilities. Powered with remote MySQL integration.',
      tech: ['AutoHotKey', 'HTML', 'CSS', 'JavaScript', 'Lua', 'MySQL'],
      link: 'https://facebook.com/minmacro',
      github: '',
    },
    {
      name: 'Modrinth Projects',
      icon: (
        <img src="https://modrinth.com/favicon-light.ico" className="w-7 h-7" alt="Modrinth" />
      ),
      description: `Collection of Minecraft plugins with ${modrinthDownloads.totalDownloads || '10K+'} total downloads.`,
      tech: ['Java'],
      link: 'https://modrinth.com/user/JollyJoe',
      github: '',
    },
    {
      name: 'Kosmed Website',
      description:
        'A modern website with client-controlled design for Kosmed Aesthetic Clinic. Features booking and service information.',
      tech: ['HTML', 'CSS', 'JavaScript', 'GoDaddy Hosting'],
      link: 'https://kosmed.ph',
      github: '',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-sm font-medium text-[--accent] uppercase tracking-widest mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-[--text-secondary] text-lg max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;