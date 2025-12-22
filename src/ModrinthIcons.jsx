import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { parseProjectsForDownloads } from "../utils/modrinth";

function ModrinthIcons({ className, classNameInner}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [width, setWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.modrinth.com/v2/user/JollyJoe/projects"
        );
        const json = await res.json();
        const parsed = parseProjectsForDownloads(json);
        const sorted = [...parsed].sort((a, b) => b.downloads - a.downloads);
        setProjects(sorted);
      } catch (e) {
        console.error("Failed to fetch project icons", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleMouseEnter = useCallback((e, proj) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setWidth((rect.right - rect.left) * 3);
    setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left - (width/3)
    });
    setHoveredProject(proj);
    setTimeout(() => setIsAnimating(true), 10)
  }, [width]);

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setIsAnimating(false)
  };

  if (loading) return <div>Loading…</div>;

  return (
    <>
        <div className={className}>
            {projects.map((proj, id) => (
                <a href={proj.link} 
                    key={id}
                    onMouseEnter={(e) => handleMouseEnter(e, proj)}
                    onMouseLeave={handleMouseLeave}>
                        <img src={proj.icon} className={classNameInner} alt={proj.title} />
                </a>
            ))}
        </div>

        {hoveredProject && createPortal(
            <div
                className={`absolute opacity-0 px-5 py-2 h-fit bg-neutral-800/90 rounded-2xl 
                    z-9999 shadow-[inset_0px_0px_47px_-16px_#0f0f0f] transition-all duration-500 ease-out
                    flex flex-col gap-2
                    ${isAnimating 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-2 scale-95'
                    }`}
                style={{ top: `${position.top + 3}px`, left: `${position.left}px`, width: `${width}px` }}
            >
                <span className={`text-lg font-semibold opacity-0 transition delay-100 ${isAnimating ? "opacity-100 translate-y-0" : "-translate-y-3"}`}>{hoveredProject.name}</span>
                <span className={`text-sm leading-relaxed opacity-0 transition delay-150 ${isAnimating ? "opacity-100 translate-y-0" : "-translate-y-3"}`}>{hoveredProject.desc}</span>
            </div>,
            document.body
        )}
    </>
  );
}

export default ModrinthIcons;