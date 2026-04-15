import { useState } from "react";

const ARTICLES = {
  cheerMeUp: {
    url: "https://www.goodnewsnetwork.org/category/news/",
    image: "https://images.unsplash.com/photo-1590698933947-a202b069a861?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  feelingLucky: {
    url: "https://www.randomarticle.link/",
    image: "https://plus.unsplash.com/premium_photo-1664392434825-eb95db0931d4?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function MoodCards() {
  const [hovered, setHovered] = useState(null);

  const handleClick = (key) => {
    window.open(ARTICLES[key].url, "_blank");
  };

  return (
    <div style={s.col}>
      {[
        { key: "cheerMeUp", label: "Cheer me Up", sub: "From all projects", desc: "happy news · Based on likes" },
        { key: "feelingLucky", label: "Feeling Lucky", sub: "From all projects", desc: "surprise me! · Based on likes" },
      ].map(({ key, label, sub, desc }) => (
        <div
          key={key}
          style={{ ...s.card, background: hovered === key ? "#f5f2ee" : "#fff" }}
          onClick={() => handleClick(key)}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={s.row}>
            <div style={s.text}>
              <div style={s.label}>{label}</div>
              <div style={s.sub}>{sub}</div>
              <div style={s.desc}>{desc}</div>
            </div>
            <img
              src={ARTICLES[key].image}
              alt={label}
              style={s.photo}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const s = {
  col: { display: "flex", flexDirection: "column", gap: 8 },
  card: {
    border: "1px solid #e8e4de",
    borderRadius: 12,
    padding: "9px 12px",
    cursor: "pointer",
    flex: 1,
    transition: "background 0.15s",
  },
  row: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 },
  text: { display: "flex", flexDirection: "column", flex: 1 },
  label: { fontSize: 12, fontWeight: 500, color: "#1a1a1a" },
  sub: { fontSize: 10, color: "#bbb", marginBottom: 4 },
  desc: { fontSize: 9.5, color: "#bbb", marginTop: 3 },
  photo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    objectFit: "cover",
    flexShrink: 0,
  },
};