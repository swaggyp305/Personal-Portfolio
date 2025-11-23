# Architecture & Design Patterns

## System Architecture Overview

```
┌─────────────────────────────────────────────────┐
│         Browser / Client (React)                │
│  - Interactive Animated Showpiece               │
│  - Project Gallery with Filters                 │
│  - Navigation & Page Transitions                │
└────────────────────┬────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │  Next.js App Router     │
        │  (Server-Side)          │
        │                         │
        │  Pages & Components     │
        │  - Static Generation    │
        │  - Dynamic Routes       │
        └────────────┬────────────┘
                     │
        ┌────────────┴────────────┐
        │   API Routes            │
        │  (/api/content)         │
        │  - GET: Read Content    │
        │  - POST: Update Content │
        └────────────┬────────────┘
                     │
        ┌────────────v────────────┐
        │   Data Layer            │
        │  (Ready for Database)   │
        │  - Currently: In-memory │
        │  - Future: PostgreSQL   │
        └─────────────────────────┘
```

## Component Architecture

### Layered Structure

#### 1. **Page Components** (`src/app/*/page.tsx`)
- **Responsibility:** Define routes and page layouts
- **Pattern:** Server components by default
- **Data:** Static data from `src/data/`
- **Examples:**
  - `src/app/page.tsx` — Home
  - `src/app/projects/page.tsx` — Projects
  - `src/app/about/page.tsx` — About

#### 2. **Layout Components** (`src/app/layout.tsx`)
- **Responsibility:** Wrapper for entire site
- **Contains:** Header, Footer, main content area
- **Type:** Server component
- **Props:** Metadata, children

#### 3. **UI Components** (`src/components/*.tsx`)
- **Responsibility:** Reusable, stateless UI pieces
- **Pattern:** Server components when possible, client only if needed
- **Examples:**
  - `Header` — Navigation
  - `Footer` — Footer
  - `ProjectCard` — Individual project display
  - `AnimatedShowpiece` — Interactive animation

#### 4. **Data Layer** (`src/data/`)
- **Responsibility:** Define data structures and sample data
- **Pattern:** Typed with TypeScript interfaces
- **Usage:** Imported by pages and components
- **Example:** `projects.ts` exports Project[] array

#### 5. **Utilities** (`src/lib/`)
- **Responsibility:** Helper functions, utilities
- **Currently:** `utils.ts` with `cn()` class merger
- **Future:** Add hooks, validators, formatters

## Data Flow Patterns

### Static Page Rendering

```
Data (projects.ts)
        ↓
Page Component (projects/page.tsx)
        ↓
UI Components (ProjectCard)
        ↓
HTML Output (Pre-rendered at build time)
        ↓
Browser (Static HTML + JavaScript)
```

### Live-Updated Content Flow

```
1. Client Component
   ↓
2. Fetch API
   GET /api/content
   ↓
3. API Route Handler
   (/api/content/route.ts)
   ↓
4. Data Source
   (Currently: In-memory object)
   ↓
5. JSON Response
   ↓
6. Client Re-renders
   (UI updates without page reload)
```

### Future: Database-Backed Content

```
Client Component
   ↓
API Route (/api/content)
   ↓
Query Builder (Prisma/ORM)
   ↓
Database (PostgreSQL/MongoDB)
   ↓
JSON Response
   ↓
Client Updates UI
```

## Component Composition

### Current Component Tree

```
RootLayout
├── Header
│   ├── Logo/Brand
│   └── Navigation
│       ├── Home Link
│       ├── Projects Link
│       └── About Link
├── Main Content
│   └── Page Component
│       ├── Hero Section
│       ├── AnimatedShowpiece
│       ├── ProjectCard[]
│       └── CTA Buttons
└── Footer
    ├── Social Links
    └── Copyright
```

### Adding New Components

**Pattern:** Keep components small and focused

```typescript
// src/components/new-component.tsx
"use client"  // Only if using hooks

import { SomeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewComponentProps {
  title: string
  description?: string
}

export function NewComponent({ title, description }: NewComponentProps) {
  return (
    <div className="...">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

## API Architecture

### Endpoint Pattern

```typescript
// src/app/api/[resource]/route.ts
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Read logic
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Write logic
  return NextResponse.json({ success: true })
}

export async function PUT(request: Request) {
  // Update logic
}

