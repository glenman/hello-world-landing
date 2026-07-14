# ADR-0004: Design System Strategy

Date:

2026-07

Status:

Accepted

---

# Context

HelloWorld aims to become a modern and scalable frontend starter template.

A consistent visual language is required to ensure that all pages and components maintain the same design quality.

Without a design system:

- Components may use inconsistent colors
- Spacing becomes unpredictable
- UI style becomes fragmented
- Future development becomes slower

---

# Decision

HelloWorld adopts a lightweight custom Design System based on:

- Tailwind CSS
- Design Tokens
- Component Consistency
- Visual Language Guidelines

The complete design specification is maintained in:

```
docs/UI_GUIDELINES.md
```

---

# Design Philosophy

The HelloWorld design language follows:

```
Modern

+

Minimal

+

Technology Inspired

+

Elegant

+

Scalable
```

The goal is to create a futuristic but clean web experience.

---

# 1. Color System

## Primary Colors

The main brand colors are:

```
Indigo

Blue

Cyan
```

Usage:

- Primary actions
- Gradient effects
- Highlight elements


Example:

```css
bg-indigo-600

from-indigo-400

to-cyan-300
```

---

## Background Colors

Main background:

```
Slate / Dark
```

Example:

```css
bg-slate-950
```

Purpose:

- Create depth
- Highlight content
- Support glowing effects

---

# 2. Gradient System

Gradients are part of the brand identity.

Common pattern:

```
Indigo

↓

Blue

↓

Cyan
```

Example:

```tsx
bg-gradient-to-r
from-indigo-400
via-blue-400
to-cyan-300
```

Usage:

- Hero title
- Important highlights
- CTA elements

Avoid excessive gradients.

---

# 3. Typography System

Typography hierarchy:

```
Hero Title

↓

Section Title

↓

Body Text

↓

Description
```

---

## Hero Title

Characteristics:

- Large
- Bold
- High contrast

Example:

```text
text-5xl

md:text-7xl

font-bold
```

---

## Body Text

Characteristics:

- Comfortable reading
- Lower contrast

Example:

```text
text-white/70
```

---

# 4. Spacing System

Spacing follows Tailwind spacing scale.

Preferred values:

```
4

6

8

10

12

16
```

Avoid random values.

Example:

Good:

```tsx
mt-8

px-6

gap-10
```

Avoid:

```css
margin:37px;
```

---

# 5. Border Radius

HelloWorld uses rounded UI style.

Preferred:

```
rounded-xl

rounded-2xl

rounded-full
```

Usage:

| Component | Radius |
|-|-|
| Button | rounded-full |
| Card | rounded-2xl |
| Container | rounded-xl |

---

# 6. Glass Effect

Glassmorphism is part of the visual language.

Pattern:

```
Transparent Background

+

Blur

+

Border
```

Example:

```tsx
bg-white/10

backdrop-blur

border-white/20
```

Used for:

- Navigation
- Cards
- Floating panels

---

# 7. Glow Effect

Soft lighting effects create depth.

Example:

```tsx
blur-3xl

bg-indigo-500/30
```

Usage:

- Hero background
- Feature cards
- Highlight sections

Avoid excessive usage.

---

# 8. Button System

Buttons follow consistent patterns.

## Primary Button

Example:

```tsx
bg-indigo-600

hover:bg-indigo-500
```

Usage:

Main action.

---

## Secondary Button

Example:

```tsx
border

border-white/30

hover:bg-white/10
```

Usage:

Secondary action.

---

# 9. Component Visual Rules

Every component should consider:

## Layout

- Alignment
- Spacing
- Responsive behavior


## Color

- Background
- Contrast
- Highlight


## Interaction

- Hover
- Transition
- Animation


## Accessibility

- Readable text
- Clear actions

---

# 10. Animation Guidelines

Animations should improve experience.

Preferred:

```
opacity

transform

scale

blur
```

Examples:

```tsx
transition

hover:scale-105
```

Avoid:

- Excessive motion
- Distracting effects
- Long animations

---

# 11. Responsive Design

Design system supports:

```
Mobile First

↓

Tablet

↓

Desktop
```

All components must work with:

```
sm

md

lg

xl

2xl
```

---

# 12. Component Consistency

Similar components must share:

- Same spacing
- Same colors
- Same interaction behavior

Example:

All CTA buttons should use the same button pattern.

---

# Alternatives Considered

## Using a UI Framework

Examples:

- Material UI
- Ant Design

Rejected.

Reasons:

- Less design freedom
- Harder to create unique visual identity

---

## Pure Custom CSS

Rejected.

Reasons:

- Difficult maintenance
- Less consistency

---

# Consequences

## Positive

- Unified visual language
- Faster development
- Easier component creation
- Better AI understanding
- Better scalability


## Negative

- Requires discipline
- New components need design consideration

---

# Related Documents

```
UI_GUIDELINES.md

DEVELOPMENT.md

0003-component-architecture.md
```

---

# Future Evolution

The Design System may evolve into:

```
Design Tokens

↓

Reusable UI Components

↓

Theme System

↓

Multi-brand Support
```

---

# Final Principle

> Design is not decoration.
>
> Design is a system that enables consistent product evolution.