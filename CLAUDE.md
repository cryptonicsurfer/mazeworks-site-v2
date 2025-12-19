# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mazeworks company website - a React 19 SPA with 3D visualizations and bilingual support (English/Swedish). Built for showcasing AI integration and automation consulting services.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server on http://localhost:3000
npm run build  # Build for production
npm run preview # Preview production build
```

## Architecture

### Tech Stack
- **React 19** with TypeScript
- **Vite** for bundling/dev server
- **react-three-fiber** + **drei** for 3D scenes (Three.js)
- **Framer Motion** for animations
- **Tailwind CSS** (CDN) with custom config in index.html
- **Lucide React** for icons

### File Structure
```
index.html      # Entry point with Tailwind config and import maps
index.tsx       # React root mount
App.tsx         # Main app with all sections, navigation, i18n translations
components/
  QuantumScene.tsx   # 3D hero scenes (HeroScene, QuantumComputerScene)
  Diagrams.tsx       # Interactive diagrams (SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram)
types.ts        # Shared TypeScript interfaces
```

### Key Patterns

**Internationalization**: Translations object in `App.tsx` with `Language` type (`'en' | 'sv'`). All text content pulled from `translations[lang]`.

**Tailwind Configuration**: Custom colors (`nobel-gold`, `nobel-dark`, `nobel-cream`) and fonts (Playfair Display serif, Inter sans) defined in `index.html` script block.

**3D Components**: Use `@react-three/fiber` Canvas with drei helpers. Scenes are wrapped in Float for animations. MeshDistortMaterial used for organic shapes.

**Diagrams**: Interactive React components accepting `lang` prop. Use Framer Motion for animations and Lucide icons.

### Environment
- `GEMINI_API_KEY` in `.env.local` (exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`)