export async function DELETE(request: Request) {
  // Delete logic
}
```

### Current API: `/api/content`

**GET Response:**
```json
{
  "featured": {
    "title": "Latest Project",
    "description": "Project details...",
    "updatedAt": "2024-11-23T10:30:00Z"
  }
}
```

**POST Request:**
```json
{
  "featured": {
    "title": "New Title",
    "description": "New description"
  }
}
```

## Styling Architecture

### Tailwind CSS Strategy

**Color Palette:** Slate-based (gray-blue)
```
Primary: slate-900 (dark blue-gray)
Secondary: slate-600 (medium gray-blue)
Accent: slate-100/200 (light backgrounds)
Neutral: slate-50 (very light backgrounds)
```

**Spacing:** Tailwind defaults (4px, 8px, 16px, etc.)

**Responsive Breakpoints:**
- Mobile: < 640px (default)
- SM: 640px+
- MD: 768px+
- LG: 1024px+

**Pattern:** Mobile-first responsive design
```tsx
// Example: Stack on mobile, grid on desktop
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  {/* Content */}
</div>
```

### Extending Tailwind

Edit `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",  // Custom color
      },
      spacing: {
        "5xl": "3rem",  // Custom spacing
      },
    },
  },
}
```

## Type Safety

### TypeScript Setup

**Config:** `tsconfig.json`
- Strict mode enabled
- JSX react-jsx
- Module path aliases: `@/*` → `src/*`

### Type Patterns

**Interfaces:**
```typescript
// src/data/projects.ts
interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github?: string  // Optional
}
```

**Component Props:**
```typescript
interface ProjectCardProps {
  project: Project
  onSelect?: (id: string) => void  // Optional callback
}
```

**API Types:**
```typescript
interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
}
```

## Performance Considerations

### Optimization Techniques

1. **Code Splitting** — Automatic with dynamic imports
   ```typescript
   const HeavyComponent = dynamic(() => import("./heavy"))
   ```

2. **Image Optimization** — Use Next.js Image component
   ```typescript
   import Image from "next/image"
   <Image src="..." alt="..." width={} height={} />
   ```

3. **Static Generation** — Pages pre-rendered at build time
   ```typescript
   export const revalidate = 3600  // ISR: revalidate every hour
   ```

4. **Lazy Loading** — Load components on demand
   ```typescript
   const Component = lazy(() => import("./component"))
   ```

## Deployment Architecture

### Vercel Deployment

```
GitHub Repository
        ↓
git push origin main
        ↓
Vercel Webhook (automatic)
        ↓
Build Process
- npm run build
- Next.js compilation
- TypeScript checking
        ↓
Deployment to Edge Network
- Global CDN distribution
- Automatic HTTPS
- Zero-downtime updates
        ↓
Live at: your-domain.vercel.app
```

### Environment Configuration

**Development** (`.env.local`)
```
DATABASE_URL=postgresql://localhost:5432/portfolio
NODE_ENV=development
```

**Production** (Vercel Environment Variables)
```
DATABASE_URL=[production database URL]
NODE_ENV=production
```

## Scaling Roadmap

### Phase 1: Current (MVP)
- Static pages
- Project showcase
- Animated showpiece
- Live-update API (in-memory)

### Phase 2: Database (Month 1-2)
- PostgreSQL integration
- Prisma ORM setup
- Persist projects & content
- Admin CRUD operations

### Phase 3: Content & Community (Month 3-4)
- Blog system (markdown or CMS)
- Comments on projects
- User authentication
- Contact form with email

### Phase 4: Analytics & Engagement (Month 5-6)
- Vercel Analytics
- View tracking
- Search functionality
- Recommendation engine

### Phase 5: Advanced Features (Month 7+)
- Dark mode
- Internationalization (i18n)
- Advanced animations (Framer Motion)
- Admin dashboard
- API documentation

## Best Practices

### Component Design
1. **Single Responsibility** — Each component does one thing
2. **Props Interface** — Define clear props types
3. **Composition** — Build larger components from smaller ones
4. **No Side Effects** — Keep components pure

### Code Organization
1. **Colocation** — Keep related files together
2. **Naming** — Clear, descriptive file and component names
3. **Exports** — Named exports for components
4. **Index Files** — Use for grouping related exports

### Performance
1. **Server Components by Default** — Use client only when needed
2. **Memoization** — For expensive computations
3. **Image Optimization** — Always use Next.js Image
4. **Bundle Size** — Monitor with Vercel Analytics

### Type Safety
1. **Strict Mode** — Enabled in tsconfig
2. **Interfaces** — For all data structures
3. **Generics** — For reusable type patterns
4. **As const** — For literal type inference

## Common Patterns

### Creating a New Page

1. Create directory: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Add to Header navigation
4. Build and test

### Adding a New Component

1. Create file: `src/components/new-component.tsx`
2. Define TypeScript interface for props
3. Export as named export
4. Import and use in pages/components

### Creating an API Endpoint

1. Create directory: `src/app/api/resource/`
2. Create file: `src/app/api/resource/route.ts`
3. Export GET, POST, PUT, DELETE handlers
4. Return NextResponse.json()

---

This architecture is designed for scalability, maintainability, and developer experience. It provides a solid foundation for growth while keeping code organized and type-safe.
