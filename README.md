# 🏗️ Tanishka Constructions

> A modern, animated construction company landing page — built with React, Vite, and Framer Motion.

---

## 📸 Preview

![Hero](https://github.com/user-attachments/assets/d12cf0e3-f78d-4aca-9f44-8a50128c26d2)
![Services](https://github.com/user-attachments/assets/f008b5a7-2b9c-48a2-8a07-eeed84a9f0b5)
![About](https://github.com/user-attachments/assets/9fcc6f88-bf2a-43b2-b7f8-ea43cfbe41a8)
![Projects](https://github.com/user-attachments/assets/73a97160-a9eb-400f-bef7-987d20aabb08)

---

## ✨ Features

- 🎬 **Smooth scroll hero** with parallax city image reveal
- 🎠 **Animated services carousel** with auto-play, pause on hover, and swipe support
- 🖼️ **Expandable project cards** with shared layout animations
- 🧩 **About section** with parallax decorative elements
- 💬 **Testimonials** section
- 📱 **Fully responsive** — mobile hamburger menu with slide-in sheet
- ⚡ **Framer Motion** animations throughout with `useInView` triggers
- 🎨 **Consistent design system** — warm beige, navy, and gold palette

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Animations | Framer Motion |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Monorepo | npm Workspaces |
| Deployment | Vercel |

---

## 📁 Project Structure

```
frontend/
├── apps/
│   └── web/                        # Main application (Vite + React)
│       ├── src/
│       │   ├── assets/             # Static images (city.jpg, about.jpg)
│       │   ├── components/         # App-level components
│       │   ├── App.tsx             # Root component — layout & scroll logic
│       │   └── main.tsx            # Entry point
│       ├── index.html
│       ├── vite.config.ts
│       ├── tsconfig.app.json
│       └── package.json
│
├── packages/
│   └── ui/                         # Shared component library
│       └── src/
│           ├── components/
│           │   ├── simple-header.tsx         # Sticky nav with mobile sheet
│           │   ├── smooth-scroll-hero.tsx    # Parallax scroll hero
│           │   ├── elegant-carousel.tsx      # Services carousel
│           │   ├── about-us-section.tsx      # About + service grid
│           │   ├── projects-section.tsx      # Portfolio grid
│           │   ├── expandable-card.tsx       # Animated expandable card
│           │   ├── testimonials-section.tsx  # Client testimonials
│           │   ├── footer.tsx                # Footer with contact info
│           │   └── carousel.css             # Carousel styles
│           ├── styles/
│           │   └── globals.css
│           └── global.d.ts                  # CSS module declarations
│
├── vercel.json                      # Vercel deployment config
├── package.json                     # Root workspace config
├── turbo.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Kshitijkumavat/Structura.git

# Navigate into the project
cd Structura/frontend

# Install all workspace dependencies
npm install
```

### Development

```bash
npm run dev --workspace=apps/web
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build --workspace=apps/web
```

Output is generated in `apps/web/dist/`.

---

## 🌐 Deployment

This project is deployed on **Vercel** using a monorepo configuration.

### `vercel.json`

```json
{
  "buildCommand": "npm run build --workspace=apps/web",
  "outputDirectory": "apps/web/dist",
  "installCommand": "npm install"
}
```

### Vercel Project Settings

| Setting | Value |
|---|---|
| Root Directory | `frontend` |
| Build Command | `npm run build --workspace=apps/web` |
| Output Directory | `apps/web/dist` |
| Install Command | `npm install` |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Background | `#EEEEE6` | Footer, light sections |
| Dark | `#131010` | Hero, dark backgrounds |
| Navy | `#2D3142` | Nav bar, bottom bar |
| Gold | `#B8860B` / `#F0BB78` | Accents, icons, labels |
| Warm Beige | `#FFF0DC` | Projects section |
| Stone | `from-stone-600 to-stone-800` | Hover gradients |

---

## 📄 Pages & Sections

| # | Section | Component | Description |
|---|---|---|---|
| 1 | Hero | `SmoothScrollHero` | Parallax image reveal on scroll |
| 2 | Services | `ServicesCarousel` | 6-slide auto-play carousel |
| 3 | About | `AboutUsSection` | Story + 6 service items + image |
| 4 | Projects | `ProjectsSection` | 6 expandable project cards |
| 5 | Testimonials | `Testimonials` | Client reviews |
| 6 | Footer | `Footer` | Contact, links, socials |

---

## 📬 Contact

**Tanishka Constructions**
Pune, Maharashtra, India

| Channel | Details |
|---|---|
| 📧 Email | tanishkaconstructions@gmail.com |
| 📞 Phone | +91 98504 42410 |
| 📍 Location | Pune, Maharashtra |

---

## 📝 License

This project is for private/commercial use by Tanishka Constructions.
All rights reserved © 2025 Tanishka Constructions.