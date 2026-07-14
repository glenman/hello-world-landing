# HelloWorld AI Context

> Version: v1.0
>
> Purpose:
>
> This document is written specifically for AI assistants to quickly understand the project context before continuing development.

---

# 1. Project Overview

Project Name

```
HelloWorld
```

Project Type

```
Modern Landing Page
```

Framework

```
Next.js 16
```

Language

```
TypeScript
```

UI

```
Tailwind CSS
```

Deployment

```
GitHub Pages
```

Repository

```
hello-world-landing
```

---

# 2. Project Goal

This project is NOT intended to be a demo.

The goal is to build a modern, maintainable, scalable landing page that follows enterprise-level frontend architecture.

The project should be treated as a long-term product template rather than a temporary showcase.

---

# 3. Development Philosophy

Every AI assistant should follow these principles.

## Keep Things Modular

Every section should be an independent component.

Example:

```
Hero

Stats

Features

About

Footer
```

Avoid creating giant components.

---

## Data Driven

Never hardcode repeated data inside components.

Static content belongs to:

```
constants/
```

Components should only render data.

---

## Configuration Driven

Global configuration belongs to:

```
lib/site.ts
```

Never duplicate:

- Site Name
- Base Path
- Repository
- GitHub URL

---

## Reusable Components

Always prefer existing components.

Future reusable components:

```
Button

Card

SectionTitle

Container
```

Avoid duplicated UI.

---

# 4. GitHub Pages

This project is deployed using GitHub Pages.

Repository Name

```
hello-world-landing
```

Therefore every static asset MUST use

```ts
BASE_PATH
```

Example

Correct

```ts
backgroundImage: `url('${BASE_PATH}/images/hero.webp')`
```

Wrong

```ts
url('/hello-world-landing/images/hero.webp')
```

Hardcoding is NOT allowed.

---

# 5. Current Project Structure

```
app/

components/

components/common/

components/home/

components/layout/

constants/

docs/

lib/

public/images/
```

This structure has already been created.

Do NOT reorganize folders unless absolutely necessary.

---

# 6. Current Completed Modules

Completed

```
Navbar

Hero
```

Partially Completed

```
Features
```

Waiting

```
Stats

About

Showcase

CTA

Footer
```

---

# 7. Current Documents

Existing

```
PROJECT_SPEC.md

UI_GUIDELINES.md

ROADMAP.md

AI_CONTEXT.md
```

Before continuing development, AI should read them in this order.

1.

```
PROJECT_SPEC.md
```

2.

```
UI_GUIDELINES.md
```

3.

```
ROADMAP.md
```

4.

```
AI_CONTEXT.md
```

---

# 8. Coding Style

Use

```
TypeScript
```

No

```
any
```

Use

```
Function Component
```

Prefer

```
export default
```

One component

One responsibility.

---

# 9. Naming Convention

Components

```
PascalCase
```

Example

```
Hero.tsx

Stats.tsx
```

Variables

```
camelCase
```

Constants

```
UPPER_CASE
```

Folders

```
lowercase
```

---

# 10. Styling Rules

Always use

```
Tailwind CSS
```

Avoid writing unnecessary CSS.

Primary Theme

```
Slate

Indigo

Cyan
```

Reference

```
UI_GUIDELINES.md
```

---

# 11. Design Direction

The project visual style should remain consistent.

Inspired by

- Apple
- Vercel
- Stripe
- Linear
- Framer
- OpenAI

Keywords

```
Modern

Minimal

Glass

Premium

Gradient

Blur

Technology
```

Avoid introducing conflicting styles.

---

# 12. Responsive Design

Every component should support

- Mobile

- Tablet

- Desktop

Do not only optimize for desktop.

---

# 13. Before Writing Code

Every AI should check

- Does a similar component already exist?

- Can this be extracted into a reusable component?

- Should the data be moved into constants?

- Should configuration be moved into lib/site.ts?

- Is it GitHub Pages compatible?

Only after answering these questions should coding begin.

---

# 14. Before Creating New Files

Do NOT create new files unless there is a clear architectural reason.

Prefer extending existing files.

Avoid duplicated logic.

---

# 15. Build Validation

Before considering a task complete:

Run

```
npm run build
```

Ensure

No TypeScript errors.

No Next.js errors.

No import errors.

GitHub Pages compatibility remains intact.

---

# 16. Commit Convention

Use Conventional Commits.

Examples

```
feat:

fix:

style:

docs:

refactor:

perf:

chore:
```

---

# 17. Known Technical Decisions

The following decisions have already been made.

✔ Next.js App Router

✔ TypeScript

✔ Tailwind CSS

✔ GitHub Actions Deployment

✔ GitHub Pages

✔ BASE_PATH configuration

✔ Modular Architecture

These decisions should not be changed without a strong reason.

---

# 18. Immediate Next Tasks

Current recommended order

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

# 19. AI Working Rules

When continuing development:

Do NOT rewrite existing modules without necessity.

Improve existing code instead.

Keep naming consistent.

Keep styling consistent.

Keep spacing consistent.

Keep architecture consistent.

---

# 20. AI Handoff

If another AI continues this project later, it should first understand:

- Current project status
- Existing architecture
- Current design language
- Current roadmap
- Existing coding style

The purpose is to ensure seamless continuation without requiring the user to repeatedly explain the project.

---

# Final Reminder

This project values:

Maintainability

Consistency

Scalability

Readability

Engineering Quality

over

quick implementation.

Always think like a software engineer rather than only a code generator.