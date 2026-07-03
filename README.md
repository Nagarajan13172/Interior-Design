# Kinoah Creations

A premium, production-ready **construction & interior design** company website built with **React + TypeScript + Vite + Tailwind CSS**, animated with **Framer Motion**, and featuring an interactive **Three.js** 3D interior showcase.

> Brand, contact details, images, and 3D models are all driven by config/data files — no hard-coded content in components. Everything marked `⚠️ REPLACE` in the code is a placeholder for you to swap.

---

## ✨ Features

- Sticky, scroll-aware navbar with active-section highlighting + clean mobile hamburger menu
- Full-screen hero with warm gold/black image overlays, animated reveal, and stats
- 12 sections: Home, About, Services, Construction Process, Interior Design, Gypsum Ceiling, Wooden Works, 3D Showcase, Portfolio (with filter + detail modal), **Gallery** (client's own photos, filterable + lightbox), FAQ, Contact
- Interactive 3D showcase: a built-in Three.js room, a Sketchfab embed, and a slot for your own `.glb`/`.gltf` — with a Suspense loader and a graceful error fallback
- Gallery of the client's real project photos (`public/images/work/`) with category filters and a keyboard-navigable lightbox
- Fully responsive (375 / 768 / 1024 / 1440), accessible (focus rings, aria labels, keyboard nav), and `prefers-reduced-motion` aware
- Code-split: Three.js loads only when the 3D showcase is reached

---

## 1. Install dependencies

Requires **Node.js 18+** (tested on Node 24) and npm.

```bash
npm install
```

## 2. Run the project

```bash
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check + production build → dist/
npm run preview   # preview the production build locally
npm run lint      # type-check only (tsc --noEmit)
```

---

## 3. Where to place local 3D models

Local models are **optional** — the showcase already ships with a built-in room scene and a Sketchfab embed. To add your own:

1. Drop a `.glb` or `.gltf` file into **`public/models/`** (e.g. `public/models/interior.glb`).
2. Add an entry to **`src/data/models.ts`**:

   ```ts
   {
     id: 'my-interior',
     name: 'My Interior Model',
     description: 'A local interior model.',
     type: 'local',
     modelPath: '/models/my-interior.glb', // ⚠️ REPLACE: 3D model path
     poster: images.showcasePoster,
   }
   ```

The viewer auto-frames the model, shows a loading bar while it downloads, and displays a friendly fallback if the file is missing.

> **About the included `loft-interior-6-for-free.zip`:** it contains a 37 MB **FBX** source with non-web texture names — not suitable for direct browser loading. That model is therefore shown via its **Sketchfab embed** instead (already configured in `models.ts`). If you convert the FBX to an optimised `.glb`, place it in `public/models/` and switch its entry to `type: 'local'`.

You can add **as many models as you like** — the gallery grows automatically.

---

## 4. How to update website content

All content lives in plain data files under **`src/data/`** and **`src/config/`** — edit these, not the components:

| File | Controls |
|------|----------|
| `src/config/site.ts` | **Brand name, phone, WhatsApp, email, address, social links, hero stats** |
| `src/data/navigation.ts` | Navbar links |
| `src/data/services.ts` | Service cards |
| `src/data/constructionProcess.ts` | Construction timeline steps, tables, tips |
| `src/data/gypsumCeiling.ts` | Gypsum content, comparison table, design ideas |
| `src/data/woodenWorks.ts` | Woodwork steps, do's & don'ts |
| `src/data/interiorDesign.ts` | Interior services + gallery |
| `src/data/portfolio.ts` | Projects & filter categories |
| `src/data/faqs.ts` | FAQ questions/answers |
| `src/data/models.ts` | 3D showcase gallery |
| `src/data/gallery.ts` | **Gallery** photos (the client's own work, with categories/titles) |
| `src/data/images.ts` | Contextual section imagery (hero, services, process, portfolio, etc.) |

### Rename the brand

Open **`src/config/site.ts`** and edit `brandName`, `brandShort`, and `tagline`. It updates the navbar, footer, logo, and page metadata everywhere.
The logo emblem is at **`public/images/brand/logo-gold.png`** (and the favicon at `public/favicon.png`) — replace those files to change the mark.

### SEO / page title

Edit the `<title>` and `<meta>` tags in **`index.html`**.

---

## 5. How to replace images and contact details

### Contact details, phone, WhatsApp, email, address

Everything is in **`src/config/site.ts`** under `contact` and `social`. Each line is marked `⚠️ REPLACE`:

```ts
contact: {
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210', // wa.me/<countrycode><number>
  email: 'hello@kinoahcreations.com',
  emailHref: 'mailto:hello@kinoahcreations.com',
  address: 'No. 24, 2nd Floor, Main Road, Chennai, Tamil Nadu 600002',
  mapHref: 'https://maps.google.com/?q=Chennai',
  ...
}
```

### Images

There are **two** image sources:

1. **Section imagery** (hero, About, services, process, gypsum ideas, portfolio, 3D poster, contact) lives in **`src/data/images.ts`** as free Unsplash URLs — generic "contextual" visuals. Replace the URL strings, or point them at local files (`'/images/my-hero.jpg'` from `public/`, or an `import` from `src/assets/images/`).

2. **The Gallery** shows the client's **own project photos** from **`public/images/work/`** (`work-01.jpg … work-64.jpg`), configured in **`src/data/gallery.ts`**. To add photos, drop files into `public/images/work/` and append a `g(number, category, title)` entry.

> The 65 photos supplied were imported into `public/images/work/`; one (`IMG_2166.png`) was used as the **logo** and the rest populate the Gallery.

### The contact form

The form in `src/components/sections/Contact.tsx` currently simulates submission (front-end only). Wire the `handleSubmit` function to your email service or backend — e.g. **Formspree**, **EmailJS**, or your own API (search for the `⚠️ REPLACE` comment).

---

## 🎨 Brand theme

Defined in **`tailwind.config.js`**:

| Token | Hex | Use |
|-------|-----|-----|
| `brandGold` | `#F0A500` | Primary gold — highlights, accents |
| `brandOrange` | `#CF7500` | CTA buttons |
| `brandBlack` | `#000000` | Dark sections, footer |
| `brandLight` | `#F4F4F4` | Page background |

Fonts (loaded in `index.html`): **Playfair Display** (headings) + **Inter** (body).

---

## 📁 Project structure

```
src/
├── assets/                     # (add local images / models here)
├── components/
│   ├── layout/                 # Navbar, Footer, FloatingActions
│   ├── sections/               # Hero, About, Services, ConstructionProcess,
│   │                           #   InteriorDesign, GypsumCeiling, WoodenWorks,
│   │                           #   ThreeDShowcase, Portfolio, Gallery, Faq, Contact
│   └── ui/                     # Button, SectionTitle, ServiceCard, ProcessStep,
│                               #   ProjectCard, InteriorModelViewer, Accordion,
│                               #   Checklist, DataTable, Logo, Reveal
├── config/site.ts              # ⚠️ Brand + contact single source of truth
├── data/                       # All content (see table above)
├── lib/                        # motion variants + smooth-scroll helper
├── pages/HomePage.tsx          # Assembles all sections
├── types/                      # Shared TypeScript interfaces
├── App.tsx                     # Router + layout shell
├── main.tsx                    # Entry point
└── index.css                   # Tailwind + global design system
```

The original Tamil source notes (used to author the English content) are preserved in `docs/original-content-source-tamil.md`.

---

## ♿ Accessibility & performance notes

- All interactive elements have visible focus states and `aria-label`s where icon-only.
- The 3D canvas is wrapped in an error boundary and only rendered when supported (falls back to a poster + message otherwise).
- Images use `loading="lazy"`; heavy Three.js is lazy-loaded and code-split.
- Animations respect `prefers-reduced-motion`.

---

Built for **Kinoah Creations**. Replace the branding and make it yours.
