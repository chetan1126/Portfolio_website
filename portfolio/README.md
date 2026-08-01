# Portfolio Website

## Overview

This is a personal portfolio website built with Astro, React, and Tailwind CSS. The site showcases the professional profile of Chetan Kotrange, including experience, projects, skills, awards, education, and contact information.

The portfolio is implemented as a modern static site with interactive React components, animated sections, theme switching, and a data-driven content model.

## Features

- Responsive landing page with hero section and animated background effects
- Light / dark theme toggle with preference persistence
- Mobile-friendly header and navigation menu
- Resume modal and quick contact buttons for email, phone, LinkedIn, and GitHub
- Project showcase with repository links, documentation/video links, and technology stack badges
- Experience, skills, awards, and education sections
- SEO-friendly layout with Open Graph metadata and canonical URL generation
- Vercel Analytics and Speed Insights integration
- Data stored in a single `src/lib/data.ts` file for easy editing and re-use

## Tech Stack

- Astro 7.x
- React 19.x
- Tailwind CSS 4.x via `@tailwindcss/vite`
- TypeScript 6.x
- Vercel Analytics and Speed Insights
- Bun package manager metadata (`packageManager: bun@1.3.14`)

## Project Structure

- `package.json` - project metadata, scripts, dependencies, and Node engine constraints
- `astro.config.ts` - Astro configuration, integrations, and Tailwind plugin setup
- `src/pages/index.astro` - main homepage layout
- `src/layouts/Layout.astro` - global page shell, metadata, fonts, and theme script
- `src/lib/data.ts` - central project and profile data source
- `src/components/` - UI components for each section and site functionality
- `src/styles/global.css` - global CSS and Tailwind base styles
- `public/` - static assets like images, PDF resume, and icons

## Important Files

- `src/lib/data.ts`
  - Contains `personalInfo`, `workExperience`, `education`, `skills`, `selectedWork`, and `awards`
  - Used throughout the site to populate content without hardcoding values inside components

- `src/components/GlassHeader.tsx`
  - Sticky site header with navigation links, resume button, and theme toggle
  - Includes mobile menu support

- `src/components/HeroSection.tsx`
  - Hero banner with profile introduction, contact buttons, and animated portrait reveal
  - Uses `HeroCanvas` and `CircuitBackground` for layered visual effects

- `src/components/ProjectsSection.tsx`
  - Displays featured projects with images, links, summaries, and stack badges
  - Supports optional documentation, video, and repository links

- `src/layouts/Layout.astro`
  - Sets page metadata, global HTML structure, and theme initialization
  - Includes analytics and resume modal components

- `src/pages/robots.txt.ts`
  - Dynamically generates a robots.txt route based on the site origin

## Data & Content

The website content is driven by structured data in `src/lib/data.ts`.

Data sections include:

- Personal profile (name, role, location, contact links, resume path, profile image)
- Work experience and achievements
- Education history and accomplishments
- Skills grouped by category
- Featured projects, including OTA firmware, robotics competition work, IoT/ML inventory systems, and more
- Awards and honors

This approach makes it easy to update the website content without changing component logic.

## Development

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Code quality commands

```bash
npm run check
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run typecheck
```

## Customization

To personalize this portfolio:

1. Update `src/lib/data.ts` with your own name, biography, experience, education, skills, and projects.
2. Replace `public/Profile_photo.png` and project images used by `selectedWork`.
3. Modify `src/components` layout or text styling as needed.
4. Change metadata and title in `src/layouts/Layout.astro`.

## Deployment

This Astro site can be deployed to any static hosting provider that supports Astro builds, including:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

For Vercel deploys, the default build command is:

```bash
npm run build
```

and the output directory is managed by Astro automatically.

## Notes

- The project uses modern browser features and requires Node.js `>=22.12.0`.
- The codebase is designed for easy updating through data-driven content and reusable React components.
- The current content is tailored for an Electronics & Robotics Engineer portfolio.
