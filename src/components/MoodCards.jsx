import { useState } from "react";

const CHEER_ARTICLES = [
  { url: "https://www.positive.news/environment/king-of-the-birds-set-to-return-to-englands-skies/" },
  { url: "https://www.positive.news/environment/energy/what-does-the-new-1bn-investment-in-community-energy-really-mean/" },
  { url: "https://www.positive.news/society/good-news-stories-from-week-15-of-2026/" },
  { url: "https://www.positive.news/lifestyle/health/cancer-deaths-fall-to-historic-low-in-uk-this-is-probably-why/" },
  { url: "https://www.positive.news/society/good-news-stories-from-week-13-of-2026/" },
];

const LUCKY_ARTICLES = [
  { url: "https://www.nytimes.com/live/2026/04/15/us/trump-news" },
  { url: "https://apnews.com/article/philippine-marcos-health-exercises-10041aaa1dca49fa2ba29e4da7fd9334" },
  { url: "https://www.npr.org/2026/03/13/nx-s1-5680260/robowar-robot-battle-detroit" },
  { url: "https://www.npr.org/2025/07/30/nx-s1-5482984/dude-big-lebowski-surfer-origin-etymology" },
  { url: "https://www.npr.org/2025/05/19/nx-s1-5395983/baby-monkey-kidnappings-capuchin-howler-culture" },
];

const IMAGES = {
  cheerMeUp: "https://images.unsplash.com/photo-1590698933947-a202b069a861?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  feelingLucky: "https://plus.unsplash.com/premium_photo-1664392434825-eb95db0931d4?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function MoodCards() {
  const [hovered, setHovered] = useState(null);

  const handleClick = (key) => {
    const pool = key === "cheerMeUp" ? CHEER_ARTICLES : LUCKY_ARTICLES;
    const article = getRandom(pool);
    window.open(article.url, "_blank");
  };

  return (
    <div style={s.col}>
      {[
        { key: "cheerMeUp", label: "Cheer Me Up", desc: "Positive news to brighten your day" },
        { key: "feelingLucky", label: "Feeling Lucky", desc: "Daily randomized article based on your likes" },
      ].map(({ key, label, desc }) => (
        <div
          key={key}
          style={{ ...s.card, background: hovered === key ? "#f5f2ee" : "#fff" }}
          onClick={() => handleClick(key)}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={s.row}>
            <div>
              <div style={s.label}>{label}</div>
              <div style={s.desc}>{desc}</div>
            </div>
            <img src={IMAGES[key]} alt={label} style={s.photo} />
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
  label: { fontSize: 14.5, fontWeight: 700, color: "#1a1a1a" },
  desc: { fontSize: 12, color: "#888", marginTop: 2 },
  photo: { width: 48, height: 48, borderRadius: 8, objectFit: "cover", flexShrink: 0 },
};
