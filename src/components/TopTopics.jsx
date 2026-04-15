import { useState } from "react";
import { topTopics } from "../data";
import { ExternalLink } from "lucide-react";

export default function TopTopics() {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <div style={s.label}>Your Top Topics</div>
      <div style={s.grid}>
        {topTopics.map(t => (
          <div key={t.id} style={s.card} onMouseEnter={() => setHovered(t.id)} onMouseLeave={() => setHovered(null)}>
            <div style={s.cardTop}>
              <div>
                <div style={s.topicLabel}>{t.label}</div>
                <div style={s.value}>{t.value}</div>
                <span style={{ ...s.badge, ...(t.up ? s.up : s.down) }}>{t.delta}</span>
              </div>
              <div style={{ ...s.icon, background: t.up ? "#e8f0fe" : "#f0eee9" }}>{t.icon}</div>
            </div>

            {hovered === t.id && (
              <a href={t.article.url} target="_blank" rel="noreferrer" style={s.articlePreview}>
                <img src={t.article.image} alt="" style={s.articleImg} />
                <div style={s.articleBody}>
                  <div style={s.articlePublisher}>{t.article.publisher}</div>
                  <div style={s.articleTitle}>{t.article.title}</div>
                  <div style={s.articleLink}><ExternalLink size={10} /> Read article</div>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  label: { fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 10 },
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", cursor: "pointer", transition: "box-shadow .15s", display: "flex", flexDirection: "column", gap: 10 },
  cardTop: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  topicLabel: { fontSize: 11, color: "#999", marginBottom: 3 },
  value: { fontSize: 19, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.5px" },
  badge: { fontSize: 11, fontWeight: 500, padding: "2px 6px", borderRadius: 20, marginTop: 3, display: "inline-block" },
  up: { background: "#eaf7ef", color: "#1a7a3c" },
  down: { background: "#fdeeed", color: "#c0392b" },
  icon: { width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 },
  articlePreview: { display: "flex", gap: 9, background: "#f8f5f1", borderRadius: 10, padding: 9, textDecoration: "none", border: "1px solid #ede9e3" },
  articleImg: { width: 56, height: 56, borderRadius: 8, objectFit: "cover", flexShrink: 0 },
  articleBody: { flex: 1, minWidth: 0 },
  articlePublisher: { fontSize: 10, color: "#0067b8", fontWeight: 500, marginBottom: 3 },
  articleTitle: { fontSize: 11.5, color: "#333", lineHeight: 1.4, marginBottom: 4 },
  articleLink: { fontSize: 10, color: "#0067b8", display: "flex", alignItems: "center", gap: 3 },
};