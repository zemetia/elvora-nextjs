# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ELVORA is an AI-powered clinical skincare application built with Next.js 16. The app provides personalized skin analysis using Google Gemini AI, offering product recommendations and skincare system suggestions based on uploaded facial images.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Environment Setup
The app requires a Google Gemini API key. Create a `.env.local` file in the root:
```
GEMINI_API_KEY=your_api_key_here
```

## Architecture

### Next.js App Router Structure
- **Client-side rendering**: Main page (`app/page.tsx`) is a client component (`'use client'`) that orchestrates multiple landing page components
- **Server-side API**: AI skin analysis runs server-side via Next.js API routes to keep API keys secure
- **Component composition**: App page assembles components in sequence: Navbar → Hero → HowItWorks → ConcernSelector → SystemsDisplay → AIAnalysisPreview → BeforeAfter → WhyElvora → Testimonials → Consultation → Footer

### AI Skin Analysis Flow
1. User uploads image in `AnalysisModal` component (client-side)
2. Image converted to base64 and sent to `/api/analyze-skin` API route
3. API route (`app/api/analyze-skin/route.ts`) calls Google Gemini AI with structured prompt
4. Gemini returns structured JSON with:
   - Skin Vitality Index (0-100 score)
   - Skin type classification
   - Primary concerns array
   - Recommended ELVORA system
   - 3 specific product recommendations
   - Treatment timeline
5. Response schema enforced via `responseSchema` with `Type` enums from `@google/genai`
6. Results displayed in modal with vitality score, concerns, and product recommendations

### Key Type Definitions (`lib/types.ts`)
- `SkinConcern`: Enum for predefined skin concerns
- `SkinAnalysisResult`: Structure returned by Gemini AI analysis
- `SkincareSystem`: Product system recommendation structure

### Styling Approach
- **Tailwind CSS v4** with custom sage color theme (`#84a98c`)
- Custom CSS properties defined in `app/globals.css`:
  - `--sage`: Brand color
  - `.glass`: Glassmorphism effect with backdrop blur
  - `.no-scrollbar`: Hide scrollbars while maintaining functionality
- Theme values accessible via Tailwind (e.g., `bg-sage`, `text-sage`)
- Geist fonts (sans and mono) loaded via `next/font/google`

### Modal State Management
The `AnalysisModal` component has three distinct steps:
- `upload`: File selection interface
- `analyzing`: Animated scanning visualization with progress indicators
- `result`: Display analysis results with product recommendations

State flows through via `onOpenAnalysis` callback passed down from main page to components.

## Path Aliases
TypeScript configured with `@/*` alias pointing to root directory:
```typescript
import Component from '@/components/Component'
import { types } from '@/lib/types'
```

## Technology Stack
- Next.js 16.1.1 with App Router
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Google Gemini AI (`@google/genai`)
- ESLint with Next.js config

## Important Notes
- The app was migrated from Vite to Next.js - API calls moved from client to server-side routes
- Interactive components must use `'use client'` directive
- Environment variables use `.env.local` for local development (not `.env`)
- Gemini model used: `gemini-3-flash-preview`
- All components use modern React patterns (hooks, functional components)
