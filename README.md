# SenseiSec - Cybersecurity Blog

A modern, static website for cybersecurity articles, writeups, and technical insights. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Dark UI** - Cyberpunk-inspired design with gradient accents
- 📝 **Markdown Support** - Write articles in Markdown with frontmatter
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Static Site Generation** - Fast, optimized, and SEO-friendly
- 🚀 **Easy Deployment** - Deploy to any static hosting service
- 🔍 **Search & Navigation** - Easy to browse and find articles
- 💻 **Code Highlighting** - Syntax highlighting for code blocks

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The site will automatically reload when you make changes to files in the `content/articles/` directory.

### Building for Production

Generate a static site:

```bash
npm run build
```

This will create an `out/` directory containing your static website, ready to deploy anywhere.

## Adding Articles

### Quick Start

1. Create a new `.md` file in the `content/articles/` directory
2. Add frontmatter with metadata
3. Write your content in Markdown
4. The article will automatically appear on the site

### Example Article

Create `content/articles/my-article.md`:

```markdown
---
title: My Awesome Article
date: 2024-01-15
category: Writeup
description: This is an article about cybersecurity
---

# My Article Title

Your content here in **Markdown** format.
```

### Frontmatter Fields

- `title` (required) - The article title
- `date` (required) - Publication date (YYYY-MM-DD)
- `category` (required) - Article category (Writeup, Tutorial, Research, etc.)
- `description` (optional) - Brief description for the article card

## Project Structure

```
SenseiSec/
├── app/                    # Next.js app directory
│   ├── articles/          # Article pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── content/               # Article content
│   └── articles/          # Markdown files go here
├── lib/                   # Utilities
│   ├── posts.ts          # Post processing logic
│   └── utils.ts          # Helper functions
└── public/               # Static assets (images, etc.)
```

## Features

### Customizable Categories

Change categories by editing the frontmatter. Suggested categories:
- `Writeup` - CTF and vulnerability writeups
- `Tutorial` - How-to guides
- `Research` - Security research
- `Analysis` - Security analysis
- `Tool` - Tool reviews
- `General` - General topics

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in markdown:
   ```markdown
   ![Alt text](/images/my-image.png)
   ```

### Code Syntax Highlighting

Use fenced code blocks with language specification:

````markdown
```python
def hello():
    print("Hello, World!")
```
````

## Deployment

The static site can be deployed to any static hosting service:

### Netlify

1. Build the site: `npm run build`
2. Deploy the `out/` directory to Netlify

### Vercel

The project is configured for Vercel. Push to GitHub and import to Vercel.

### GitHub Pages

1. Build the site: `npm run build`
2. Push the `out/` directory to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Other Services

Just upload the contents of the `out/` directory to your hosting service.

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'cyber-blue': '#00D9FF',
  'cyber-green': '#00FF88',
  'cyber-purple': '#B026FF',
}
```

### Modifying Layout

Edit files in the `app/` directory:
- `app/page.tsx` - Homepage layout
- `app/layout.tsx` - Global layout and metadata
- `app/globals.css` - Global styles

## Documentation

For detailed information about adding articles, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is open source and available under the MIT License.

