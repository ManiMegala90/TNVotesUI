# TN Votes — Tamil Nadu Elections 2026

A modular React + Tailwind portal for the TN Votes experience, built with Vite and React Router.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Current Project Structure

```text
TNVotesUI/
├── docs/
│   └── image-generation-prompts.md
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx
│   ├── CandidateDirectory.jsx
│   ├── ComingSoon.jsx
│   ├── Constituencies.jsx
│   ├── ConstituencyDetail.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   ├── Results.jsx
│   ├── Routes.jsx
│   ├── assets/
│   │   └── images/
│   │       └── constituency/
│   ├── components/
│   │   ├── Avatar.jsx
│   │   ├── Badge.jsx
│   │   ├── CandidateCard.jsx
│   │   ├── CandidateDeck.jsx
│   │   ├── CandidateFilterBar.jsx
│   │   ├── CandidateSearchBar.jsx
│   │   ├── ConstituencyFilterBar.jsx
│   │   ├── ConstituencyCard.jsx
│   │   ├── DemographicsPanel.jsx
│   │   ├── DirectoryCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HistoricalTimeline.jsx
│   │   ├── IncumbentCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SpotlightCard.jsx
│   │   ├── SpotlightStrip.jsx
│   │   └── States.jsx
│   ├── constants/
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── constituencies.js
│   │   ├── constituenciesDirectory.js
│   │   └── constituencyDetails.js
│   ├── hooks/
│   │   ├── useCandidate.js
│   │   ├── useConstituencies.js
│   │   └── useDirectory.js
│   ├── index.css
│   ├── infrastructure/
│   │   ├── api/
│   │   │   ├── apiClient.jsx
│   │   │   └── index.js
│   │   ├── providers/
│   │   │   ├── index.jsx
│   │   │   ├── mock/
│   │   │   │   ├── candidateProvider.jsx
│   │   │   │   ├── constituencyProvider.jsx
│   │   │   │   ├── directoryProvider.jsx
│   │   │   │   ├── resultsProvider.jsx
│   │   │   │   └── searchProvider.jsx
│   │   │   └── rest/
│   │   └── repositories/
│   ├── layout/
│   ├── main.jsx
│   ├── pages/
│   └── services/
├── tailwind.config.js
└── vite.config.js
```

## Key Areas

- UI entry point: `src/main.jsx`
- App shell and routing: `src/App.jsx`, `src/Routes.jsx`, `src/Layout.jsx`
- Main feature screens: `src/Constituencies.jsx`, `src/ConstituencyDetail.jsx`, `src/Home.jsx`, `src/CandidateDirectory.jsx`, `src/Results.jsx`
- Shared UI pieces: `src/components/` and `src/layout/`
- Data and hooks: `src/data/`, `src/hooks/`, `src/context/`
- Infrastructure and providers: `src/infrastructure/`

## Data Updates

Add or edit constituency data in `src/data/constituencies.js` or the related files in `src/data/`.

## Commands

```bash
npm run dev      # Start the Vite dev server at http://localhost:3000
npm run build    # Production build output to dist/
npm run preview  # Preview the production build locally
```
