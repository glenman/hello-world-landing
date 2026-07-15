# Contributing Guide

> Thank you for contributing to the **HelloWorld** project!
>
> This document describes the development workflow, coding standards, and collaboration guidelines to ensure the project remains maintainable, consistent, and scalable.

---

# Project Philosophy

HelloWorld is built around the following principles:

- Component First
- Reusable
- Maintainable
- Scalable
- Responsive First
- GitHub Pages Compatible

When contributing, always prioritize long-term maintainability over short-term implementation.

---

# Development Environment

## Requirements

- Node.js 20+
- npm
- Git
- VS Code (Recommended)

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

---

## Build

Before committing any code, always verify the project builds successfully.

```bash
npm run build
```

No TypeScript errors or build warnings should remain.

---

# Branch Strategy

The project follows a simplified Git workflow.

| Branch | Purpose |
|---------|----------|
| main | Stable branch |
| feature/* | New features |
| fix/* | Bug fixes |
| docs/* | Documentation |
| refactor/* | Refactoring |

Examples:

```text
feature/stats-section

feature/about-page

fix/navbar-layout

docs/update-roadmap

refactor/common-components
```

---

# Commit Convention

This project follows Conventional Commits.

Examples:

```text
feat: add stats section

fix: resolve hero background path

docs: update roadmap

style: improve navbar spacing

refactor: extract site configuration

perf: optimize hero image loading

chore: update dependencies
```

Commit messages should be:

- Short
- Clear
- Present tense

---

# Pull Request Checklist

Before creating a Pull Request, ensure:

- [ ] Project builds successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint warnings (if enabled)
- [ ] Responsive layout verified
- [ ] GitHub Pages compatibility maintained
- [ ] Documentation updated if necessary

---

# Project Structure

Contributors should follow the existing architecture.

```text
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

Do not introduce unnecessary folders.

---

# Component Guidelines

Each component should have a single responsibility.

Recommended size:

- Small components: <100 lines
- Medium components: <200 lines

If a component becomes too large, split it into smaller reusable components.

---

# Data Management

Avoid hardcoded repeated data.

Instead, place static data under:

```text
constants/
```

Example:

```ts
// constants/features.ts

export const features = [
  ...
];
```

Components should only render data.

---

# Configuration

Global configuration belongs in:

```text
lib/site.ts
```

Examples:

- Site Name
- Description
- Base Path
- GitHub URL

Do not duplicate configuration across multiple files.

---

# Styling Guidelines

Use Tailwind CSS as the primary styling solution.

Avoid:

- Large CSS files
- Inline styles (unless necessary)
- Duplicate utility classes

Follow the rules described in:

```text
docs/UI_GUIDELINES.md
```

---

# Responsive Design

Every UI change should support:

- Mobile
- Tablet
- Desktop

Use Tailwind responsive breakpoints:

```text
sm

md

lg

xl

2xl
```

Desktop-only implementations are not acceptable.

---

# GitHub Pages Compatibility

This project is deployed to GitHub Pages.

All static assets must use:

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

Never hardcode repository paths.

---

# File Naming

Components

```text
PascalCase
```

Example:

```text
Hero.tsx

Navbar.tsx

Footer.tsx
```

---

Variables

```text
camelCase
```

---

Constants

```text
UPPER_CASE
```

---

Folders

```text
lowercase
```

---

# Documentation

When adding new features, update documentation if necessary.

Possible documents include:

- PROJECT_SPEC.md
- ROADMAP.md
- CHANGELOG.md
- AI_CONTEXT.md

Documentation is considered part of the feature.

---

# Code Review Principles

Every contribution should be reviewed with the following questions:

- Is the code easy to understand?
- Can this component be reused?
- Is there duplicated logic?
- Is configuration centralized?
- Does it follow the existing architecture?
- Is it responsive?
- Is it GitHub Pages compatible?

---

# AI Collaboration

This project is designed to support AI-assisted development.

Before making significant changes, AI assistants should review:

```text
README.md
```

↓

```text
docs/PROJECT_SPEC.md
```

↓

```text
docs/UI_GUIDELINES.md
```

↓

```text
docs/ROADMAP.md
```

↓

```text
docs/AI_CONTEXT.md
```

Maintaining consistency is more important than introducing new patterns.

---

# Development Workflow

Recommended workflow:

```text
Plan

↓

Create Constants

↓

Build Component

↓

Responsive Adjustment

↓

Build Verification

↓

Update Documentation

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

# Project Quality Standards

Every contribution should strive to improve:

- Readability
- Reusability
- Maintainability
- Performance
- Accessibility
- Scalability

---

# Definition of Done (DoD)

A feature is considered complete only when all of the following conditions are met:

- [ ] Code has been implemented
- [ ] TypeScript compilation passes
- [ ] `npm run build` succeeds
- [ ] Responsive layout has been verified
- [ ] GitHub Pages works correctly
- [ ] No hardcoded paths or configuration
- [ ] Documentation has been updated if needed
- [ ] CHANGELOG.md has been updated (for user-visible changes)
- [ ] Code follows the existing architecture and UI guidelines

---

# Thank You

Thank you for helping improve HelloWorld.

Every contribution—whether code, documentation, design, or ideas—helps make this project a stronger and more maintainable modern web starter template.