import { useEffect, useState } from "react";
import { parseProjectsForDownloads } from "../../utils/modrinth";
import { ThreeDot } from 'react-loading-indicators';

function useModrinthStats() {
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

  if (loading) return <ThreeDot color="#0f1f80" size="medium" text="" textColor="" />;

  return {totalDownloads, projects}
}

export default useModrinthStats;