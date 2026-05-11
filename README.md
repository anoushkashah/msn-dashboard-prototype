# MSN News Dashboard — Microsoft Copilot UI Prototype

A high-fidelity UI prototype redesigning the MSN News integration within Microsoft Copilot, built as contract work for a Microsoft AI pitch. The goal was to modernize the news experience to drive engagement with a younger demographic through personalization, political transparency, and seamless AI-assisted news discovery.

---

## Background

MSN News reaches millions of users through Microsoft Copilot, but the existing interface lacks the personalization and transparency that younger audiences expect from a modern news product. This prototype reimagines the dashboard as an interactive, data-rich experience — giving users visibility into what they read, where news is breaking, and how their feed leans politically, all within the familiar Copilot aesthetic.

---

## Product Goals

- **Increase engagement** among 18–34 demographic through personalized, discovery-driven UX
- **Build trust** by surfacing political bias and source diversity transparently
- **Drive habitual use** through reading stats, saved collections, and mood-based discovery
- **Extend Copilot** as a natural interface for querying and exploring news

---

## Features

### Personalized Top Topics
Three topic cards tailored to the user's reading history. Each card surfaces a live article preview with image, publisher badge, and headline — replacing static metrics with content that invites action.

### Top Headlines Today
Real, timestamped articles from today's news cycle. Each headline links directly to the source article and displays the publisher name alongside a favicon via the shared `PublisherBadge` component for instant recognition.

### Welcome Card
A hero card that greets the user by name and links to the article they left off reading, overlaid on a contextual background image. Acts as a personalized entry point back into the news feed.

### Global News Map
An interactive Leaflet world map with dual-ring story bubbles sized by article count per region. Clicking a bubble opens a modal panel listing real articles from that location — each with a publisher badge and external link — turning geography into a navigation tool.

### Source Political Diversity
A left-to-right gradient arc visualizing the political lean of the user's sources, with a glowing dot indicating current skew and a bar breakdown of left, center, and right source counts. Designed to give readers transparency rather than leaving algorithmic bias invisible.

### Collections
A saved articles system with folders organized by topic. Users can see article counts and creation dates, browse deeper via a "+ 5 more collections" link, or start a new folder with "+ Add new collection". A tab switch reveals the Your Stats view.

### Your Stats
A reading metrics panel showing articles read this week, articles shared this week, all-time totals, and a bar chart tracking weekly reading volume across the past month — designed to reward habitual engagement.

### Mood-Based Discovery
Two compact cards — Cheer Me Up and Feeling Lucky — for serendipitous, non-algorithmic news discovery. Each click opens a randomly selected article from a curated pool.

### MSN News Chat Bar
A full-width chat interface in the footer, allowing users to query the news naturally. Includes attachment, voice input, and a model selector ("Smart") — bridging passive reading with active AI-assisted exploration.

### Sidebar Navigation
A persistent left sidebar with primary nav (Dashboard, My Feed, Discover, Saved, Alerts), topic shortcuts (Finance, Sports, Politics, Collections), a recent searches list, and a sign-in prompt in the footer.

---

## Design Philosophy

The visual language mirrors Microsoft Copilot's warm off-white palette, rounded card system, and clean sans-serif typography. Every design decision prioritizes clarity and trust — publisher branding is explicit, political lean is visible, and reading behavior is surfaced rather than hidden. The experience is built to feel native to the Copilot ecosystem while pushing the product forward for a new generation of news consumers.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Mapping | Leaflet / React-Leaflet |
| Icons | Lucide React |
| Styling | Inline React styles |
| Deployment | Vercel |

---

## Live Demo

[https://msn-news-dashboard.vercel.app](https://msn-news-dashboard.vercel.app)

---

## Repository

[https://github.com/anoushkashah/msn-dashboard-prototype](https://github.com/anoushkashah/msn-dashboard-prototype)

---

## Getting Started

```bash
git clone https://github.com/anoushkashah/msn-dashboard-prototype.git
cd msn-dashboard-prototype
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure
- `src/`
  - `main.jsx` — Entry point
  - `App.jsx` — Root layout and grid
  - `data.js` — Mock data (articles, collections, map markers, bias data)
  - `index.css` — Global reset
  - `components/`
    - `Sidebar.jsx` — Navigation sidebar with primary nav, topics, recents, and sign-in footer
    - `TopBar.jsx` — Search bar, settings, and notifications
    - `TopTopics.jsx` — Personalized topic cards with article previews
    - `WelcomeCard.jsx` — User welcome hero card linking to last-read article
    - `Headlines.jsx` — Top headlines with publisher badges and timestamps
    - `MoodCards.jsx` — Cheer Me Up / Feeling Lucky discovery cards
    - `Collections.jsx` — Saved collections and Your Stats tab
    - `SourceBias.jsx` — Source political diversity arc visualization
    - `GlobalMap.jsx` — Interactive world news map with article panel
    - `ChatBar.jsx` — MSN News chat footer
    - `PublisherBadge.jsx` — Shared favicon + publisher name badge used across cards

---

## Deployment

Deployed on Vercel with automatic redeployment on every push to `main`.

```bash
git add .
git commit -m "your update"
git push
```
