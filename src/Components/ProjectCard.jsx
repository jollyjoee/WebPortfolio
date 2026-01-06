import { useState, useEffect } from 'react';

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-500 
      hover:-translate-y-2
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative p-6 flex flex-col justify-between h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 ring-2 ring-slate-700 rounded-lg flex items-center justify-center text-2xl">
            {project.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        </div>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className={`flex flex-wrap gap-2 ${(project.link || project.github) ? 'mb-4' : ''}`}>
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400">
              {tech}
            </span>
          ))}
        </div>
        
        {(project.link || project.github) && (
          <div className="flex gap-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='z-1000 text-center flex-1 px-4 py-2 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition-colors'>
                View Project
              </a>
            )}
            {project.github && (
              <button className="z-1000 px-4 py-2 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors">
                GitHub
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
    </div>
  );
}

export default ProjectCard;