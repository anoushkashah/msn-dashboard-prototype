import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { mapMarkers } from "../data";
import { X, ExternalLink } from "lucide-react";
import "leaflet/dist/leaflet.css";
import PublisherBadge from "./PublisherBadge";

export default function GlobalMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={s.card}>
      <div style={s.header}>
        <div style={s.title}>Global View</div>
        <div style={s.meta}>(+5) more regions this month</div>
      </div>
      <div style={s.mapWrap}>
        <MapContainer
          center={[20, 10]}
          zoom={2}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"/>
          {mapMarkers.map((m, i) => (
            <>
              <CircleMarker
                key={`outer-${i}`}
                center={[m.lat, m.lng]}
                radius={m.articles.length * 4 + 12}
                pathOptions={{ color: "#cc2200", fillColor: "#cc2200", fillOpacity: 0.08, weight: 0.5 }}
              />
              <CircleMarker
                key={`inner-${i}`}
                center={[m.lat, m.lng]}
                radius={m.articles.length * 4 + 5}
                pathOptions={{ color: "#cc2200", fillColor: "#cc2200", fillOpacity: 0.35, weight: 1.5 }}
                eventHandlers={{ click: () => setSelected(m) }}
              >
                <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>
                  <strong>{m.label}</strong> · {m.articles.length} articles
                </Tooltip>
              </CircleMarker>
            </>
          ))}
        </MapContainer>

        {selected && (
          <div style={s.backdrop} onClick={() => setSelected(null)}>
            <div style={s.lightbox} onClick={e => e.stopPropagation()}>
              <div style={s.panelHeader}>
                <div style={s.panelTitle}>{selected.label}</div>
                <div style={s.panelCount}>{selected.articles.length} articles</div>
                <button style={s.closeBtn} onClick={() => setSelected(null)}>
                  <X size={13} />
                </button>
              </div>
              <div style={s.articleList}>
                {selected.articles.map((a, i) => (
                  <a key={i} href={a.url} target="_blank" rel="noreferrer" style={s.articleItem}>
                    <div style={s.articleTitle}>{a.title}</div>
                    <div style={s.articleBottom}>
                      <PublisherBadge publisher={a.publisher} />
                      <ExternalLink size={10} color="#0067b8" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", display: "flex", flexDirection: "column", flex: 1 },
  header: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 },
  title: { fontSize: 14, fontWeight: 600, color: "#1a1a1a" },
  meta: { fontSize: 12, color: "#1a7a40" },
  mapWrap: { flex: 1, minHeight: 200, borderRadius: 10, overflow: "hidden", position: "relative" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10 },
  lightbox: { background: "#fff", borderRadius: 12, border: "1px solid #e8e4de", overflow: "hidden", width: "80%", maxWidth: 340, maxHeight: "75%", display: "flex", flexDirection: "column", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" },
  panelHeader: { display: "flex", alignItems: "center", gap: 6, padding: "10px 12px", borderBottom: "1px solid #f2ede8", flexShrink: 0 },
  panelTitle: { fontSize: 14, fontWeight: 600, color: "#1a1a1a", flex: 1 },
  panelCount: { fontSize: 12, color: "#0067b8" },
  closeBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#aaa", padding: 0 },
  articleList: { display: "flex", flexDirection: "column", overflowY: "auto" },
  articleItem: { display: "flex", flexDirection: "column", gap: 5, padding: "9px 12px", borderBottom: "1px solid #f2ede8", textDecoration: "none", cursor: "pointer", background: "#fff" },
  articleTitle: { fontSize: 13, color: "#333", lineHeight: 1.4 },
  articleBottom: { display: "flex", alignItems: "center", justifyContent: "space-between" },
};
