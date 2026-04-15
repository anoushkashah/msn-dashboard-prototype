const headlines = [
  {
    id: 1,
    text: "UK Prime Minister Starmer rules out emergency economic measures amid market turmoil",
    publisher: "BBC News",
    time: "22 DEC 7:20 PM",
    url: "https://www.bbc.com/news/articles/c9dl73x9gdeo",
    publisherColor: "#000",
    publisherBg: "#f5a500",
    publisherFont: "BBC Reith, Georgia, serif",
  },
  {
    id: 2,
    text: "Decades-old mystery solved: DNA confirms Ted Bundy killed 17-year-old Debra Kent",
    publisher: "Associated Press",
    time: "21 DEC 11:21 PM",
    url: "https://apnews.com/article/ted-bundy-dna-utah-victim-identified",
    publisherColor: "#fff",
    publisherBg: "#cc0000",
    publisherFont: "Arial, sans-serif",
  },
  {
    id: 3,
    text: "Biden administration lifts sanctions on Venezuela's acting President Maduro ally",
    publisher: "Reuters",
    time: "21 DEC 9:28 PM",
    url: "https://www.reuters.com/world/americas",
    publisherColor: "#fff",
    publisherBg: "#ff7a00",
    publisherFont: "Arial, sans-serif",
  },
  {
    id: 4,
    text: "New drug trial shows 35% reduction in Alzheimer's cognitive decline in phase 3 results",
    publisher: "The Guardian",
    time: "21 DEC 6:10 PM",
    url: "https://www.theguardian.com/science/alzheimers-disease",
    publisherColor: "#fff",
    publisherBg: "#052962",
    publisherFont: "Guardian Egyptian, Georgia, serif",
  },
];

export default function Headlines() {
  return (
    <div style={s.card}>
      <div style={s.title}>Top Headlines Today</div>
      {headlines.map(h => (
        <a key={h.id} href={h.url} target="_blank" rel="noreferrer" style={s.item}>
          <div style={s.text}>{h.text}</div>
          <div style={s.bottom}>
            <span style={{
              ...s.publisherBadge,
              background: h.publisherBg,
              color: h.publisherColor,
              fontFamily: h.publisherFont,
            }}>
              {h.publisher}
            </span>
            <span style={s.time}>{h.time}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", gap: 2 },
  title: { fontSize: 13.5, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 },
  item: { display: "flex", flexDirection: "column", padding: "8px 0", borderBottom: "1px solid #f2ede8", textDecoration: "none", cursor: "pointer" },
  text: { fontSize: 12.5, color: "#333", lineHeight: 1.4, marginBottom: 5 },
  bottom: { display: "flex", alignItems: "center", gap: 8 },
  publisherBadge: { fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4, letterSpacing: "0.02em" },
  time: { fontSize: 10, color: "#bbb" },
};