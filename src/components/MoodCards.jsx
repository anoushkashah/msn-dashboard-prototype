export default function MoodCards() {
  return (
    <div style={s.col}>
      <div style={s.card}>
        <div style={s.label}>Cheer me Up</div>
        <div style={s.sub}>From all projects</div>
        <span style={s.icon}>🙂</span>
        <div style={s.slider}>
          <span style={s.pct}>0%</span>
          <div style={s.track}><div style={{ ...s.fill, width: "100%" }} /></div>
          <span style={s.pct}>100%</span>
        </div>
        <div style={s.desc}>happy news · Based on likes</div>
      </div>
      <div style={s.card}>
        <div style={s.label}>Feeling Lucky</div>
        <div style={s.sub}>From all projects</div>
        <span style={s.icon}>🎲</span>
        <div style={s.slider}>
          <span style={s.pct}>0%</span>
          <div style={s.track}><div style={{ ...s.fill, width: "60%" }} /></div>
          <span style={s.pct}>100%</span>
        </div>
        <div style={s.desc}>surprise me! · Based on likes</div>
      </div>
    </div>
  );
}

const s = {
  col: { display: "flex", flexDirection: "column", gap: 8 },
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 12, padding: "9px 12px", cursor: "pointer", flex: 1 },
  label: { fontSize: 12, fontWeight: 500, color: "#1a1a1a" },
  sub: { fontSize: 10, color: "#bbb", marginBottom: 5 },
  icon: { fontSize: 20, marginBottom: 5, display: "block" },
  slider: { display: "flex", alignItems: "center", gap: 4 },
  pct: { fontSize: 9, color: "#ccc" },
  track: { flex: 1, height: 2, background: "#eee", borderRadius: 2 },
  fill: { height: "100%", borderRadius: 2, background: "#c8c3bc" },
  desc: { fontSize: 9.5, color: "#bbb", marginTop: 3 },
};