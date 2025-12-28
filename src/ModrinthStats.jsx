import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { parseProjectsForDownloads } from "../utils/modrinth";
import { ThreeDot } from 'react-loading-indicators';

function ModrinthStats() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

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
        console.error("Failed to fetch projects", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const total = projects.reduce((sum, proj) => sum + proj.downloads, 0);
    setTotalDownloads(total);
  }, [projects]);

  // Simplified click outside handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Small delay to prevent immediate closing
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (loading) return (
    <div className="flex justify-center items-center">
      <ThreeDot color="#0f1f80" size="medium" text="" textColor="" />
    </div>
  );

  return (
    <>
      <div className="relative flex z-50 gap-2" ref={buttonRef}>
        <div className="md:text-xl text-sm font-bold w-full text-center tracking-wide flex gap-2 items-center">
          Total Downloads: <span>{totalDownloads}</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none cursor-pointer"
        >
          <span className={`block h-0.5 w-4 bg-white rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-4 bg-white rounded transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-4 bg-white rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {isOpen && buttonRef.current && createPortal(
        <div 
          className="absolute px-5 py-5 bg-neutral-800/90 rounded-2xl z-[9999] shadow-lg"
          style={{ 
            top: `${buttonRef.current.getBoundingClientRect().bottom + window.scrollY + 8}px`,
            left: `${buttonRef.current.getBoundingClientRect().left}px`,
            minWidth: `${buttonRef.current.getBoundingClientRect().width * 1.25}px`
          }}
          ref={menuRef}
        >
          <ul className="flex flex-col gap-3">
            {projects.map((p) => (
              <li key={p.name} className="text-left">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-purple-400 transition-colors"
                >
                  {p.name}
                </a>
                <span className="font-normal text-gray-400">: {p.downloads.toLocaleString()} Downloads</span>
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}

export default ModrinthStats;