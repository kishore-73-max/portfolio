# Kishore — Personal Portfolio (B.Tech IT)

> Production-ready, bilingual (English & Telugu) personal portfolio for **Satya Kishore Gollapalli (Kishore)**, an Information Technology student at Vishnu Institute of Technology, Bhimavaram, India (Class of 2029).

Built at the intersection of **Cybersecurity**, **Software Engineering**, and **AI Automation**. Crafted to reflect the identity of a serious young technology builder—confident, humble, and completely truthful.

---

## 🌟 Key Highlights & Engineering Quality

- **Zero Exaggeration / Strictly Honest**: No fake metrics, testimonials, fabricated dates, or artificial skill meters. Every project features a truthful lifecycle status badge (**Idea**, **Research**, **Prototype**, **Building**, or **Completed**).
- **Bilingual (English & Telugu)**: Full bilingual support with English (Inter) and native Telugu (Noto Sans Telugu via `next/font/google` with `display: swap`).
- **Single Source of Truth (`src/content/site.ts`)**: All texts, personal metadata, roadmap milestones, projects, skills, and links reside in a strictly typed configuration file.
- **Placeholder-Aware Security**: Social and contact links that are currently empty render in an accessible disabled state with a `"Coming soon"` tooltip and `aria-disabled="true"`. Zero links point to `"#"` or fake URLs.
- **Deep Navy Aesthetic**: Dark navy (`#060913` / `#0b1120`), electric blue primary accents (`#2563eb`), subtle cyan secondary touches (`#06b6d4`), refined cards, and minimal glassmorphism.
- **Interactive Developer Terminal**: Subtle typing animation on the hero section looping through `whoami`, `focus`, and `status`. Automatically renders statically for users with `prefers-reduced-motion`.
- **Accessibility & Performance**:
  - Semantic HTML5 landmark structure (`header`, `main`, `section`, `footer`)
  - Exactly one semantic `<h1>` on the page
  - Skip to main content link for keyboard navigation
  - Visible focus rings with high-contrast outlines
  - 100% static export friendly (`out/` folder generated on `npm run build`)

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets, SVG logomarks, favicon
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css     # Tailwind v4, custom scrollbars, typography rules
│   │   ├── layout.tsx      # Root layout, Google Fonts (Inter + Noto Sans Telugu), SEO metadata
│   │   ├── page.tsx        # Single-page layout organizing all sections
│   │   ├── robots.ts       # Robots.txt generator for search engines
│   │   └── sitemap.ts      # Sitemap generator
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx  # Accessible SVG GitHub & LinkedIn icons
│   │   ├── About.tsx           # Academic profile, personal story & values
│   │   ├── Achievements.tsx    # 4 verified milestones without dates
│   │   ├── Contact.tsx         # Mailto link CTA & social channels
│   │   ├── CurrentlyExploring.tsx # Step-by-step technical roadmap
│   │   ├── Footer.tsx          # Attribution & back-to-top
│   │   ├── Hero.tsx            # Headline, single H1, action buttons
│   │   ├── Navbar.tsx          # Sticky navigation, language switcher (EN/TE)
│   │   ├── ProjectModal.tsx    # Deep dive architecture modal
│   │   ├── Projects.tsx        # Projects grid with status legend
│   │   ├── Skills.tsx          # Discrete skill labels (no percentage meters)
│   │   └── Terminal.tsx        # Interactive typing terminal widget
│   ├── context/
│   │   └── LanguageContext.tsx # Language state manager (persists to localStorage)
│   ├── content/
│   │   └── site.ts             # SINGLE SOURCE OF TRUTH (EN & TE dictionaries)
│   └── types/
│       └── site.ts             # TypeScript interfaces for site content
├── next.config.ts          # Static export configuration
├── package.json            # Scripts & dependencies
├── tsconfig.json           # Strict TypeScript configuration
└── README.md               # Documentation & deployment guide
```

---

## 🛠️ How to Update Content

All content is centralized in **`src/content/site.ts`**. You do not need to hunt through component files to edit copy or links.

### 1. Adding Your Real Social & Contact Links

Open `src/content/site.ts` and locate the `links` object near line 16:

```typescript
links: {
  email: "your.real.email@gmail.com",       // Activates mailto button & copy address
  github: "https://github.com/yourusername", // Activates GitHub button
  linkedin: "https://linkedin.com/in/yourid", // Activates LinkedIn card
  portfolio: "https://yourdomain.com",       // Activates portfolio link
},
```

> **Note:** Leaving any link as an empty string `""` safely renders it disabled with a `"Coming soon"` tooltip.

### 2. Finalizing the Wellness Project Name

In `src/content/site.ts`, navigate to `shwas-sthira` project entry under both `en` and `te` and change the title from `"Shwas / Sthira (Pending Final Choice)"` to your selected name (either `"Shwas"` or `"Sthira"`).

### 3. Adding New Skills or Modifying Current Statuses

In `src/content/site.ts`, locate `skills.categories`:

```typescript
{
  title: "Programming",
  iconName: "Code2",
  skills: [
    { name: "Java", levelLabel: "Currently Learning" },
    { name: "Python", levelLabel: "Learning & Practicing" },
    { name: "C", levelLabel: "Familiarity" },
    // Add optional skills only if true:
    // { name: "Linux", levelLabel: "Basic Usage" },
    // { name: "Wireshark", levelLabel: "Fundamentals" },
  ],
}
```

### 4. Updating Telugu Copy

Telugu content is provided in `siteData.te`. When modifying Telugu strings:
- Keep technical terms (such as *Java*, *Python*, *n8n*, *Git*, *DSA*, *AI*, *Cybersecurity*) in English script.
- Maintain gender-neutral and respectful phrasing.

---

## 💻 Local Development

### Prerequisites
- Node.js (v18.18.0 or newer recommended)
- npm (or pnpm)

### Setup & Run

1. Clone or open the repository:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run production build:
   ```bash
   npm run build
   ```
   Generates a standalone static output directory in `./out`.

---

## 🚀 How to Deploy

Because this portfolio is built with static export (`output: "export"`), it can be deployed for free to any static hosting provider.

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

### Option B: Deploy to GitHub Pages
1. Push your repository to GitHub.
2. Go to repository **Settings** → **Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Use the official Next.js GitHub Actions workflow. The `./out` folder will automatically be deployed.

### Option C: Deploy to Netlify / Cloudflare Pages
- **Build command**: `npm run build`
- **Publish directory**: `out`

---

## 📋 Checklist for Kishore (Before Public Launch)

- [ ] **Email Address**: Set `links.email` in `src/content/site.ts`
- [ ] **GitHub Profile**: Set `links.github` in `src/content/site.ts`
- [ ] **LinkedIn Profile**: Set `links.linkedin` in `src/content/site.ts`
- [ ] **Project Name**: Finalize between *Shwas* or *Sthira* for Project #2
- [ ] **Optional Skills**: If you are comfortable with *Linux*, *Burp Suite*, or *Wireshark*, uncomment or add them in `skills.categories` in `site.ts`
- [ ] **Telugu Review**: Share with a native Telugu reader to verify dialect nuances

---

Designed and built by Kishore.
