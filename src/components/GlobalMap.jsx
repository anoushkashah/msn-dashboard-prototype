import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { mapMarkers } from "../data";
import "leaflet/dist/leaflet.css";

export default function GlobalMap() {
  return (
    <div style={s.card}>
      <div style={s.header}>
        <div style={s.title}>Global View</div>
        <div style={s.meta}>(+5) more regions this month</div>
      </div>
      <div style={s.mapWrap}>
        <MapContainer
          center={[20, 10]}
          zoom={1.5}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            attribution=""
          />
          {mapMarkers.map((m, i) => (
            <CircleMarker
              key={i}
              center={[m.lat, m.lng]}
              radius={m.articles.length * 4 + 5}
              pathOptions={{ color: "#0067b8", fillColor: "#0067b8", fillOpacity: 0.6, weight: 1.5 }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={0.95}>
                <strong>{m.label}</strong><br />{m.articles.length} articles
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

const s = {
  card: { background: "#fff", border: "1px solid #e8e4de", borderRadius: 14, padding: "13px 15px", display: "flex", flexDirection: "column", flex: 1 },
  header: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 },
  title: { fontSize: 13, fontWeight: 600, color: "#1a1a1a" },
  meta: { fontSize: 11, color: "#27a157" },
  mapWrap: { flex: 1, minHeight: 200, borderRadius: 10, overflow: "hidden" },
};