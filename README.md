# Nexio — Transforming Businesses Through Technology

[![Firebase Hosting](https://img.shields.io/badge/Hosted%20on-Firebase-FFCA28?logo=firebase&logoColor=white)](https://nexiogbl.web.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

Official website for **Nexio Global** — a technology company delivering enterprise-grade digital solutions, AI automation, cloud infrastructure, and cybersecurity services.

**Live Site:** [https://nexiogbl.web.app](https://nexiogbl.web.app)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Responsive, modern landing page with smooth animations (Framer Motion)
- Dark/Light theme support
- Service pages for each business vertical:
  - Digital Solutions
  - AI & Automation
  - Cloud Solutions
  - Cybersecurity
  - Technology Consulting
- SEO-optimized meta tags and Open Graph support
- Firebase Analytics integration
- Client-side routing with SPA support
- Accessible UI components built on Radix UI primitives
- Contact form with validation (React Hook Form + Zod)
- Testimonials carousel
- Technology marquee showcase

---

## Tech Stack

| Category       | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | React 19                                      |
| Language       | TypeScript 5.9                                |
| Build Tool     | Vite 7                                        |
| Styling        | Tailwind CSS 4                                |
| UI Components  | Radix UI + Custom components (shadcn/ui)      |
| Animations     | Framer Motion                                 |
| Routing        | Wouter                                        |
| Forms          | React Hook Form + Zod                         |
| State/Data     | TanStack React Query                          |
| Charts         | Recharts                                      |
| Icons          | Lucide React + React Icons                    |
| Hosting        | Firebase Hosting                              |
| Analytics      | Firebase Analytics                            |

---

## Project Structure

```
nexio/
├── public/                  # Static assets (favicon, logos, robots.txt)
├── src/
│   ├── assets/              # Images and media
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (Button, Card, Dialog, etc.)
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── ServicesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── WhyNexio.tsx
│   │   ├── ProcessSection.tsx
│   │   └── MarqueeTech.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   ├── utils.ts         # Utility functions (cn helper)
│   │   └── firebase.ts      # Firebase configuration & initialization
│   ├── pages/
│   │   ├── Home.tsx         # Homepage
│   │   ├── not-found.tsx    # 404 page
│   │   └── services/        # Individual service pages
│   │       ├── AIAutomation.tsx
│   │       ├── CloudSolutions.tsx
│   │       ├── Cybersecurity.tsx
│   │       ├── DigitalSolutions.tsx
│   │       └── TechnologyConsulting.tsx
│   ├── App.tsx              # Root app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── firebase.json            # Firebase Hosting configuration
├── .firebaserc              # Firebase project settings
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/NexioHQ/nexiowebsite.git
cd nexiowebsite

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement enabled.

---

## Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start development server with HMR        |
| `npm run build`    | Build optimized production bundle        |
| `npm run preview`  | Preview production build locally         |
| `npm run typecheck`| Run TypeScript type checking             |

---

## Deployment

This project is deployed to **Firebase Hosting** and accessible at [nexiogbl.web.app](https://nexiogbl.web.app).

### Deploy to Firebase

```bash
# Build the production bundle
npm run build

# Deploy to Firebase Hosting
npx firebase-tools deploy --only hosting
```

### Firebase Configuration

- **Project ID:** `nexiogbl`
- **Hosting URL:** `https://nexiogbl.web.app`
- **Build output directory:** `dist/`
- **SPA rewrites:** All routes redirect to `index.html`

---

## Environment Variables

No environment variables are required for local development. Firebase configuration is embedded in `src/lib/firebase.ts`.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is proprietary software owned by Nexio Global. All rights reserved.

---

Built with passion by the **Nexio** team.
