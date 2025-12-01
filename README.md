# Naveen Portfolio (React + Vite)

Modern portfolio site built with React and Vite, styled using Tailwind CSS via CDN. The app is organized into clear sections and reusable components.

## Project Structure

```
src/
	components/
		FloatingParticles.jsx
		Navigation.jsx
	sections/
		About.jsx
		Contact.jsx
		Hero.jsx
		Projects.jsx
		Skills.jsx
	data/
		projects.js
		skills.js
	hooks/
		useActiveSection.js
	App.jsx
	main.jsx
	index.css
```

## Key Concepts

- Sections are split into dedicated files under `src/sections` for clarity.
- Reusable UI is under `src/components`.
- Static content (skills, projects) lives in `src/data` as plain objects.
- Active section highlighting uses `IntersectionObserver` via `useActiveSection`.
- Tailwind is loaded from CDN in `index.html` (no build-time Tailwind config required).

## Develop

```powershell
npm install
npm run dev
```

Visit the local URL printed in the terminal to preview.

## Build

```powershell
npm run build
npm run preview
```

## Notes

- If you prefer a build-time Tailwind setup (JIT, custom config), we can switch from CDN to local Tailwind with PostCSS.
- Icons are from `lucide-react` and are mapped from simple string keys in the data files.
