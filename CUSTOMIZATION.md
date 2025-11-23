# Quick Start Customization Guide

Follow these steps to personalize your portfolio:

## 1. Update Basic Information (5 min)

### Header & Footer
**File:** `src/components/header.tsx` and `src/components/footer.tsx`

- Change "Portfolio" text to your name
- Update social links (GitHub, LinkedIn, email)
- Add your own branding

### Home Page Hero
**File:** `src/app/page.tsx` (Lines 12-15)

Replace:
```tsx
<h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
  Hello, I'm a Developer
</h1>
<p className="mt-4 text-xl text-slate-600">
  I build beautiful and functional web experiences
</p>
```

With your own headline and tagline.

### About Page
**File:** `src/app/about/page.tsx`

Update the following sections:
- "Who am I?" section with your bio
- "What I do" with your specialties
- Skills list (currently: React, Next.js, TypeScript, etc.)
- Contact section with your real email and social links

## 2. Add Your Projects (5-10 min)

**File:** `src/data/projects.ts`

Replace the sample projects with your own:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Title",
    description: "What you built and why it's cool",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/your-repo",
    link: "https://your-project-live-url.com",
  },
  // Add more projects...
]
```

**Fields:**
- `id` — Unique identifier (string)
- `title` — Project name
- `description` — 1-2 sentence overview
- `tags` — Technologies used (array of strings)
- `github` — (Optional) GitHub repo link
- `link` — (Optional) Live project URL

## 3. Customize the Animated Showpiece (10-15 min)

**File:** `src/components/animated-showpiece.tsx`

### Change Particle Count
Line 39:
```typescript
const particleCount = 50  // Change this number (higher = more particles)
```

### Change Colors
Lines 60-62 (particle color):
```typescript
ctx.fillStyle = `rgba(30, 58, 138, ${particle.opacity})`
// Change RGB values: (30, 58, 138) = blue
// Try: (139, 0, 139) = purple, (255, 69, 0) = red-orange
```

Lines 72 (connection lines):
```typescript
ctx.strokeStyle = `rgba(30, 58, 138, ${(1 - distance / 100) * 0.2})`
// Match to particle color
```

### Adjust Speed
Lines 46-47:
```typescript
vx: (Math.random() - 0.5) * 2,  // Change 2 to 1 for slower, 4 for faster
vy: (Math.random() - 0.5) * 2,  // Same here
```

### Adjust Connection Distance
Line 78:
```typescript
if (distance < 100) {  // Change 100 to smaller (50) or larger (200)
```

## 4. Change Color Scheme (5 min)

The site uses Tailwind CSS classes. Current theme is "slate" (gray-blue).

### Option A: Replace Color Across All Files

Search and replace:
- `slate-900` → `blue-900` (or your preferred color)
- `slate-600` → `blue-600`
- `slate-200` → `blue-200`
- `slate-50` → `blue-50`
- `slate-100` → `blue-100`

Tailwind colors: `slate`, `gray`, `blue`, `purple`, `indigo`, `violet`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `rose`, `pink`, `fuchsia`

### Option B: Use Find & Replace in VS Code

1. Press `Ctrl+H` (Find & Replace)
2. Find: `slate-` Replace: `blue-` (or your color)
3. Click "Replace All"

## 5. Update Project Metadata

**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",  // Browser tab title
  description: "A brief description of your portfolio",  // SEO description
}
```

## 6. Add Navigation Links

**File:** `src/components/header.tsx`

Add new links in the navigation (lines 15-31):

```tsx
<Link
  href="/contact"
  className="text-slate-600 transition-colors hover:text-slate-900"
>
  Contact
</Link>
```

Then create the corresponding page: `src/app/contact/page.tsx`

## 7. Deploy to Vercel (1 min)

1. Push to GitHub (if not already done):
   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your GitHub repo
4. Click "Deploy"
5. Your site is live! Share your unique Vercel URL

## 8. Future Enhancements

Once you're comfortable, consider adding:

- **Contact Form** — Create `src/app/contact/page.tsx` with a form
- **Blog** — Add `src/app/blog/page.tsx` with markdown posts
- **Dark Mode** — Add theme toggle using React Context
- **More Animations** — Install Framer Motion for advanced effects
- **Database** — Connect PostgreSQL for dynamic content
- **Admin Panel** — Create `/admin` route for content management

## Tips & Tricks

- **Preview Changes:** Dev server auto-refreshes at `localhost:3000`
- **Type Safety:** VS Code will warn about TypeScript errors before build
- **Styling:** Use Tailwind IntelliSense VS Code extension for class autocomplete
- **Icons:** More icons available from `lucide-react` library

## Common Issues

**Can't find a file?**
- Use `Ctrl+P` in VS Code to quickly search files

**Component not rendering?**
- Check the import statement is correct
- Make sure `"use client"` is at the top if using hooks

**Styles not applying?**
- Ensure correct Tailwind class names
- Clear browser cache: `Ctrl+Shift+Delete`

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

Good luck personalizing your portfolio! 🚀
