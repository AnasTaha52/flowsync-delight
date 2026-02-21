# FlowSync — Team Collaboration SaaS Website

![FlowSync](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-EF008F?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, fully responsive multi-page SaaS marketing website for **FlowSync** — a fictional project management and team collaboration platform. Built as a Figma-to-React conversion showcase.

---

## 🔗 Live Demo

👉 **[flowsync.vercel.app](https://flowsync-saas-mauve.vercel.app/)** *(Deployed on Vercel)*

---

## 📸 Preview

<img width="1909" height="940" alt="Screenshot 2026-02-21 142445" src="https://github.com/user-attachments/assets/d4202590-c047-4e65-b16a-b05f296d87eb" />

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [License](#license)

---

## 🧩 About the Project

FlowSync is a **Figma-to-React** conversion project built to demonstrate professional frontend development skills. The website replicates the kind of polished, production-grade SaaS marketing site a client would provide as a Figma design file and request to be built in React.

This project was built as a portfolio piece to showcase:
- Pixel-perfect implementation from design to code
- Responsive, mobile-first development
- Dark/light theming with CSS variables
- Smooth animations and micro-interactions
- Clean, scalable React component architecture

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, features, testimonials, pricing teaser, CTA |
| `/features` | Features — Tabbed features, integration grid, comparison table |
| `/pricing` | Pricing — 3 tiers, monthly/annual toggle, FAQ accordion |
| `/about` | About — Story, team, timeline, values, careers CTA |
| `/blog` | Blog — Featured post, filterable grid, newsletter CTA |
| `/contact` | Contact — Split layout form, office info, WhatsApp button |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **React Router DOM** | Multi-page client-side routing |
| **Tailwind CSS** | Layout and spacing utilities |
| **CSS Variables** | Theming (dark/light mode) |
| **Framer Motion** | Page transitions and scroll animations |
| **Lucide React** | Icon system |
| **Vite** | Build tool and dev server |
| **Google Fonts** | Plus Jakarta Sans, Inter, JetBrains Mono |

---

## ✨ Features

- 🌗 **Dark / Light Mode** — Global theme context with `localStorage` persistence. Toggles instantly across all pages with smooth CSS transitions.
- 📱 **Fully Responsive** — Mobile-first layout tested across 375px, 768px, 1024px, and 1440px breakpoints.
- 🔝 **Scroll to Top on Route Change** — Every page navigation starts from the top via a `ScrollToTop` component.
- 🎞 **Framer Motion Animations** — Entrance animations on all sections, staggered grid reveals, hover interactions, and page transitions with `AnimatePresence`.
- 🎨 **CSS-Only Charts & Illustrations** — All data visualizations (bar charts, progress bars, donut rings) and product UI mockups are built purely with CSS divs — no charting libraries, no external images.
- 💬 **Interactive FAQ** — Accordion with smooth `AnimatePresence` height transitions.
- 💰 **Dynamic Pricing Toggle** — Monthly/Annual switch updates all prices with React state.
- 🔍 **Blog Category Filter** — Client-side filter with smooth transition between post sets.
- 📞 **Floating WhatsApp Button** — Fixed with CSS pulse animation.
- ⬆ **Back to Top Button** — Appears after 400px scroll.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flowsync.git

# Navigate into the project
cd flowsync

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
flowsync/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--bg-primary` | `#06080F` | `#FFFFFF` |
| `--bg-surface` | `#0D1117` | `#F8FAFC` |
| `--bg-card` | `#161B22` | `#FFFFFF` |
| `--text-primary` | `#F0F6FC` | `#0F172A` |
| `--text-muted` | `#8B949E` | `#64748B` |
| `--accent` | `#7C3AED` | `#7C3AED` |
| `--accent-light` | `#A78BFA` | `#8B5CF6` |
| `--accent-2` | `#06B6D4` | `#0891B2` |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Plus Jakarta Sans | 700, 800 |
| Body | Inter | 400, 500, 600 |
| Monospace | JetBrains Mono | 400, 500 |

---

## 🤝 Contributing

This is a portfolio/showcase project. Feel free to fork it and use it as a starting point for your own work.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

Built by **[Anas Taha](https://github.com/AnasTaha52)** — Frontend Developer specializing in Figma-to-React conversions.


---

*This project was built as a demonstration of Figma-to-React frontend development skills.*
