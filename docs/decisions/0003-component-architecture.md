# ADR-0003: Component Architecture Strategy

Date:

2026-07

Status:

Accepted

---

# Context

Modern frontend applications require reusable and maintainable UI components.

Large page components become difficult to maintain.

---

# Decision

HelloWorld follows component-driven architecture.

Pages compose components.

Example:

```
Home Page

↓

Navbar

↓

Hero

↓

Stats

↓

Features

↓

Footer
```

---

# Component Rules

## Single Responsibility

Each component should have one clear purpose.

Example:

Good:

```
Hero.tsx
```

Responsible for:

- Hero layout
- Hero content

---

Bad:

```
Home.tsx

1000 lines
```

Contains:

- Navbar
- Hero
- Footer
- Data
- Styles

---

# Component Location

## Layout Components

```
components/layout
```

Examples:

```
Navbar

Footer
```

---

## Page Components

```
components/home
```

Examples:

```
Hero

Features

Stats
```

---

## Shared Components

```
components/common
```

Examples:

```
Button

Card

Container
```

---

# Data Separation

Components should not contain large static data.

Wrong:

```tsx
const features = [...]
```

Correct:

```
constants/features.ts
```

---

# Alternatives Considered

## Single Page Component

Rejected.

Reason:

- Difficult maintenance
- Poor reuse

---

## Class Components

Rejected.

Reason:

React functional components are preferred.

---

# Consequences

Positive:

- Reusable UI
- Easier testing
- Better AI understanding
- Easier collaboration

Negative:

- More files

---

# Related Documents

```
UI_GUIDELINES.md

DEVELOPMENT.md
```