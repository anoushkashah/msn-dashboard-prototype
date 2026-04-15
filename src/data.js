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
  {
    lat: 51.5, lng: -0.12, label: "London", stories: 3,
    articles: [
      { title: "UK PM Starmer rules out emergency economic measures", publisher: "BBC News", url: "https://www.bbc.com/news/uk-politics" },
      { title: "Bank of England holds interest rates steady", publisher: "The Guardian", url: "https://www.theguardian.com/business/bank-of-england" },
      { title: "London rents hit all-time high amid housing crisis", publisher: "Financial Times", url: "https://www.ft.com/uk-economy" },
    ]
  },
  {
    lat: 40.71, lng: -74.0, label: "New York", stories: 3,
    articles: [
      { title: "DOJ moves to dismiss Jan. 6 convictions against Proud Boys", publisher: "CBS News", url: "https://www.cbsnews.com/news/doj-moves-dismiss-jan-6-convictions-proud-boys-oath-keepers-seditious-conspiracy/" },
      { title: "Wall Street rallies as inflation data comes in cooler than expected", publisher: "Reuters", url: "https://www.reuters.com/markets" },
      { title: "NYC congestion pricing sees first full month of results", publisher: "NPR", url: "https://www.npr.org/sections/national/" },
    ]
  },
  {
    lat: 35.68, lng: 139.69, label: "Tokyo", stories: 2,
    articles: [
      { title: "Japan's economy contracts for second quarter amid export slump", publisher: "Reuters", url: "https://www.reuters.com/world/asia-pacific" },
      { title: "Tokyo Olympics legacy sites face uncertain future", publisher: "AP News", url: "https://apnews.com/hub/japan" },
    ]
  },
  {
    lat: -23.55, lng: -46.63, label: "São Paulo", stories: 2,
    articles: [
      { title: "Brazil's Supreme Court clashes with Congress over new legislation", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/americas" },
      { title: "Amazon deforestation rates drop for second consecutive year", publisher: "BBC News", url: "https://www.bbc.com/news/world-latin-america" },
    ]
  },
  {
    lat: 28.61, lng: 77.2, label: "New Delhi", stories: 3,
    articles: [
      { title: "India and Pakistan tensions rise following border skirmish", publisher: "Al Jazeera", url: "https://www.aljazeera.com/news/asia" },
      { title: "India's GDP growth forecast revised upward by IMF", publisher: "Reuters", url: "https://www.reuters.com/world/india" },
      { title: "New Delhi air quality reaches hazardous levels this week", publisher: "NPR", url: "https://www.npr.org/sections/goatsandsoda" },
    ]
  },
  {
    lat: 1.35, lng: 103.82, label: "Singapore", stories: 2,
    articles: [
      { title: "Singapore becomes Asia's top financial hub overtaking Hong Kong", publisher: "Financial Times", url: "https://www.ft.com/singapore" },
      { title: "Southeast Asia trade deal gains momentum at regional summit", publisher: "Reuters", url: "https://www.reuters.com/world/asia-pacific" },
    ]
  },
];