import { useState } from "react";
import { activities } from "./activities";

export default function App() {
  const [selectedId, setSelectedId] = useState(activities[0]?.id);
  const current = activities.find((a) => a.id === selectedId);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <nav style={{ width: 240, padding: 16, borderRight: "1px solid #ccc" }}>
        <h2>React Lab</h2>
        {activities.map((a) => (
          <button
            key={a.id}
            onClick={() => setSelectedId(a.id)}
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 4,
              fontWeight: a.id === selectedId ? "bold" : "normal",
            }}
          >
            {a.topic} / {a.name}
          </button>
        ))}
      </nav>
      <main style={{ flex: 1, padding: 24 }}>
        {current ? <current.Component /> : <p>No activities yet.</p>}
      </main>
    </div>
  );
}