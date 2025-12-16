# Antropomorf Portfolio

[![Svelte](https://img.shields.io/badge/Svelte-5.45.6-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.49.1-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://dreadted.github.io/antropomorf)

> A modern, minimalist portfolio website showcasing my web development projects with animated cards, tech badges, and an obfuscated email link.

## 🚀 Live Demo

**[View Live Site →](https://dreadted.github.io/antropomorf)**

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with gradient backgrounds and smooth animations
- **🃏 Interactive Project Cards**: Hover-activated cards with persistent expansion state
- **🏷️ Tech Stack Badges**: Color-coded technology indicators (WordPress, PHP, JavaScript, CSS)
- **📧 Obfuscated Email**: Client-side email decoding to prevent bot scraping
- **🎭 SVG Icon System**: Reusable icon sprites with FontAwesome support
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **📱 Responsive**: Mobile-first design that works on all devices
- **🌈 Custom Animations**: Staggered card animations and interactive hover effects
- **♿ Accessible**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

### Core

- **[Svelte 5](https://svelte.dev/)** - Modern reactive framework with runes mode
- **[SvelteKit 2](https://kit.svelte.dev/)** - Full-stack framework for Svelte
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7](https://vitejs.dev/)** - Next-generation frontend tooling

### Build & Deploy

- **[@sveltejs/adapter-static](https://www.npmjs.com/package/@sveltejs/adapter-static)** - Static site generation for GitHub Pages
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline
- **[GitHub Pages](https://pages.github.com/)** - Free hosting

### Code Quality

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/dreadted/antropomorf.git
cd antropomorf

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
antropomorf/
├── src/
│   ├── lib/
│   │   ├── Contact.svelte         # Contact section with obfuscated email
│   │   ├── Footer.svelte          # Site footer
│   │   ├── Header.svelte          # Site header
│   │   ├── Icon.svelte            # Reusable SVG icon component
│   │   ├── MailtoLink.svelte      # Obfuscated mailto link
│   │   ├── ProjectCard.svelte     # Interactive project card
│   │   ├── projects.ts            # Project data
│   │   └── index.ts               # Library exports
│   ├── routes/
│   │   ├── +layout.svelte         # Root layout with icon sprite
│   │   └── +page.svelte           # Home page
│   └── app.css                    # Global styles & CSS variables
├── static/
│   ├── icons.svg                  # SVG icon sprite
│   ├── images/                    # Project images
│   └── fonts/                     # Custom fonts
├── package.json
├── svelte.config.js               # SvelteKit configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite configuration
```

## 🎨 Key Components

### ProjectCard

Interactive cards with:

- Staggered entrance animations
- Persistent hover expansion
- Tech badge display
- Technology-specific color coding

### Icon System

Reusable SVG icons using sprite sheets:

```svelte
<Icon name="tf-far-envelope-open" />
```

### MailtoLink

Client-side email obfuscation to prevent spam bots while remaining accessible to users.

## 🚀 Deployment

This site is configured for GitHub Pages deployment.

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the main branch using GitHub Actions.

### Manual Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### GitHub Pages Setup

1. Update `svelte.config.js` with your repository path:

```javascript
kit: {
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/antropomorf' : '';
	}
}
```

2. Create `.github/workflows/deploy.yml` for GitHub Actions

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

## 📝 Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run check`   | Run svelte-check          |
| `npm run lint`    | Lint code with ESLint     |
| `npm run format`  | Format code with Prettier |

## 🎨 Color Palette

```css
--dark: #131019 /* Background dark */ --medium: #029bdd /* Accent blue */ --primary: #ff00b2
	/* Magenta */ --secondary: #e4ff46 /* Yellow */ --white: #fff /* Text white */ --black: #000
	/* Text black */ /* Tech badges */ --wp: #00749c /* WordPress blue */ --php: #474a8a
	/* PHP purple */ --js: #f0db4f /* JavaScript yellow */ --css: #663399 /* CSS purple */;
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Christofer Laurin**

- Website: [antropomorf.se](https://antropomorf.se)
- GitHub: [@dreadted](https://github.com/dreadted)

## 🙏 Acknowledgments

- Icons from [FontAwesome](https://fontawesome.com/)
- Font: [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)
- Built with [SvelteKit](https://kit.svelte.dev/)

---

<div align="center">
  <sub>Built with ❤️ using Svelte</sub>
</div>
