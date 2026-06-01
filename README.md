# 🎙️ Voice Diary — Speak. Transform. Remember.

> **Turn your spoken thoughts into beautifully structured journal entries instantly — no typing required.** 
> An AI-powered voice recording personal journal featuring localized transcription, intelligent text formatting, privacy safeguards, and interactive statistics.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vite.dev)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-4.x-38B2AC.svg)](https://tailwindcss.com)

---

## 🌟 Core Features

- 🎤 **AI Speech-to-Text Transcription** — Simply speak your thoughts and let the advanced whisper engines instantly structure them with precise paragraphs, capitalization, and formatting.
- 🗺️ **Full Native 10-Language Support** — Highly inclusive translations. Localized for English (US), German, French, Japanese, Russian, Polish, Belarusian, Italian, Spanish, and Ukrainian.
- 📊 **Statistics & Habits Tracker** — Build a strong journaling habit. Visualize your journaling calendar, track your active streak (current and best), and inspect custom word frequency maps.
- 🔒 **Privacy-First Safeguards** — Built with offline support, secure temporary storage, and actual, direct access to detailed GDPR-compliant Privacy Policies and Terms of Service documents.
- 📱 **Interactive Smartphone Simulator** — A highly stylized Samsung S21 Ultra simulation showcase right on the landing page, letting users scroll through and play with realistic screenshots.

---

## 📱 Web & Showcase Screens (Samsung S21 Ultra Simulator)

The built-in responsive landing page implements an elegant interactive smartphone simulator showing real-time layouts:

1. **Light Index Note List** — Clear, air-fresh light blue layout with tag list filters (`Favorites`, `↓ Newest`, `↑ Oldest`, `Title A-Z`) and search functionalities.
2. **Dark Index Note List** — The eye-safe midnight edition of the note list containing realistic dark card slots (e.g. *Team Meeting*, *Vacation Plans*, *Workout*).
3. **Note Detailed Editor** — Realistic note container showing formatted paragraphs with operational `Save` and `Cancel` button feedback.
4. **Active Recording Studio** — A beautiful voice tracker showcasing a pulsing ring, active duration counter, and mute controls.
5. **Insights & Statistics** — Custom calendar charts with daily record dots, streak counts, and word-density frequency tables.

---

## 🛠️ Technological Stack

- **Framework:** [React 18+](https://react.dev/) inside [TypeScript](https://www.typescriptlang.org/) environment.
- **Build System:** [Vite](https://vite.dev/) with high-performance HMR configurations.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom fluid layout grids and glowing radial background gradients.
- **Animations:** [Motion (Framer Motion)](https://motion.dev/) for smooth slide transitions, staggered list renders, and floating model interactions.
- **Iconography:** [Lucide React](https://lucide.dev/) for modern graphic assets.

---

## 🚀 Getting Started for Developers

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/glazer-dev/voice-diary.git
   cd voice-diary
   ```

2. **Install local dependencies:**
   ```bash
   npm install
   ```

3. **Launch local dev environment:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` inside your web browser to view the application.

4. **Build production files:**
   ```bash
   npm run build
   ```
   Compiles static files in the `/dist` directory, fully optimized for GitHub Pages, Vercel, or Netlify.

---

## 🌐 SEO-Friendly Structure & Localization

The web app is optimized with fully indexable metadata headers, responsive viewport optimizations, and multi-language alternators supporting Google Search crawlers directly via localized URL routing parameters:
- **Language triggers:** append `?lang=de-DE` or `?lang=ru-RU` to view the page instantly translated into your target language.
- **Custom Router fallback:** handles bookmarks or static routing links (e.g., `#support`) seamlessly.

---

## 📄 License & Technical Support

- **License:** Free and open for everyone under the standard MIT License.
- **Corporate Developer:** Glazer Audio / Glazer Dev
- **Google Play App ID:** `com.glazer.audio.journal.voice.diary`
- **Technical Inquiries:** Reach out directly via email at [glazer.dev@gmail.com](mailto:glazer.dev@gmail.com) for subscription adjustments, data deletion requests, or translations.
