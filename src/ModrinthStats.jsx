import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { parseProjectsForDownloads } from "../utils/modrinth";
import { ThreeDot } from 'react-loading-indicators';

function ModrinthStats() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);

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

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const newWidth = (rect.right - rect.left) * 1.25
      setWidth(newWidth);
      setPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left - (newWidth / 10)
      });
      setIsReady(true); 
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsReady(false); 
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsAnimating(false); 
        setTimeout(() => setIsOpen(false), 200); 
      }
    };

    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  if (loading) return <ThreeDot color="#0f1f80" size="medium" text="" textColor="" />;

  return (
    <>
      <div className="relative flex z-50 gap-2" ref={buttonRef}>
        <div className="md:text-xl text-sm font-bold w-full text-center tracking-wide z-100 flex gap-2 items-center">
          Total Downloads:<span>{totalDownloads}</span>
        </div>
        <div>
          <button
            onClick={() => {
              if (isOpen) {
                setIsAnimating(false); // ← Close animation
                setTimeout(() => setIsOpen(false), 200);
              } else {
                setIsOpen(true); // ← Open immediately
              }
            }}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none cursor-pointer"
          >
            <span className={`block h-0.5 w-4 bg-white rounded transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-4 bg-white rounded transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-4 bg-white rounded transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {isOpen && isReady && createPortal(
        <div 
          className={`absolute opacity-0 px-5 py-5 h-fit bg-neutral-800/90 rounded-2xl z-9999 shadow-[inset_0px_0px_47px_-16px_#0f0f0f]
            transition-all duration-200 ease-out
            ${isAnimating 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95'
            }`}
          style={{ top: `${position.top}px`, left: `${position.left}px`, width: `${width}px` }}
          ref={menuRef}
        >
          <ul className="flex flex-col gap-3">
            {projects.map((p, index) => (
              <li 
                key={p.name} 
                className={`text-left align-middle transition-all duration-200 
                  ${isAnimating 
                    ? `translate-y-0 opacity-100` 
                    : "translate-y-2 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-lg font-bold">
                  <a href={p.link} target="_blank" className="
                    inline-block text-lg font-bold relative 
                    after:absolute after:left-0 after:-bottom-[0.1px] 
                    after:h-0.5 after:w-0 after:bg-current after:transition-all 
                    after:duration-200 hover:after:w-full"
                  >
                    {p.name}
                  </a>:
                </span>
                <span className="font-normal"> {p.downloads.toLocaleString()} Downloads</span>
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