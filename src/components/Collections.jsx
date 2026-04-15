import { useState } from "react";
import { collections } from "../data";
import { BookOpen, Share2, FolderOpen, ChevronRight } from "lucide-react";

const weeklyData = [
  { week: "Mar 24", read: 18, shared: 3 },
  { week: "Mar 31", read: 22, shared: 5 },
  { week: "Apr 7",  read: 20, shared: 4 },
  { week: "Apr 14", read: 25, shared: 6 },
];

const maxRead = Math.max(...weeklyData.map(d => d.read));

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
                <div style={{ ...s.collIcon, background: c.color }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: c.color === "#e8f0fe" ? "#0067b8" : c.color === "#eaf7ef" ? "#1a7a3c" : c.color === "#fdf0e8" ? "#e07b39" : "#c0392b" }}>
                    {c.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={s.collName}>{c.name}</div>
                  <div style={s.collCount}>{c.count} articles saved</div>
                </div>
                <ChevronRight size={13} color="#ccc" style={{ transform: expanded === c.id ? "rotate(90deg)" : "none", transition: "transform .15s" }} />
              </div>
              {expanded === c.id && (
                <div style={s.collArticles}>
                  {c.articles.map((a, i) => (
                    <div key={i} style={s.collArticle}>
                      <div style={s.collDot} />
                      {a}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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
                  <div style={{ ...s.bar, height: `${(d.read / maxRead) * 100}%` }} title={`${d.read} articles`} />
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
  tab: { display: "flex", alignItems: "center", gap: 4, background: "#f3f0eb", border: "1px solid #e0dbd3", borderRadius: 20, padding: "4px 10px", fontSize: 11.5, color: "#666", cursor: "pointer", fontFamily: "inherit" },
  activeTab: { background: "#1a1a1a", color: "#fff", border: "1px solid #1a1a1a" },
  collList: { display: "flex", flexDirection: "column", gap: 2 },
  collItem: { display: "flex", alignItems: "center", gap: 9, padding: "7px 0", cursor: "pointer", borderBottom: "1px solid #f2ede8" },
  collIcon: { width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  collName: { fontSize: 12.5, fontWeight: 500, color: "#1a1a1a" },
  collCount: { fontSize: 10.5, color: "#aaa" },
  collArticles: { paddingLeft: 41, paddingBottom: 6 },
  collArticle: { fontSize: 11.5, color: "#666", padding: "4px 0", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 6 },
  collDot: { width: 4, height: 4, borderRadius: "50%", background: "#d0cbc4", flexShrink: 0, marginTop: 6 },
  stats: { display: "flex", flexDirection: "column", gap: 10 },
  delta: { fontSize: 12, color: "#27a157", fontWeight: 500 },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 },
  statBox: { background: "#f8f5f1", borderRadius: 10, padding: "9px 11px", display: "flex", flexDirection: "column", gap: 4 },
  statIcon: { width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" },
  statLabel: { fontSize: 10.5, color: "#999" },
  statVal: { fontSize: 18, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.4px" },
  chartLabel: { fontSize: 11, color: "#aaa", marginTop: 4 },
  chart: { display: "flex", gap: 8, alignItems: "flex-end", height: 90 },
  barCol: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, height: "100%" },
  barWrap: { flex: 1, width: "100%", display: "flex", alignItems: "flex-end" },
  bar: { width: "100%", background: "#0067b8", borderRadius: "4px 4px 0 0", transition: "height .3s ease", minHeight: 4 },
  barVal: { fontSize: 10, color: "#555", fontWeight: 500 },
  barWeek: { fontSize: 9, color: "#bbb", textAlign: "center" },
};