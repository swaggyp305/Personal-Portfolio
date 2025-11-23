# Personal Portfolio Website

A modern, modular personal portfolio website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**. Features an interactive animated showpiece component, project showcase gallery, and live-updating content capabilities for scaling.

## Features

- **Interactive Animated Showpiece** — Canvas-based particle system with dynamic connections and animations
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Project Showcase** — Dynamic project gallery with tags, links, and GitHub integration
- **Modular Architecture** — Component-based structure ready for expansion
- **Live-Update API** — Backend endpoints to dynamically update content without page rebuild
- **Type-Safe** — Full TypeScript support throughout
- **Performance Optimized** — Next.js 16 with Turbopack, static pre-rendering, and built-in optimization

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn/pnpm installed

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The site auto-reloads as you make changes

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes for live-updating content
│   ├── about/             # About page
│   ├── projects/          # Projects gallery page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page with animated showpiece
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── animated-showpiece.tsx  # Canvas-based particle animation
│   ├── project-card.tsx        # Project display card
│   ├── header.tsx              # Navigation header
│   └── footer.tsx              # Footer with links
├── data/                  # Static data and configurations
│   └── projects.ts        # Projects data structure
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions (cn, etc.)
```

## Customization Guide

### 1. Update Your Information

Edit these files to personalize the portfolio:

- **`src/components/header.tsx`** — Change brand name/logo
- **`src/components/footer.tsx`** — Update social links and email
- **`src/data/projects.ts`** — Add your projects with descriptions and links
- **`src/app/page.tsx`** — Modify hero text and CTAs
- **`src/app/about/page.tsx`** — Write your bio and skills

### 2. Customize the Animated Showpiece

The `AnimatedShowpiece` component in `src/components/animated-showpiece.tsx` creates a particle animation:

- **Particle Count:** Line 39 - Adjust `particleCount` (higher = more particles)
- **Colors:** Line 60-62 - Modify RGB values in `fillStyle`
- **Speed:** Lines 46-47 - Adjust `vx` and `vy` velocity values
- **Connections:** Line 78 - Change `distance < 100` to adjust connection radius

### 3. Add New Pages

Create new pages easily:

```bash
# Create new route
mkdir src/app/contact
touch src/app/contact/page.tsx
```

Then add to navigation in `src/components/header.tsx`.

### 4. Styling

- **Color Scheme:** Edit Tailwind classes (currently slate-based)
- **Fonts:** Modify `src/app/globals.css`
- **Themes:** Add Tailwind theme config to `tailwind.config.ts`

## API Routes

### Live-Updating Content

**Endpoint:** `/api/content`

**GET** — Retrieve current featured content:
```bash
curl http://localhost:3000/api/content
```

**POST** — Update featured content:
```bash
curl -X POST http://localhost:3000/api/content \
  -H "Content-Type: application/json" \
  -d '{
    "featured": {
      "title": "New Project",
      "description": "Project description"
    }
  }'
```

**Note:** Currently uses in-memory storage. For production, integrate a database (PostgreSQL, MongoDB, etc.).

## Scaling & Future Enhancements

This project is architected for easy expansion:

### Next Steps

1. **Database Integration** — Add PostgreSQL/MongoDB to persist data
   - Migrate `/api/content` to database queries
   - Store project updates and user interactions

2. **Blog System** — Create markdown-based or CMS-powered blog
   - Add `/app/blog` route
   - Implement dynamic route generation

3. **Contact Form** — Add email functionality
   - Create POST endpoint in `/api/contact`
   - Integrate with Nodemailer or SendGrid

4. **Analytics** — Track visitor engagement
   - Integrate Vercel Analytics or Plausible
   - Monitor animated showpiece performance

5. **Admin Dashboard** — Manage portfolio content
   - Create `/app/admin` with authentication
   - Real-time content updates

6. **Dark Mode** — Toggle theme system
   - Add React Context for theme state
   - Persist preference to localStorage

7. **Animations** — Enhance interactive elements
   - Add Framer Motion for complex animations
   - Gesture support for mobile

## Building & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

Your site will auto-deploy on every push to main!

### Environment Variables

Create `.env.local` for secrets (never commit):
```
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Linting & Type Checking

```bash
npm run lint         # Run ESLint
npm run build        # Full TypeScript check
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- **Image Optimization** — Use Next.js `<Image>` component
- **Code Splitting** — Automatic with dynamic imports
- **Caching** — Leverage Next.js built-in caching strategies
- **Monitoring** — Use Vercel Analytics for insights

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build fails with missing modules?**
```bash
npm install
npm run build
```

**TypeScript errors?**
```bash
npm run lint
```

## License

This project is open source and available under the MIT License.

## Support & Questions

For issues or questions:
- Check [Next.js docs](https://nextjs.org/docs)
- Review component code for examples
- Refer to Tailwind CSS documentation for styling

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
