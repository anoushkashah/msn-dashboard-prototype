export default function WelcomeCard() {
  return (
    <div style={s.card}>
      <div style={s.art}>📰</div>
      <div style={s.text}>
        <div style={s.sub}>Welcome back,</div>
        <div style={s.name}>Mark Johnson</div>
        <div style={s.body}>Nutrients like tryptophan and magnesium aid sleep</div>
        <div style={s.link}>Pick up where you left off →</div>
      </div>
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", minHeight: 170 },
  art: { position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(135deg,#fdf6ee 0%,#eddfc8 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, borderRadius: "0 16px 16px 0" },
  text: { position: "relative", zIndex: 1, maxWidth: "60%" },
  sub: { fontSize: 11.5, color: "#aaa", marginBottom: 4 },
  name: { fontSize: 21, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.5px", marginBottom: 12 },
  body: { fontSize: 12, color: "#888", lineHeight: 1.5 },
  link: { fontSize: 12, color: "#0067b8", cursor: "pointer", marginTop: 5 },
};