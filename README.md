Expert AI Portfolio
===================

Personal portfolio site for Adam Gonzalez, a Sr. ML/Generative AI Engineer. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui to showcase AI skills, projects, and experience.

Features
--------
- Hero with animated background, social links, and primary contact CTA
- Skills grid covering Generative AI, ML, CV, Cloud, languages, and databases
- Experience timeline for roles at Google, Nike, Urbint, and Amazon
- Featured projects with tech badges and GitHub CTA
- Contact section with email, phone, location, and social links
- Responsive navigation with smooth anchor links for sections

Tech Stack
----------
- React 18 + TypeScript
- Vite for bundling and local development
- Tailwind CSS with shadcn/ui components
- lucide-react icon set

Getting Started
---------------
Prerequisites:
- Node.js 18+ and npm

Install dependencies:
```
npm install
```

Run the dev server:
```
npm run dev
```
Then open the printed local URL (default http://localhost:5173).

Other Scripts
-------------
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run vitest test suite

Project Structure
-----------------
- `src/pages/Index.tsx` — main page assembling all sections
- `src/components/` — UI sections (`HeroSection`, `SkillsSection`, `ExperienceSection`, `ProjectsSection`, `ContactSection`, `Navigation`)
- `src/components/ui/` — shadcn/ui primitives
- `src/lib/utils.ts` — utility helpers (e.g., `cn`)

Customization Notes
-------------------
- Update social/contact info in `HeroSection`, `ContactSection`, and `Navigation`
- Adjust skills, experience entries, and projects in their respective section components
- Tailwind theme values live in `tailwind.config.ts`