import React from "react";

const Metrics = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  const percent = (count) => (total === 0 ? 0 : Math.round((count / total) * 100));

  const barStyle = (value, color) => ({
    width: `${value}%`,
    height: "8px",
    background: color,
    borderRadius: "5px",
    transition: "width 0.3s ease",
  });

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
        📊 Team Metrics
      </h2>

      {/* Total */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "6px" }}>📌 Total Tasks: {total}</p>
        <div style={{ background: "#eee", borderRadius: "5px" }}>
          <div style={barStyle(percent(total), "#1976d2")}></div>
        </div>
      </div>

      {/* Completed */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "6px" }}>✅ Completed: {completed} ({percent(completed)}%)</p>
        <div style={{ background: "#eee", borderRadius: "5px" }}>
          <div style={barStyle(percent(completed), "#43a047")}></div>
        </div>
      </div>

      {/* In Progress */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "6px" }}>⚡ In Progress: {inProgress} ({percent(inProgress)}%)</p>
        <div style={{ background: "#eee", borderRadius: "5px" }}>
          <div style={barStyle(percent(inProgress), "#ff9800")}></div>
        </div>
      </div>

      {/* Pending */}
      <div>
        <p style={{ marginBottom: "6px" }}>⏳ Pending: {pending} ({percent(pending)}%)</p>
        <div style={{ background: "#eee", borderRadius: "5px" }}>
          <div style={barStyle(percent(pending), "#e53935")}></div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
