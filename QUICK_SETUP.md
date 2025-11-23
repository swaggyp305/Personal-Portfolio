# ⚡ Fastest Customization Guide (15 Minutes)

**Goal:** Get your personal info online ASAP!

## The 3-File Quick Personalization

### 1️⃣ Your Projects (src/data/projects.ts)

**Replace this:**
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A description of your first project and what you built.",
    tags: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/yourusername/project-one",
  },
  // ... more projects
]
```

**With this (your real projects):**
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Chat Application",
    description: "Real-time chat app built with Node.js and WebSockets",
    tags: ["Node.js", "WebSockets", "React"],
    github: "https://github.com/yourname/chat-app",
    link: "https://chat-app.com",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "Full-stack store with Stripe payments",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourname/ecommerce",
    link: "https://store.com",
  },
  // Add all your projects...
]
```

**⏱️ Time:** 5-10 minutes

---

### 2️⃣ Your Information (src/app/about/page.tsx)

**Find these sections and replace with your info:**

**Section 1: Who are you?** (Around line 18)
```typescript
// REPLACE THIS:
I'm a passionate developer with a love for building beautiful and
functional web applications. I enjoy working across the full stack and
constantly learning new technologies.

// WITH THIS:
Your actual bio - 2-3 sentences about who you are and what you do
```

**Section 2: What do you do?** (Around line 25)
```typescript
// REPLACE THIS:
I specialize in modern web development, from frontend design and
implementation to backend architecture. I'm experienced with React,
Next.js, TypeScript, and various backend technologies.

// WITH THIS:
Your actual specialties and what makes you unique
```

**Section 3: Your Skills** (Around line 35)
```typescript
// REPLACE THIS:
{[
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Python", "Full Stack Development",
].map((skill) => (

// WITH THIS:
{[
  "Your", "Skills", "Here", "In", "Any", "Order",
].map((skill) => (
```

**Section 4: Contact Info** (Around line 50)
```typescript
// REPLACE THIS:
<a href="mailto:your-email@example.com"

// WITH THIS:
<a href="mailto:your-real-email@example.com"

// AND REPLACE:
href="https://linkedin.com"

// WITH THIS:
href="https://linkedin.com/in/your-profile"
```

**⏱️ Time:** 3-5 minutes

---

### 3️⃣ Your Name Everywhere (4 Quick Edits)

#### Edit 1: Header Logo (src/components/header.tsx, line 12)
```typescript
// CHANGE FROM:
<Link href="/" className="text-2xl font-bold text-slate-900">
  Portfolio
</Link>

// TO:
<Link href="/" className="text-2xl font-bold text-slate-900">
  Your Name
</Link>
```

#### Edit 2: Footer Copyright (src/components/footer.tsx, line 24)
```typescript
// CHANGE FROM:
© {currentYear} Your Name. All rights reserved.

// TO:
© {currentYear} Your Real Name. All rights reserved.
```

#### Edit 3: Footer Email (src/components/footer.tsx, line 14)
```typescript
// CHANGE FROM:
href="mailto:your-email@example.com"

// TO:
href="mailto:your-real-email@example.com"
```

#### Edit 4: Metadata (src/app/layout.tsx, line 6)
```typescript
// CHANGE FROM:
title: "My Portfolio",
description: "Personal portfolio showcasing my projects and work",

// TO:
title: "Your Name | Portfolio",
description: "Your actual portfolio description (good for Google!)",
```

**⏱️ Time:** 2-3 minutes

---

## Done! 🎉

**Total time: 15 minutes**

### What to do next:

1. **Open browser:** http://localhost:3000
2. **Check your site:** Does it look like YOU?
3. **Test mobile:** Open on your phone
4. **Deploy:** When ready, run:
   ```bash
   git push origin main
   # Deploy on Vercel.com
   ```

---

## Bonus: Quick Color Change (5 minutes)

Want to match your personal brand?

**Find & Replace in VS Code:**
1. Press `Ctrl+H` (Find & Replace)
2. **Find:** `slate-900` → **Replace:** `blue-900` (or your color)
3. **Find:** `slate-600` → **Replace:** `blue-600`
4. **Find:** `slate-200` → **Replace:** `blue-200`
5. **Find:** `slate-50` → **Replace:** `blue-50`
6. Click "Replace All"

Colors available: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

---

## Really Quick Check

Before going live:

```
✅ Projects look right?
✅ Your name is everywhere?
✅ Email is correct?
✅ About page sounds like you?
✅ Mobile looks good?
✅ No typos?
```

If yes to all → **Deploy now!** 🚀

---

**Questions?** Check the full guides:
- `CUSTOMIZATION.md` — Detailed guide
- `README.md` — Full documentation
