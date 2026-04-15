export const topTopics = [
  {
    id: 1,
    label: "Today's Money",
    value: "$53,000",
    delta: "+55%",
    up: true,
    icon: "💰",
    article: {
      title: "Fed holds rates steady as inflation cools to 2.4%",
      publisher: "Financial Times",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
      url: "https://ft.com",
    },
  },
  {
    id: 2,
    label: "Economy & Business",
    value: "+3,052",
    delta: "-14%",
    up: false,
    icon: "📄",
    article: {
      title: "Global supply chains show signs of strain after tariff hike",
      publisher: "Reuters",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
      url: "https://reuters.com",
    },
  },
  {
    id: 3,
    label: "Sports",
    value: "$173,000",
    delta: "+8%",
    up: true,
    icon: "🏅",
    article: {
      title: "NBA playoffs: Warriors edge Celtics in overtime thriller",
      publisher: "ESPN",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
      url: "https://espn.com",
    },
  },
];

export const headlines = [
  { id: 1, color: "#0067b8", text: "Starmer holds off from emergency measures", publisher: "BBC News", time: "22 DEC 7:20 PM" },
  { id: 2, color: "#c0392b", text: "DNA testing confirms Ted Bundy killed Utah teen", publisher: "Associated Press", time: "21 DEC 11:21 PM" },
  { id: 3, color: "#888", text: "U.S. lifts sanctions on acting Venezuelan President", publisher: "Reuters", time: "21 DEC 9:28 PM" },
  { id: 4, color: "#27a157", text: "Scientists announce breakthrough in Alzheimer's treatment", publisher: "Nature", time: "21 DEC 6:10 PM" },
];

export const collections = [
  {
    id: 1,
    name: "Tech Deep Dives",
    count: 12,
    color: "#e8f0fe",
    icon: "💻",
    articles: ["AI regulation bill passes Senate", "OpenAI launches new model", "Apple Vision Pro 2 leaked"],
  },
  {
    id: 2,
    name: "Climate Watch",
    count: 8,
    color: "#eaf7ef",
    icon: "🌍",
    articles: ["Arctic ice hits record low", "EU carbon targets revised", "Solar energy surpasses coal"],
  },
  {
    id: 3,
    name: "Markets",
    count: 21,
    color: "#fdf0e8",
    icon: "📈",
    articles: ["S&P 500 closes at all-time high", "Bitcoin surges past $80k", "Dollar weakens vs yen"],
  },
  {
    id: 4,
    name: "Saved for Later",
    count: 5,
    color: "#fdeeed",
    icon: "🔖",
    articles: ["How to sleep better", "Best budget laptops 2025", "Travel guide: Japan"],
  },
];

export const biasData = {
  left: { sources: 145, lean: "Left-leaning" },
  center: { sources: 78, lean: "Center" },
  right: { sources: 22, lean: "Right-leaning" },
};

export const statsData = {
  articlesReadThisWeek: 247,
  articlesReadTotal: 32984,
  articlesShared: "2.42m",
  weekDelta: "+23",
};

export const mapMarkers = [
  { lat: 51.5, lng: -0.12, label: "London", stories: 14 },
  { lat: 40.71, lng: -74.0, label: "New York", stories: 22 },
  { lat: 35.68, lng: 139.69, label: "Tokyo", stories: 9 },
  { lat: -23.55, lng: -46.63, label: "São Paulo", stories: 6 },
  { lat: 28.61, lng: 77.2, label: "New Delhi", stories: 11 },
  { lat: 1.35, lng: 103.82, label: "Singapore", stories: 7 },
];