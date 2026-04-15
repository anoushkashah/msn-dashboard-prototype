import { headlines } from "../data";

export default function Headlines() {
  return (
    <div style={s.card}>
      <div style={s.header}>
        <div>
          <div style={s.title}>Top Headlines Today</div>
          <div style={s.meta}>+30% this month</div>
        </div>
      </div>
      {headlines.map(h => (
        <div key={h.id} style={s.item}>
          <div style={{ ...s.dot, background: h.color }} />
          <div style={{ flex: 1 }}>
            <div style={s.text}>{h.text}</div>
            <div style={s.bottom}>
              <span style={{ ...s.publisher, color: h.color }}>{h.publisher}</span>
              <span style={s.time}>{h.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column" },
  header: { marginBottom: 12 },
  title: { fontSize: 13.5, fontWeight: 600, color: "#1a1a1a" },
  meta: { fontSize: 11, color: "#27a157", marginTop: 2 },
  item: { display: "flex", alignItems: "flex-start", gap: 9, padding: "8px 0", borderBottom: "1px solid #f2ede8" },
  dot: { width: 7, height: 7, borderRadius: "50%", flexShrink: 0, marginTop: 5 },
  text: { fontSize: 12.5, color: "#333", lineHeight: 1.4, cursor: "pointer" },
  bottom: { display: "flex", alignItems: "center", gap: 8, marginTop: 3 },
  publisher: { fontSize: 10.5, fontWeight: 500 },
  time: { fontSize: 10, color: "#bbb" },
};