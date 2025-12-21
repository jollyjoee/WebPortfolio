export function parseProjectsForDownloads(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((proj) => {
    const name = proj.title || proj.id || "Unknown project";
    const link = "https://www.modrinth.com/plugin/" + proj.slug 
    const downloads =
      typeof proj.downloads === "number" ? proj.downloads : 0;

    return { name, downloads, link };
  });
}