import { useEffect, useState } from "react";
import { parseProjectsForDownloads } from "../utils/modrinth";
import HoverTooltip from "../src/Components/HoverTooltip";
import { ThreeDot } from "react-loading-indicators";

function ModrinthIcons({ className, classNameInner }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) return <ThreeDot color="#0f1f80" size="medium" text="" textColor="" />;

  return (
    <div className={className}>
      {projects.map((proj, id) => (
        <HoverTooltip
          key={id}
          widthMultiplier={3}
          content={
            <div className="flex flex-col gap-2 transition-all duration-200 ">
              <span className="text-lg font-semibold">{proj.name}</span>
              <span className="text-sm leading-relaxed">{proj.desc}</span>
            </div>
          }
          animationDuration={500}
        >
          <a href={proj.link} target="_blank">
            <img src={proj.icon} className={classNameInner} alt={proj.title} />
          </a>
        </HoverTooltip>
      ))}
    </div>
  );
}

export default ModrinthIcons;