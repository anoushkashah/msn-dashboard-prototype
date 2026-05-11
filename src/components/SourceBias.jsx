import { biasData } from "../data";

export default function SourceBias() {
  const total = biasData.left.sources + biasData.center.sources + biasData.right.sources;
  const leftFrac = biasData.left.sources / total;
  const dotAngle = Math.PI - leftFrac * Math.PI;
  const dotX = 80 + 64 * Math.cos(dotAngle);
  const dotY = 82 - 64 * Math.sin(dotAngle);

  return (
    <div style={s.card}>
      <div style={s.header}>
        <div style={s.title}>Source Political Diversity</div>
        <div style={s.subtitle}>Political leaning of your sources</div>
      </div>

      <div style={s.gaugeWrap}>
        <svg width="160" height="90" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="biasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1550a8" />
              <stop offset="50%" stopColor="#888888" />
              <stop offset="100%" stopColor="#9e2218" />
            </linearGradient>
            <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M16 82 A64 64 0 0 1 144 82" fill="none" stroke="#eee" strokeWidth="10" strokeLinecap="round" />
          <path d="M16 82 A64 64 0 0 1 144 82" fill="none" stroke="url(#biasGrad)" strokeWidth="10" strokeLinecap="round" />
          {/* glowing dot on arc */}
          <circle cx={dotX} cy={dotY} r="7" fill="white" opacity="0.5" filter="url(#glow)" />
          <circle cx={dotX} cy={dotY} r="5" fill="white" filter="url(#glow)" />
          <circle cx={dotX} cy={dotY} r="3" fill="white" />
        </svg>
      </div>

      <div style={s.rows}>
        {[
          { label: "Left", value: biasData.left.sources, color: "#1550a8" },
          { label: "Center", value: biasData.center.sources, color: "#888888" },
          { label: "Right", value: biasData.right.sources, color: "#9e2218" },
        ].map(r => (
          <div key={r.label} style={s.row}>
            <div style={{ ...s.rowDot, background: r.color }} />
            <div style={s.rowLabel}>{r.label}</div>
            <div style={s.rowBar}>
              <div style={{ ...s.rowFill, width: `${(r.value / total) * 100}%`, background: r.color }} />
            </div>
            <div style={s.rowVal}>{r.value}</div>
          </div>
        ))}
      </div>

      <div style={s.link}>
        View a breakdown of your sources <span style={s.arrow}>→</span>
      </div>
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", flex: 1, display: "flex", flexDirection: "column" },
  header: { marginBottom: 8 },
  title: { fontSize: 14, fontWeight: 600, color: "#1a1a1a" },
  subtitle: { fontSize: 11.5, color: "#aaa", marginTop: 2 },
  gaugeWrap: { display: "flex", justifyContent: "center", margin: "4px 0 8px" },
  rows: { display: "flex", flexDirection: "column", gap: 10 },
  row: { display: "flex", alignItems: "center", gap: 7 },
  rowDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  rowLabel: { fontSize: 12, color: "#555", width: 36 },
  rowBar: { flex: 1, height: 4, background: "#f0ece7", borderRadius: 2, overflow: "hidden" },
  rowFill: { height: "100%", borderRadius: 2 },
  rowVal: { fontSize: 12, color: "#888", width: 28, textAlign: "right" },
  link: { marginTop: "auto", paddingTop: 12, fontSize: 12, color: "#555", cursor: "pointer" },
  arrow: { fontSize: 13 },
};
