# HelloWorld Architecture

> Project Architecture Documentation
>
> Version: v0.2.0
> Last Updated: 2026-07

***

# Overview

HelloWorld adopts a layered architecture based on **Next.js App Router**, following the principles of:

- Component-Driven Development
- Design System First
- Separation of Concerns
- Reusability
- Scalability

The project is designed to evolve from a landing page into a complete product platform.

***

# Architecture Overview

```text
                           User
                             │
                             ▼
                     Next.js App Router
                             │
               ┌─────────────┴─────────────┐
               │                           │
               ▼                           ▼
            Pages                     Layout
               │
               ▼
           Sections
               │
               ▼
        Reusable UI Components
               │
        ┌──────┴─────────┐
        ▼                ▼
      Data            Business Logic
        │                │
        ▼                ▼
      Types         Constants / Hooks
```

***

# Directory Structure

```text
HelloWorld
│
├── app/                 # Next.js App Router
│
├── components/          # React Components
│   ├── home/
│   ├── layout/
│   ├── ui/
│   └── wiki/
│
├── data/                # Static Data
│
├── hooks/               # Custom Hooks
│
├── lib/                 # Utilities / Config
│
├── types/               # Type Definitions
│
├── constants/           # Global Constants
│
├── docs/                # Documentation
│
├── public/              # Static Assets
│
└── styles/              # Global Styles
```

***

# Layer Responsibilities

## 1. App Layer

Location

```text
app/
```

Responsibility

- Routing
- Page Composition
- Layout

Contains

- page.tsx
- layout.tsx

Rule

> Never place business logic here.

***

## 2. Section Layer

Location

```text
components/home/
```

Responsibility

Each file represents an independent section of a page.

Example

```text
Hero

Features

Stats

Showcase

CTA

Footer
```

Rules

- One component = One section
- No duplicated UI
- Reuse UI components whenever possible

***

## 3. UI Layer

Location

```text
components/ui/
```

Responsibility

Reusable design system components.

Examples

```text
Button

Card

Container

Section

Badge

Heading

GradientText

GlassPanel

Glow
```

Rules

- Generic
- Reusable
- Stateless whenever possible

***

## 4. Data Layer

Location

```text
data/
```

Responsibility

Store page content separately from UI.

Examples

```text
navigation.ts

features.ts

stats.ts

social.ts
```

Rules

Components should consume data instead of defining it internally.

***

## 5. Type Layer

Location

```text
types/
```

Responsibility

Shared TypeScript interfaces.

Example

```typescript
export interface Feature {
  title: string;
  description: string;
  icon: string;
}
```

Rules

No implementation.

Only type definitions.

***

## 6. Business Layer

Location

```text
lib/
```

Responsibility

Reusable utilities and application logic.

Examples

```text
site.ts

utils.ts

api.ts
```

Rules

No UI.

No JSX.

***

## 7. Constants Layer

Location

```text
constants/
```

Responsibility

Project-wide configuration.

Examples

```text
colors.ts

spacing.ts

radius.ts

animation.ts
```

***

## 8. Hooks Layer

Location

```text
hooks/
```

Responsibility

Reusable React Hooks.

Examples

```text
useScroll()

useTheme()

useBreakpoint()
```

***

# Component Hierarchy

```text
Page

↓

Section

↓

UI Components

↓

Data

↓

Types
```

Example

```text
Home

↓

Hero

↓

Button

↓

Button Props

↓

Button Variant
```

***

# Design Principles

## Separation of Concerns

UI

↓

Data

↓

Business Logic

***

## Reusability

Every component should be reusable.

Avoid duplicated Tailwind classes.

***

## Single Responsibility

Each component should have only one responsibility.

***

## Component Driven

Build UI from small reusable components.

***

## Design System First

All pages should be built using the shared UI library.

Avoid writing raw Tailwind classes repeatedly.

***

# Development Workflow

```text
Requirement

↓

Design

↓

Section

↓

UI Component

↓

Data

↓

Types

↓

Testing

↓

Documentation

↓

Release
```

***

# Future Architecture

Current

```text
Landing Page
```

↓

Next

```text
Wiki

Blog

Documentation
```

↓

Future

```text
Dashboard

CMS

AI

Open Platform
```

***

# Version Evolution

| Version | Architecture            |
| :------ | :---------------------- |
| v0.1.x  | Landing Page Foundation |
| v0.2.x  | Design System           |
| v0.3.x  | Content Platform        |
| v0.4.x  | Dashboard               |
| v1.0    | Open Platform           |

***

# Related Documents

- README.md
- ROADMAP.md
- DEVELOPMENT.md
- UI\_GUIDELINES.md
- DESIGN\_SYSTEM.md
- AI\_CONTEXT.md
- RELEASE\_PLAN.md
- CHANGELOG.md

***

# Architecture Decision Records

See:

```text
docs/decisions/
```

All major architecture changes should be documented as ADRs.

***

# Philosophy

> Build once.
>
> Reuse everywhere.
>
> Scale continuously.

