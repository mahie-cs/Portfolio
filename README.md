# Developer Portfolio

Personal developer portfolio website of MD. Montasir Rahman Mahie. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This repository contains the source code for my portfolio website. It features a modern shell layout, smooth motion animations, live GitHub statistics integration, showcase pages for key software projects, and interactive contact functionality.

## Featured Projects

- **Momentum**: A clean, minimalist event tracker created for the Computer Science and Engineering department to manage schedules, deadlines, and events.
- **Library**: An online digital library platform for searching and browsing engineering and science textbooks in PDF format.
- **Lingua Aid**: An emergency translation and reference app providing emergency contact numbers and essential phrases with audio pronunciation guides.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons and UI**: Lucide React, Radix UI primitives
- **Data Integration**: GitHub REST API for live statistics

## Project Structure

```
app/
  page.tsx            Landing page
  (shell)/            Section pages (about, projects, skills, career, stats, contact)
  actions/            Server actions (GitHub stats API integration)
components/
  motion/             Motion primitives and smooth animation wrappers
  sections/           Page layout sections (hero, featured work, skills)
  ui/                 Reusable UI components
config/               Site configuration and documentation metadata
constants/            Project details, skills, education, and career data
```

## Getting Started

Clone the repository and install the dependencies to run the project locally:

```bash
git clone https://github.com/mahie-cs/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to view the application.

## License

This project is open source and available under the MIT License.
