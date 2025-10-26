# Onyx — Cocktail Menu (React + Vite + GSAP)
You can explore the live demo here: [cocktail-menu-project-gsap.vercel.app](https://cocktail-menu-project-gsap.vercel.app/)

A one-page, animated cocktail menu built with React (Vite) and GSAP.
It showcases a bar/restaurant landing experience: a hero with video-scrub, parallax leaves, a menu slider, and a clean contact section.

## Highlights
- Hero with text reveal (SplitText) and scroll-scrubbed video
- Parallax ornaments (leaves) tied to scroll
- Cocktails & Mocktails lists driven by simple constants
- Tab/slider section for highlighted drinks
- Accessible markup (semantic sections, alt/aria)
- Responsive layout (mobile → desktop)
- Lightweight build via Vite

## Tech Stack
- React + Vite — fast dev server, instant HMR, tiny production builds.
- GSAP (gsap, ScrollTrigger, SplitText) — timeline-based, smooth, and precise animations:
    - SplitText reveals hero and section titles by words/chars/lines.
    - ScrollTrigger scrubs the hero video and moves parallax leaves.
- Tailwind (via import "tailwindcss") — utility-first styling, plus custom utilities and theme tokens defined in src/index.css.
- react-responsive — media query hook for mobile vs. desktop animation tweaks.
- Static assets from /public — easy to reference (/images/..., /videos/...).

## How Animations Work
- Hero.jsx
    - SplitText splits .title / .subtitle → GSAP animates with stagger
    - ScrollTrigger scrubs the video from currentTime: 0 → duration
    - Leaves move with a small parallax on hero scroll

- Cocktails.jsx / About.jsx / Contact.jsx
    - Word-by-word title reveals; light parallax on decorative elements

- Menu.jsx
    - Tabs change the active cocktail; a GSAP sequence animates image + details on change