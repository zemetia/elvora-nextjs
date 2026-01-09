# ELVORA - AI-Powered Clinical Skincare (Next.js)

This is the Next.js version of the ELVORA AI-powered clinical skincare application.

## Features

- 🤖 AI-powered skin analysis using Google Gemini
- 💅 Beautiful, responsive UI with Tailwind CSS
- 🔍 Personalized skincare recommendations
- 📊 Skin vitality scoring system
- 🎨 Clinical-grade product system recommendations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Google Gemini API key

### Installation

1. Clone the repository and navigate to the project:

```bash
cd elvora_next_project
```

2. Install dependencies (already done):

```bash
npm install
```

3. Set up your environment variables:

Edit the `.env.local` file in the root directory and add your Gemini API key:

```
GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
elvora_next_project/
├── app/
│   ├── api/
│   │   └── analyze-skin/
│   │       └── route.ts       # API route for skin analysis
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── ConcernSelector.tsx
│   ├── SystemsDisplay.tsx
│   ├── AIAnalysisPreview.tsx
│   ├── BeforeAfter.tsx
│   ├── WhyElvora.tsx
│   ├── Testimonials.tsx
│   ├── Consultation.tsx
│   ├── Footer.tsx
│   └── AnalysisModal.tsx      # AI skin analysis modal
└── lib/
    └── types.ts               # TypeScript type definitions
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Google Gemini AI** - Advanced AI for skin analysis
- **React 19** - UI library

## Key Differences from Original Vite Project

1. **Server-Side API Routes**: The Gemini AI analysis now runs on the server via Next.js API routes (`/api/analyze-skin`), keeping your API key secure
2. **App Router**: Uses Next.js App Router for better performance and SEO
3. **Client Components**: Interactive components use the `'use client'` directive
4. **Environment Variables**: Uses `.env.local` for environment configuration
5. **Built-in Optimization**: Automatic code splitting, image optimization, and more

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Migration Notes

✅ All components have been successfully migrated
✅ Gemini AI service moved to server-side API route
✅ Tailwind CSS configuration with custom sage color
✅ TypeScript types preserved
✅ All styling and animations maintained
✅ Build tested and verified

## License

All rights reserved © 2026 ELVORA Skincare
