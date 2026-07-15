# Development Guide

> Version: v1.0
>
> Last Update: 2026-07
>
> This document describes the complete development workflow for the HelloWorld project, including environment setup, coding practices, build verification, deployment, and troubleshooting.

---

# 1. Development Environment

## Requirements

Recommended versions:

| Software | Version |
|----------|----------|
| Node.js | 20+ |
| npm | Latest |
| Git | Latest |
| VS Code | Recommended |

---

## Clone Repository

```bash
git clone https://github.com/glenman/hello-world-landing.git
```

Enter project

```bash
cd hello-world-landing
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 2. Build Project

Always verify before committing.

```bash
npm run build
```

Expected result:

```text
Compiled successfully

Generating static pages

Route (app)

○ /
```

No errors should remain.

---

# 3. Local Development Workflow

Recommended workflow:

```text
Plan Feature

↓

Create Data

↓

Build Component

↓

Responsive Layout

↓

Build

↓

Commit

↓

Push

↓

GitHub Actions

↓

GitHub Pages Verification
```

---

# 4. Project Structure

```
app/

components/
    common/
    home/
    layout/

constants/

docs/

lib/

public/images/
```

Each directory has a clear responsibility.

| Folder | Purpose |
|----------|----------|
| app | Next.js App Router |
| components | UI Components |
| constants | Static Data |
| lib | Shared Configuration & Utilities |
| public | Static Assets |
| docs | Project Documentation |

---

# 5. Adding a New Section

Example:

Adding

```
Stats
```

Recommended process:

### Step 1

Create data

```
constants/stats.ts
```

---

### Step 2

Create component

```
components/home/Stats.tsx
```

---

### Step 3

Import into

```
app/page.tsx
```

---

### Step 4

Verify responsive layout.

---

### Step 5

Run

```bash
npm run build
```

---

### Step 6

Commit

```bash
git add .

git commit -m "feat: add stats section"
```

---

# 6. Static Assets

Images belong to:

```
public/images/
```

Example:

```
hero.webp

about.webp

showcase.webp
```

Preferred format:

```
WebP
```

---

# 7. GitHub Pages

Repository

```
hello-world-landing
```

All images must use:

```ts
BASE_PATH
```

Correct:

```ts
`${BASE_PATH}/images/hero.webp`
```

Avoid:

```ts
"/hello-world-landing/images/hero.webp"
```

Never hardcode repository names.

---

# 8. Global Configuration

Global configuration belongs to:

```
lib/site.ts
```

Example:

```ts
export const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/hello-world-landing"
    : "";
```

Future configuration may include:

- Site Name
- Description
- GitHub URL
- Social Links
- SEO Metadata

---

# 9. Coding Standards

Use:

- TypeScript
- Functional Components
- Tailwind CSS

Avoid:

- `any`
- Duplicate logic
- Large components
- Hardcoded configuration

---

# 10. Component Development

Recommended size:

| Component | Recommended |
|-----------|-------------|
| Small | <100 lines |
| Medium | <200 lines |

If larger, split into reusable components.

---

# 11. Responsive Design

Every page should support:

- Mobile
- Tablet
- Desktop

Tailwind breakpoints:

```
sm

md

lg

xl

2xl
```

Always test layouts across different screen sizes.

---

# 12. Build Verification

Before every commit:

```bash
npm run build
```

Verify:

- No TypeScript errors
- No import errors
- No build warnings
- GitHub Pages compatibility

---

# 13. Deployment

Deployment pipeline:

```text
Local

↓

Git Commit

↓

Git Push

↓

GitHub

↓

GitHub Actions

↓

Next Build

↓

Static Export

↓

GitHub Pages
```

Deployment should complete successfully before considering a feature finished.

---

# 14. Documentation Workflow

When adding new functionality, update documentation if applicable.

Possible documents:

```
PROJECT_SPEC.md

ROADMAP.md

CHANGELOG.md

AI_CONTEXT.md
```

Documentation is part of development.

---

# 15. Troubleshooting

## Images not displayed

Check:

- Image exists under `public/images`
- Correct file extension
- Correct `BASE_PATH`
- GitHub Pages deployment completed

---

## Build failed

Run:

```bash
npm run build
```

Review:

- TypeScript errors
- Import paths
- Missing files
- Syntax errors

---

## Module not found

Check:

- Import path
- File name
- Folder location
- Case sensitivity

---

## GitHub Pages deployment failed

Verify:

- GitHub Actions completed successfully
- Build generated static pages
- Repository settings point to GitHub Pages

---

# 16. Recommended Development Order

Current priority:

```
Stats
```

↓

```
Features Upgrade
```

↓

```
About
```

↓

```
Showcase
```

↓

```
CTA
```

↓

```
Footer
```

---

# 17. Quality Checklist

Before considering a feature complete:

- [ ] Component implemented
- [ ] Responsive verified
- [ ] `npm run build` passed
- [ ] GitHub Pages compatible
- [ ] Documentation updated
- [ ] Code follows project structure

---

# 18. Useful Commands

Start development:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Lint (if enabled):

```bash
npm run lint
```

Git status:

```bash
git status
```

Push changes:

```bash
git push
```

---

# 19. References

Project documents:

```
README.md

docs/PROJECT_SPEC.md

docs/UI_GUIDELINES.md

docs/ROADMAP.md

docs/AI_CONTEXT.md

docs/CONTRIBUTING.md

docs/CHANGELOG.md
```

Read these documents before making significant changes.

---

# Development Principles

The HelloWorld project values:

- Consistency
- Simplicity
- Maintainability
- Reusability
- Scalability
- Engineering Quality

Every feature should improve the project without increasing unnecessary complexity.

## Component Development Principle

Every new page should follow:

Page

↓

Section

↓

UI Component

↓

Data

↓

Types

Avoid duplicated Tailwind styles.

Prefer reusable UI components.