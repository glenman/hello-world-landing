# Wiki Structure

> Version: v1.0
>
> Last Update: 2026-07
>
> This document defines the information architecture of the HelloWorld Wiki.

---

# 1. Overview

The HelloWorld Wiki is organized into several knowledge domains.

Structure:

```
Wiki

├── Getting Started

├── Architecture

├── Development

├── Components

├── Design System

├── Deployment

├── Troubleshooting

└── AI Development
```

---

# 2. Wiki Information Architecture

```
docs/wiki/

├── getting-started/

│
├── architecture/

│
├── development/

│
├── components/

│
├── design-system/

│
├── deployment/

│
├── troubleshooting/

└── ai-development/
```

---

# 3. Getting Started

Purpose:

Help new developers quickly understand the project.

Documents:

```
introduction.md

installation.md

project-tour.md
```

Contents:

- Project overview
- Environment setup
- First run

---

# 4. Architecture

Purpose:

Explain system design.

Documents:

```
overview.md

folder-structure.md

data-flow.md

deployment-architecture.md
```

Contents:

- Next.js architecture
- Component structure
- Configuration system

---

# 5. Development

Purpose:

Explain daily development workflow.

Documents:

```
workflow.md

coding-style.md

git-workflow.md
```

Contents:

- Branch strategy
- Commit rules
- Development lifecycle

---

# 6. Components

Purpose:

Document reusable UI components.

Structure:

```
components/

├── navbar.md

├── hero.md

├── features.md

├── stats.md

└── footer.md
```

Each document includes:

- Purpose
- Location
- Props
- Usage
- Examples

---

# 7. Design System

Purpose:

Maintain consistent UI.

Documents:

```
colors.md

typography.md

spacing.md

animation.md
```

References:

```
UI_GUIDELINES.md
```

---

# 8. Deployment

Purpose:

Document production deployment.

Documents:

```
github-pages.md

github-actions.md

environment.md
```

Contents:

- Build
- CI/CD
- Deployment issues

---

# 9. Troubleshooting

Purpose:

Record known problems.

Documents:

```
common-errors.md

build-errors.md

deployment-errors.md
```

Each issue:

```
Problem

↓

Cause

↓

Solution
```

---

# 10. AI Development

Purpose:

Support AI-assisted development.

Documents:

```
ai-workflow.md

prompt-guide.md

project-context.md
```

Contents:

- How AI understands project
- How to provide context
- How to maintain consistency

---

# 11. Future Wiki Features

Planned:

## Search

Full-text search.

---

## MDX

Interactive documentation.

---

## Versioning

Support multiple versions.

---

## AI Assistant

Natural language project knowledge query.

Example:

Question:

```
Why does Hero use BASE_PATH?
```

Answer:

```
Because GitHub Pages deploys under repository path.
```

---

# 12. Wiki Growth Strategy

Development stages:

## Stage 1

Markdown knowledge base

```
docs/wiki
```

---

## Stage 2

Next.js Wiki UI

```
/wiki
```

---

## Stage 3

Search System

---

## Stage 4

AI Knowledge Assistant

---

# Final Goal

The HelloWorld Wiki should become:

> A complete engineering knowledge system for modern web development.