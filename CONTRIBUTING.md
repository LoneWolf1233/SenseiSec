# Contributing Articles to SenseiSec

Thank you for your interest in contributing articles to the SenseiSec blog!

## How to Add an Article

### Step 1: Create a Markdown File

Create a new `.md` file in the `content/articles/` directory with a descriptive filename (use lowercase and hyphens, e.g., `my-awesome-exploit.md`).

### Step 2: Add Frontmatter

Each article needs metadata in the frontmatter section at the top:

```markdown
---
title: Your Article Title
date: 2024-01-01
category: Writeup
description: A brief description of your article
---
```

**Required fields:**
- `title`: The article title
- `date`: Publication date (YYYY-MM-DD format)
- `category`: Article category (Writeup, Research, Tutorial, etc.)
- `description`: Brief description for the article card (optional but recommended)

### Step 3: Write Your Content

Write your content using Markdown syntax:

#### Heading Structure

```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection (H3)
```

#### Code Blocks

````markdown
```language
Your code here
```
````

#### Lists

```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

#### Formatting

```markdown
**bold text**
*italic text*
`inline code`
```

#### Links

```markdown
[Link Text](https://example.com)
```

### Step 4: Build and Preview

Run the development server to preview your article:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your article.

### Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a static site in the `out/` directory.

## Tips for Writing

1. **Use clear headings** - Help readers navigate your content
2. **Include code examples** - Use proper syntax highlighting
3. **Add screenshots** - Put images in a `public/images/` directory and reference them
4. **Keep it organized** - Use consistent formatting and structure
5. **Proofread** - Check for typos and formatting errors

## Categories

Suggested categories:
- **Writeup** - CTF and vulnerability writeups
- **Research** - Original security research
- **Tutorial** - How-to guides and tutorials
- **Analysis** - Security analysis and reviews
- **Tool** - Tool reviews and tutorials
- **General** - General cybersecurity topics

## Questions?

Feel free to open an issue or contact the maintainer for help!





