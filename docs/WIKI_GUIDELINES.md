# Wiki Guidelines

> Version: v1.0
>
> Last Update: 2026-07
>
> This document defines the writing standards, structure rules, and maintenance principles for the HelloWorld Wiki.

***

# 1. Purpose

HelloWorld Wiki is designed as a long-term knowledge base.

The purpose is to document:

- Project architecture
- Development practices
- Design decisions
- Component usage
- Deployment knowledge
- Troubleshooting solutions

The Wiki is not only documentation for developers, but also a knowledge source for AI-assisted development.

***

# 2. Wiki Principles

All Wiki content should follow:

## Clear

Information should be easy to understand.

***

## Structured

Content should have predictable organization.

***

## Practical

Documents should solve real development problems.

***

## Maintainable

Avoid duplicated or outdated information.

***

## AI Friendly

Content should be easy for AI systems to understand and retrieve.

***

# 3. Document Structure

Each Wiki page should follow this structure:

```markdown
# Title

> Brief description

---

# Overview

Explain the purpose.

---

# Main Content

Detailed explanation.

---

# Examples

Code or usage examples.

---

# Related Documents

Links to related pages.
```

***

# 4. Naming Convention

File names:

Use:

```
lowercase-with-dashes.md
```

Examples:

```
getting-started.md

component-architecture.md

github-pages-deployment.md
```

Avoid:

```
GettingStarted.md

Wiki_Test.md
```

***

# 5. Writing Style

Use:

- Short paragraphs
- Clear headings
- Examples
- Code blocks
- Diagrams when useful

Avoid:

- Long unstructured text
- Personal notes
- Temporary debugging logs

***

# 6. Markdown Rules

## Headings

Use:

```markdown
# Main Title

## Section

### Sub Section
```

Do not skip heading levels.

***

## Code Blocks

Always specify language.

Example:

```typescript
export const siteConfig = {};
```

***

## Images

Images should be stored in:

```
public/images/wiki/
```

Naming:

```
architecture.png

component-tree.png
```

***

# 7. Code Examples

Code examples should:

- Be complete
- Be readable
- Match current project architecture

Avoid outdated examples.

***

# 8. Architecture Documentation

Architecture documents should explain:

## What

The system contains.

## Why

The design decision exists.

## How

The implementation works.

Example:

Bad:

```
We use BASE_PATH.
```

Good:

```
The project uses BASE_PATH because GitHub Pages deploys under a repository sub-path.
```

***

# 9. Component Documentation

Each component documentation should include:

## Purpose

Example:

```
Hero provides the landing page first-screen experience.
```

***

## Location

Example:

```
components/home/Hero.tsx
```

***

## Usage

Example:

```tsx
<Hero />
```

***

## Dependencies

Example:

```
lib/site.ts

public/images/hero.webp
```

***

# 10. Deployment Documentation

Deployment documents should include:

- Environment
- Build process
- Configuration
- Common issues

Example:

```
GitHub Actions

↓

Next Build

↓

GitHub Pages
```

***

# 11. Troubleshooting Documentation

Each problem should contain:

## Problem

What happened.

***

## Cause

Why it happened.

***

## Solution

How to fix it.

Example:

```
Problem:

Image missing after GitHub Pages deployment.


Cause:

Incorrect asset path.


Solution:

Use BASE_PATH.
```

***

# 12. Version Management

When important changes happen:

Update:

```
CHANGELOG.md
```

If architecture changes:

Update:

```
docs/decisions/
```

***

# 13. AI Collaboration Rules

AI assistants should use Wiki as a knowledge source.

Before generating code:

Review:

```
Architecture

Components

Design Rules

Deployment Rules
```

AI should prefer existing Wiki knowledge over creating new patterns.

***

# 14. Wiki Maintenance

Regular maintenance:

Remove:

- Outdated information
- Duplicate content
- Broken examples

Update:

- Architecture changes
- New components
- New workflows

***

# 15. Future Extensions

The Wiki may support:

- Full text search
- MDX components
- Code highlighting
- AI assistant
- Versioned documentation
- Multi-language support

***

# Final Principle

The HelloWorld Wiki should become:

> A single source of truth for project knowledge.

