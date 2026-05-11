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

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const CARDS = [
  { key: "cheerMeUp", label: "Cheer Me Up", desc: "Positive news to brighten your day" },
  { key: "feelingLucky", label: "Feeling Lucky", desc: "Daily randomized article based on your likes" },
];

export default function MoodCards() {
  const [hovered, setHovered] = useState(null);

  const handleClick = (key) => {
    const pool = key === "cheerMeUp" ? CHEER_ARTICLES : LUCKY_ARTICLES;
    window.open(getRandom(pool).url, "_blank");
  };

  return (
    <div style={s.outer}>
      {CARDS.map(({ key, label, desc }) => (
        <div
          key={key}
          style={{ ...s.inner, background: hovered === key ? "#ede8e1" : "#f0ece7" }}
          onClick={() => handleClick(key)}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
        >
          <div style={s.label}>{label}</div>
          <div style={s.desc}>{desc}</div>
        </div>
      ))}
    </div>
  );
}

const s = {
  outer: {
    background: "#fff",
    border: "1px solid #e8e4de",
    borderRadius: 14,
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flex: 1,
  },
  inner: {
    borderRadius: 10,
    padding: "11px 13px",
    cursor: "pointer",
    transition: "background 0.15s",
    flex: 1,
  },
  label: { fontSize: 14, fontWeight: 600, color: "#1a1a1a" },
  desc: { fontSize: 11.5, color: "#aaa", marginTop: 2 },
};
