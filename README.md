# uberli-site

Marketing- und Beratungswebsite für uberli, umgesetzt mit React, TypeScript, Material UI und Vite.

## Stack

- React 19
- TypeScript
- Vite
- Material UI
- React Router
- ESLint + Prettier
- Vitest + Testing Library

## Lokale Entwicklung

Voraussetzungen:

- Node.js 22.14 oder neuer
- npm

Installation:

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Die Anwendung läuft danach standardmässig unter der von Vite ausgegebenen lokalen URL.

## Verfügbare Skripte

```bash
npm run dev
```

Startet den lokalen Entwicklungsserver.

```bash
npm run build
```

Führt TypeScript-Checks aus und erzeugt den Produktions-Build.

```bash
npm run preview
```

Startet eine lokale Vorschau des Produktions-Builds.

```bash
npm run lint
```

Prüft den Quellcode mit ESLint.

```bash
npm run lint:fix
```

Wendet automatische ESLint-Korrekturen an, soweit möglich.

```bash
npm run format
```

Formatiert den Quellcode mit Prettier.

```bash
npm run test
```

Führt die Unit-Tests mit Vitest aus.

## Seitenstruktur

Die Website nutzt echte Routen statt einer einzelnen Scroll-Seite:

- /
- /about
- /projects
- /tools
- /contact

Die Seiten werden lazy geladen, damit der Initial-Load kleiner bleibt.

## Design-System

- Zentrales Theme in [src/theme.ts](src/theme.ts)
- Light- und Dark-Mode werden unterstützt
- Die Farblogik liegt im Theme, nicht mehr verteilt in den Komponenten

## Tests

Das Projekt verwendet Vitest mit jsdom und Testing Library.

Die Basiskonfiguration liegt in:

- [vite.config.ts](vite.config.ts)
- [src/setupTests.ts](src/setupTests.ts)

Ein erster Komponententest ist vorhanden in:

- [src/pages/Home.test.tsx](src/pages/Home.test.tsx)

## Build-Hinweise

Der Build ist auf Code-Splitting optimiert. Grössere Bibliotheken wie React und Material UI werden in eigene Chunks ausgelagert, um Caching und Ladezeit zu verbessern.
