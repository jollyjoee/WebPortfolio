import ProjectCard from './ProjectCard';
import useModrinthStats from '../Hooks/useModrinthStats';

function Projects() {
  const modrinthDownloads = useModrinthStats(); // Custom hook to fetch Modrinth stats

  const projects = [
    {
      name: 'Starcast',
      icon: '⭐',
      description: 'Proprietary voting platform for StarhorizonTV\'s contests. Features real-time results and an admin panel. Fully integrated with Maya checkout API',
      tech: ['React', 'JavaScript', 'TailwindCSS', 'Cloudflare Deployment'],
      link: 'https://starcast.ph',
      github: ''
    },
    {
      name: 'Ulticlick',
      icon: '⚡',
      description: 'Java automation software with Cloudflare worker authentication via D1 SQL Storage',
      tech: ['Java', 'JavaScript', 'AutoHotKey', 'Cloudflare'],
      link: '',
      github: ''
    },
    {
      name: 'MinMacro',
      icon: '🎮',
      description: 'A niche game automation tool with highly advanced macro capabilities. Powered with remote MySQL integration',
      tech: ['AutoHotKey', 'HTML', 'CSS', 'JavaScript', 'Lua', 'MySQL'],
      link: 'https://facebook.com/minmacro',
      github: ''
    },
    {
      name: 'Modrinth Projects',
      icon: '📦',
      description: `Collection of Minecraft plugins with ${modrinthDownloads.totalDownloads} total downloads`,
      tech: ['Java'],
      link: 'https://modrinth.com/user/JollyJoe/projects',
      github: ''
    },
    {
      name: 'Kosmed Website',
      icon: '💊',
      description: `A modern website with <span className="text-cyan-400>client-controlled design</span> for Kosmed Aesthetic Clinic. With booking and service information.`,
      tech: ['Html', 'CSS', 'JavaScript', 'GoDaddy Hosting'],
      link: 'https://kosmed.ph',
      github: ''
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Building innovative solutions with modern technologies</p>
        
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