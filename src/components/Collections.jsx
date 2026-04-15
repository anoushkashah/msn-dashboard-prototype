import { useState } from "react";
import { collections } from "../data";
import { BookOpen, Share2, FolderOpen, ChevronRight } from "lucide-react";

const weeklyData = [
  { week: "Mar 24", read: 18 },
  { week: "Mar 31", read: 22 },
  { week: "Apr 7",  read: 20 },
  { week: "Apr 14", read: 25 },
];

const maxRead = Math.max(...weeklyData.map(d => d.read));
const allTopics = ["All", ...new Set(collections.map(c => c.topic))];

export default function Collections() {
  const [tab, setTab] = useState("collections");
  const [expanded, setExpanded] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? collections
    : collections.filter(c => c.topic === activeFilter);

  return (
    <div style={s.card}>
      <div style={s.tabs}>
        <button style={{ ...s.tab, ...(tab === "collections" ? s.activeTab : {}) }} onClick={() => setTab("collections")}>
          <FolderOpen size={12} /> Collections
        </button>
        <button style={{ ...s.tab, ...(tab === "stats" ? s.activeTab : {}) }} onClick={() => setTab("stats")}>
          <BookOpen size={12} /> Your Stats
        </button>
      </div>

      {tab === "collections" && (
        <div>
          <div style={s.filters}>
            {allTopics.map(t => (
              <button
                key={t}
                style={{ ...s.filterBtn, ...(activeFilter === t ? s.filterActive : {}) }}
                onClick={() => setActiveFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={s.collList}>
            {filtered.map(c => (
              <div key={c.id}>
                <div style={s.collItem} onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
                  <div style={{ ...s.collIcon, background: c.topicBg }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c.topicColor }}>
                      {c.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={s.collName}>{c.name}</div>
                    <div style={s.collMeta}>
                      <span style={{ ...s.topicTag, background: c.topicBg, color: c.topicColor }}>{c.topic}</span>
                      <span style={s.collCount}>{c.count} articles</span>
                    </div>
                  </div>
                  <ChevronRight size={14} color="#ccc" style={{ transform: expanded === c.id ? "rotate(90deg)" : "none", transition: "transform .15s", flexShrink: 0 }} />
                </div>
                {expanded === c.id && (
                  <div style={s.collArticles}>
                    {c.articles.map((a, i) => (
                      <div key={i} style={s.collArticle}>
                        <div style={{ ...s.collDot, background: c.topicColor }} />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "stats" && (
        <div style={s.stats}>
          <div style={s.delta}>+23% from last week</div>
          <div style={s.statsGrid}>
            <div style={s.statBox}>
              <div style={{ ...s.statIcon, background: "#e8f0fe" }}><BookOpen size={13} color="#0067b8" /></div>
              <div style={s.statLabel}>Read this week</div>
              <div style={s.statVal}>25</div>
            </div>
            <div style={s.statBox}>
              <div style={{ ...s.statIcon, background: "#fdf0e8" }}><Share2 size={13} color="#e07b39" /></div>
              <div style={s.statLabel}>Shared this week</div>
              <div style={s.statVal}>6</div>
            </div>
            <div style={s.statBox}>
              <div style={{ ...s.statIcon, background: "#e8f0fe" }}><BookOpen size={13} color="#0067b8" /></div>
              <div style={s.statLabel}>Read total</div>
              <div style={s.statVal}>236</div>
            </div>
            <div style={s.statBox}>
              <div style={{ ...s.statIcon, background: "#fdf0e8" }}><Share2 size={13} color="#e07b39" /></div>
              <div style={s.statLabel}>Shared total</div>
              <div style={s.statVal}>40</div>
            </div>
          </div>
          <div style={s.chartLabel}>Articles read per week</div>
          <div style={s.chart}>
            {weeklyData.map((d, i) => (
              <div key={i} style={s.barCol}>
                <div style={s.barWrap}>
                  <div style={{ ...s.bar, height: `${(d.read / maxRead) * 100}%` }} />
                </div>
                <div style={s.barVal}>{d.read}</div>
                <div style={s.barWeek}>{d.week}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", display: "flex", flexDirection: "column", gap: 10 },
  tabs: { display: "flex", gap: 6, marginBottom: 2 },
  tab: { display: "flex", alignItems: "center", gap: 4, background: "#f3f0eb", border: "1px solid #e0dbd3", borderRadius: 20, padding: "4px 10px", fontSize: 12, color: "#666", cursor: "pointer", fontFamily: "inherit" },
  activeTab: { background: "#1a1a1a", color: "#fff", border: "1px solid #1a1a1a" },
  filters: { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 },
  filterBtn: { background: "#f3f0eb", border: "1px solid #e0dbd3", borderRadius: 20, padding: "3px 10px", fontSize: 11.5, color: "#666", cursor: "pointer", fontFamily: "inherit" },
  filterActive: { background: "#1a1a1a", color: "#fff", border: "1px solid #1a1a1a" },
  collList: { display: "flex", flexDirection: "column" },
  collItem: { display: "flex", alignItems: "center", gap: 10, padding: "10px 0", cursor: "pointer", borderBottom: "1px solid #f2ede8" },
  collIcon: { width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  collName: { fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 },
  collMeta: { display: "flex", alignItems: "center", gap: 7 },
  topicTag: { fontSize: 10.5, fontWeight: 600, padding: "2px 8px", borderRadius: 20 },
  collCount: { fontSize: 11, color: "#aaa" },
  collArticles: { paddingLeft: 46, paddingBottom: 8, paddingTop: 2 },
  collArticle: { fontSize: 12.5, color: "#555", padding: "4px 0", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 7 },
  collDot: { width: 5, height: 5, borderRadius: "50%", flexShrink: 0, marginTop: 7 },
  stats: { display: "flex", flexDirection: "column", gap: 10 },
  delta: { fontSize: 12, color: "#27a157", fontWeight: 500 },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 },
  statBox: { background: "#f8f5f1", borderRadius: 10, padding: "9px 11px", display: "flex", flexDirection: "column", gap: 4 },
  statIcon: { width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" },
  statLabel: { fontSize: 11, color: "#999" },
  statVal: { fontSize: 18, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.4px" },
  chartLabel: { fontSize: 11, color: "#aaa", marginTop: 4 },
  chart: { display: "flex", gap: 8, alignItems: "flex-end", height: 90 },
  barCol: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, height: "100%" },
  barWrap: { flex: 1, width: "100%", display: "flex", alignItems: "flex-end" },
  bar: { width: "100%", background: "#0067b8", borderRadius: "4px 4px 0 0", transition: "height .3s ease", minHeight: 4 },
  barVal: { fontSize: 10, color: "#555", fontWeight: 500 },
  barWeek: { fontSize: 9, color: "#bbb", textAlign: "center" },
};