const PUBLISHER_DOMAINS = {
  "BBC News":                 "bbc.co.uk",
  "Associated Press":         "apnews.com",
  "Reuters":                  "reuters.com",
  "CNN":                      "cnn.com",
  "CBS News":                 "cbsnews.com",
  "NPR":                      "npr.org",
  "Financial Times":          "ft.com",
  "ESPN":                     "espn.com",
  "Nature":                   "nature.com",
  "Time Out London":          "timeout.com",
  "City of London":           "cityoflondon.gov.uk",
  "House of Commons Library": "parliament.uk",
  "Spectrum News NY1":        "ny1.com",
  "NYC.gov":                  "nyc.gov",
  "Staffing Industry":        "staffingindustry.com",
  "Travel and Tour World":    "travelandtourworld.com",
  "The Rio Times":            "riotimesonline.com",
  "Indian Defence News":      "indiandefencenews.in",
  "Wego Travel Blog":         "wego.com",
  "MINDEF Singapore":         "mindef.gov.sg",
};

export default function PublisherBadge({ publisher }) {
  const domain = PUBLISHER_DOMAINS[publisher];
  const favicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=16` : null;

  return (
    <span style={s.badge}>
      {favicon && <img src={favicon} alt="" style={s.favicon} />}
      {publisher}
    </span>
  );
}

const s = {
  badge: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: "#1a1a1a", background: "#f0ece7", padding: "2px 7px", borderRadius: 3 },
  favicon: { width: 12, height: 12, objectFit: "contain", flexShrink: 0 },
};
