const modules = import.meta.glob("./**/*.jsx", { eager: true });

export const activities = Object.entries(modules)
  .map(([path, mod]) => ({
    id: path,
    topic: path.split("/")[1],
    name: path.split("/").pop().replace(".jsx", ""),
    Component: mod.default,
  }))
  .sort((a, b) => a.id.localeCompare(b.id));