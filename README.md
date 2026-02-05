# Clima-tact 🌦️
---
Link: https://clima-tact.netlify.app/
A modern weather dashboard built with **React + Vite + TypeScript**, powered by the **OpenWeather API**. Includes **current weather**, **hourly chart**, **5-day forecast**, **city search**, **favorites**, **recent searches**, and **light/dark theme**.

---

## Features

### Weather

* Current weather for your location
* Hourly temperature (chart)
* 5-day forecast (daily summary)
* Weather details (sunrise/sunset, wind, humidity, etc.)
* Reverse geocoding (show city name from coordinates)

### Search

* City search via OpenWeather Geocoding API
* Command palette style search dialog
* Sections:

  * Suggestions
  * Recent searches
  * Favorites

### Favorites

* Add/remove favorite cities
* Persists via `localStorage`
* Quick access cards with current temp + conditions

### Search History

* Stores recent searches (with timestamp)
* Clear history option
* Persists via `localStorage`

### Theme

* Light/Dark toggle
* Persists via `localStorage`
* `ThemeProvider` toggles `dark`/`light` class on the `<html>` element

---

## Tech Stack

* React + Vite + TypeScript
* Tailwind CSS
* shadcn/ui
* TanStack React Query
* OpenWeather APIs

  * Current weather: `/data/2.5/weather`
  * Forecast: `/data/2.5/forecast`
  * Geocoding: `/geo/1.0/direct`, `/geo/1.0/reverse`
* Recharts
* Lucide Icons
* Sonner (toasts)

---

## Project Structure

```bash
clima-tact/
├─ public/
│  ├─ Dark.png
│  ├─ Light.png
│  └─ ...
├─ src/
│  ├─ api/
│  │  ├─ config.ts
│  │  ├─ types.ts
│  │  └─ weather.ts
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ alert.tsx
│  │  │  ├─ button.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ command.tsx
│  │  │  ├─ dialog.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ skeleton.tsx
│  │  │  ├─ sonner.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ city-search.tsx
│  │  │  ├─ current-weather.tsx
│  │  │  ├─ hourly-temperature.tsx
│  │  │  ├─ weather-details.tsx
│  │  │  ├─ weather-forecast.tsx
│  │  │  ├─ favorite-button.tsx
│  │  │  └─ favorite-cities.tsx
│  │  └─ header.tsx
│  ├─ context/
│  │  └─ theme-provider.tsx
│  ├─ hooks/
│  │  ├─ use-weather.ts
│  │  ├─ use-geolocation.ts
│  │  ├─ use-local-storage.ts
│  │  ├─ use-search-history.ts
│  │  └─ use-favorite.ts
│  ├─ pages/
│  │  ├─ weather-dashboard.tsx
│  │  └─ city-page.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ components.json
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## Environment Variables

Create a `.env` file in the project root (same level as `package.json`):

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

Notes:

* The variable must start with `VITE_` (Vite requirement).
* Restart the dev server after editing `.env`.

---

## Getting Started

### 1) Clone

```bash
git clone https://github.com/<your-username>/clima-tact.git
cd clima-tact
```

### 2) Install dependencies

```bash
npm install
```

### 3) Add API key

Create `.env`:

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

### 4) Run

```bash
npm run dev
```

Open:

```bash
http://localhost:5173/
```

---

## Build for Production

```bash
npm run build
npm run preview
```

---

## How It Works (High Level)

### Weather data flow

* `useGeolocation()` gets coordinates
* `useWeatherQuery()` → current weather
* `useForecastQuery()` → forecast data
* `useReverseGeocodeQuery()` → city name

### Search flow

* CitySearch opens command dialog
* `useLocationSearch(query)` calls `/direct`
* Selecting a city navigates to:
  `/city/:name?lat=...&lon=...`
*
