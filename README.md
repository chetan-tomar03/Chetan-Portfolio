# Chetan Tomar: Portfolio

React + Vite portfolio. No runtime dependencies beyond React.

## Run
```
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Update your details
Everything editable lives in `src/data.js`:
- `profile.github`, `profile.linkedin`, `profile.email`
- each project's `repoUrl`, `liveUrl` and optional `image`
  (put screenshots in `public/screenshots/` and use e.g. `/screenshots/gallery.webp`)

Contact links, repository URLs and project screenshots are already filled in.
Empty values show a clearly marked placeholder. "Source Code" appears only once `repoUrl` is set,
and "Live Demo" only once `liveUrl` is set.
