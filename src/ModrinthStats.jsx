import { useEffect, useState } from "react";
import { parseProjectsForDownloads } from "../utils/modrinth";

function ModrinthStats() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalDownloads, setTotalDownloads] = useState(0);

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

  if (loading) return <div>Loading…</div>;

  return (
    <div>
        <ul>
        {projects.map((p) => (
            <li key={p.name}>
                <span className="text-lg font-bold"><a href={p.link} target="_blank">{p.name}</a>: </span>
                <span className="font-normal">{p.downloads.toLocaleString()} Downloads</span>
            </li>
        ))}
        </ul>
        <span className="text-rose-700 text-2xl font-extrabold"><a href="https://www.modrinth.com/user/JollyJoe" target="_blank">Total Downloads</a>: </span>
        <span className="text-rose-700 text-2xl font-extrabold">{totalDownloads}</span>
    </div>
  );
}

export default ModrinthStats;