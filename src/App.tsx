import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div
      style={{
        padding: "20px",
        background: "#f8f9fa",
        borderRadius: "8px",
        border: "2px solid #667eea",
      }}
    >
      <h3 style={{ color: "#667eea", marginBottom: "15px" }}>Remote App Component</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={() => setCounter(counter - 1)}
          style={{
            padding: "8px 16px",
            background: "#764ba2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Decrement --
        </button>

        <div
          style={{
            padding: "8px 16px",
            background: "#667eea",
            color: "white",
            borderRadius: "4px",
            fontWeight: "bold",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {counter}
        </div>

        <button
          onClick={() => setCounter(counter + 1)}
          style={{
            padding: "8px 16px",
            background: "#764ba2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Increment ++
        </button>
      </div>

      <div style={{ marginTop: "15px", fontSize: "12px", color: "#666" }}>
        This component is exposed from the remote application and dynamically loaded by the host.
      </div>
    </div>
  );
}
