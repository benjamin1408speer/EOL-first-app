# EOL First App

Eine interaktive Angular-Webanwendung zur Erkundung der Weltmeere und ihrer Ökosysteme.

## 📋 Über das Projekt

Diese Anwendung bietet eine umfassende Plattform zur Erkundung von Ozeanen und Meeren. Benutzer können Informationen über verschiedene Gewässer, deren Tierarten, Tiefen und klimatische Bedingungen entdecken.

### Funktionen

- **Ozeane erkunden**: Pazifik, Atlantik, Indischer Ozean, Arktischer Ozean, Antarktischer Ozean
- **Meere entdecken**: Mittelmeer, Ostsee, Schwarzes Meer, Rotes Meer, Nordsee
- **Detaillierte Informationen**:
  - Tierarten und marine Biodiversität
  - Tiefenprofile
  - Klimatische Bedingungen
- **Interaktive Navigation** mit dynamischen Routen
- **Server-Side Rendering (SSR)** für optimale Performance

## 🚀 Technologie-Stack

- **Framework**: Angular 20.3.0
- **Sprache**: TypeScript 5.9.2
- **Server**: Express.js mit Angular SSR
- **Testing**: Jasmine & Karma
- **Build-Tool**: Angular CLI 20.3.10

## 📦 Installation

### Voraussetzungen

- Node.js (empfohlen: LTS-Version)
- npm (wird mit Node.js installiert)

### Setup

1. Repository klonen oder Projekt herunterladen
2. Abhängigkeiten installieren:

```bash
npm install
```

## 🛠️ Entwicklung

### Development Server starten

```bash
npm start
```

oder

```bash
ng serve
```

Die Anwendung ist dann unter `http://localhost:4200/` erreichbar. Die App lädt automatisch neu, wenn Änderungen an den Quelldateien vorgenommen werden.

### Build erstellen

Für einen Production Build:

```bash
npm run build
```

Die Build-Artefakte werden im `dist/` Verzeichnis gespeichert.

Für einen Development Build mit Watch-Modus:

```bash
npm run watch
```

### Server-Side Rendering

SSR-Server starten:

```bash
npm run serve:ssr:EOL-first-app
```

## 🧪 Testing

### Unit Tests ausführen

```bash
npm test
```

oder

```bash
ng test
```

Tests werden mit Jasmine und Karma ausgeführt.

## 📁 Projektstruktur

```
EOL-first-app/
├── src/
│   ├── app/
│   │   ├── home/              # Home-Komponente
│   │   ├── pages/             # Seiten-Komponenten
│   │   │   ├── oceans/        # Ozeane-Übersicht
│   │   │   ├── seas/          # Meere-Übersicht
│   │   │   ├── quiz/          # Quiz-Funktionalität
│   │   │   └── quiz-resolve/  # Quiz-Resolver
│   │   ├── text-bild/         # Text-Bild-Komponente
│   │   ├── tierarten/         # Tierarten-Komponente
│   │   ├── water/             # Wasser-Komponente
│   │   ├── models/            # Datenmodelle
│   │   ├── data-service.ts    # Zentraler Datenservice
│   │   ├── app.routes.ts      # Routing-Konfiguration
│   │   └── app.ts             # Haupt-App-Komponente
│   ├── assets/                # Statische Assets
│   ├── styles.css             # Globale Styles
│   └── index.html             # HTML-Template
├── public/                    # Öffentliche Dateien
└── angular.json               # Angular-Konfiguration
```

## 🎯 Verfügbare Routen

### Hauptnavigation
- `/home` - Startseite
- `/oceans` - Ozeane-Übersicht
- `/seas` - Meere-Übersicht

### Ozeane
Für jeden Ozean (pacific, atlantic, indic, arctic, antarctic):
- `/oceans/{ozean}` - Ozean-Details
- `/oceans/{ozean}/tierarten` - Tierarten-Übersicht
- `/oceans/{ozean}/tierarten/{tier}` - Spezifische Tierart
- `/oceans/{ozean}/tiefen` - Tiefeninformationen
- `/oceans/{ozean}/klima` - Klimainformationen

### Meere
Für jedes Meer (mittelmeer, baltic, blacksea, redsea, nordsee):
- `/seas/{meer}` - Meer-Details
- `/seas/{meer}/tierarten` - Tierarten-Übersicht
- `/seas/{meer}/tierarten/{tier}` - Spezifische Tierart
- `/seas/{meer}/tiefen` - Tiefeninformationen
- `/seas/{meer}/klima` - Klimainformationen

## 🔧 Code Scaffolding

Neue Komponente generieren:

```bash
ng generate component component-name
```

Weitere verfügbare Schematics anzeigen:

```bash
ng generate --help
```

## 📝 Code-Formatierung

Das Projekt verwendet Prettier mit folgender Konfiguration:
- Print Width: 100 Zeichen
- Single Quotes: aktiviert
- Angular Parser für HTML-Dateien

## 🌐 Browser-Unterstützung

Die Anwendung unterstützt moderne Browser. Spezifische Browser-Konfigurationen können in der `.browserslistrc` Datei angepasst werden.

## 📚 Weitere Ressourcen

- [Angular Dokumentation](https://angular.dev)
- [Angular CLI Referenz](https://angular.dev/tools/cli)
- [TypeScript Dokumentation](https://www.typescriptlang.org/)

## 📄 Lizenz

Dieses Projekt ist privat (siehe `package.json`).

---

**Version**: 0.0.0  
**Erstellt mit**: Angular CLI 20.3.10
