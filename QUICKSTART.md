# Quick Start Guide

Get your SenseiSec blog up and running in minutes!

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, and Tailwind CSS.

### Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: View Your Site

You should see the homepage with 3 sample articles:
- Welcome to SenseiSec
- Buffer Overflow Exploit Example
- Essential CTF Tips for Beginners

## Adding Your First Article

### Create a New Markdown File

Create a file in `content/articles/` called `my-first-article.md`:

```markdown
---
title: My First Cybersecurity Article
date: 2024-03-01
category: Writeup
description: A beginner's guide to understanding security vulnerabilities
---

# My First Article

Write your content here in **Markdown** format!

You can include:
- Lists
- **Bold** and *italic* text
- `Code snippets`
- [Links](https://example.com)
```

### View Your Article

The article will automatically appear on the homepage. Click it to view the full article.

## Customizing Your Blog

### Change Site Name

Edit `app/page.tsx` and change:
```tsx
<h1 className="text-6xl font-bold mb-6 gradient-text">
  SenseiSec  {/* Change this */}
</h1>
```

### Change Colors

Edit `tailwind.config.js` and modify the cyber colors:
```javascript
colors: {
  'cyber-blue': '#00D9FF',    // Change these
  'cyber-green': '#00FF88',   // to your
  'cyber-purple': '#B026FF',  // preferred colors
}
```

### Change Metadata

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
}
```

## Building for Production

### Create Static Site

```bash
npm run build
```

This creates a static site in the `out/` directory.

### Deploy

Upload the contents of the `out/` directory to your hosting service:
- **Netlify** - Drag and drop the `out` folder
- **Vercel** - Import the Git repository
- **GitHub Pages** - Push to gh-pages branch
- **Any static host** - Upload the `out` folder

## Project Structure

```
SenseiSec/
├── app/                    # Next.js app
│   ├── articles/          # Article pages
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Layout
├── content/
│   └── articles/          # Your markdown files go here
├── public/                # Static assets (images, etc.)
└── lib/                   # Utilities
```

## Tips

1. **Keep articles organized** - Use descriptive filenames
2. **Categories** - Choose from: Writeup, Tutorial, Research, Analysis, Tool, General
3. **Dates** - Use YYYY-MM-DD format
4. **Descriptions** - Keep them brief (1-2 sentences)
5. **Code blocks** - Use triple backticks with language names

## Need Help?

- Check [README.md](README.md) for detailed documentation
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for article guidelines
- Review the sample articles in `content/articles/` for examples

Happy blogging! 🚀





