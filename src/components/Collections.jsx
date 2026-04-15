import { useState } from "react";
import { collections, statsData } from "../data";
import { BookOpen, Share2, FolderOpen, ChevronRight } from "lucide-react";

export default function Collections() {
  const [tab, setTab] = useState("collections");
  const [expanded, setExpanded] = useState(null);

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
        <div style={s.collList}>
          {collections.map(c => (
            <div key={c.id}>
              <div style={s.collItem} onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
                <div style={{ ...s.collIcon, background: c.color }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={s.collName}>{c.name}</div>
                  <div style={s.collCount}>{c.count} articles</div>
                </div>
                <ChevronRight size={13} color="#ccc" style={{ transform: expanded === c.id ? "rotate(90deg)" : "none", transition: "transform .15s" }} />
              </div>
              {expanded === c.id && (
                <div style={s.collArticles}>
                  {c.articles.map((a, i) => (
                    <div key={i} style={s.collArticle}>· {a}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "stats" && (
        <div style={s.stats}>
          <div style={s.statsDelta}>({statsData.weekDelta}) than last week</div>
          <div style={s.statsRow}>
            <div style={s.statItem}>
              <div style={{ ...s.statIcon, background: "#e8f0fe" }}><BookOpen size={13} color="#0067b8" /></div>
              <div style={s.statLabel}>Articles Read This Week</div>
              <div style={s.statVal}>{statsData.articlesReadThisWeek}</div>
              <div style={{ ...s.bar, background: "#0067b8", width: "78%" }} />
            </div>
            <div style={s.statItem}>
              <div style={{ ...s.statIcon, background: "#fdf0e8" }}><Share2 size={13} color="#e07b39" /></div>
              <div style={s.statLabel}>Articles Shared</div>
              <div style={s.statVal}>{statsData.articlesShared}</div>
              <div style={{ ...s.bar, background: "#e07b39", width: "55%" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", display: "flex", flexDirection: "column", gap: 10 },
  tabs: { display: "flex", gap: 6, marginBottom: 2 },
  tab: { display: "flex", alignItems: "center", gap: 4, background: "#f3f0eb", border: "1px solid #e0dbd3", borderRadius: 20, padding: "4px 10px", fontSize: 11.5, color: "#666", cursor: "pointer", fontFamily: "inherit" },
  activeTab: { background: "#1a1a1a", color: "#fff", border: "1px solid #1a1a1a" },
  collList: { display: "flex", flexDirection: "column", gap: 2 },
  collItem: { display: "flex", alignItems: "center", gap: 9, padding: "7px 0", cursor: "pointer", borderBottom: "1px solid #f2ede8" },
  collIcon: { width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 },
  collName: { fontSize: 12.5, fontWeight: 500, color: "#1a1a1a" },
  collCount: { fontSize: 10.5, color: "#aaa" },
  collArticles: { paddingLeft: 37, paddingBottom: 6 },
  collArticle: { fontSize: 11.5, color: "#666", padding: "2px 0", lineHeight: 1.5 },
  stats: { display: "flex", flexDirection: "column", gap: 10 },
  statsDelta: { fontSize: 12, color: "#27a157" },
  statsRow: { display: "flex", gap: 14 },
  statItem: { flex: 1 },
  statIcon: { width: 26, height: 26, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 5 },
  statLabel: { fontSize: 10.5, color: "#999", marginBottom: 2 },
  statVal: { fontSize: 17, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.4px" },
  bar: { height: 3, borderRadius: 2, marginTop: 5 },
};