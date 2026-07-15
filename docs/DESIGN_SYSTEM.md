# HelloWorld Design System

> Design System Documentation
>
> Version: v0.2.0
> Last Updated: 2026-07

***

# Overview

The HelloWorld Design System defines the reusable UI foundation for the entire project.

Its purpose is to provide:

- Consistent visual language
- Reusable UI components
- Unified design tokens
- Predictable development experience
- Scalable architecture

Every page should be built using this Design System.

***

# Core Principles

## Consistency

Every component should follow the same visual language.

Examples

- Border Radius
- Typography
- Colors
- Shadows
- Glass Effects
- Animations

***

## Reusability

If a UI pattern appears more than once,
it should become a reusable component.

Bad

```tsx
<button className="rounded-full bg-indigo-600 px-8 py-4">
```

Good

```tsx
<Button variant="primary">
    Start
</Button>
```

***

## Simplicity

Small components.

Single responsibility.

Easy to understand.

***

## Scalability

Design should support:

Landing

↓

Wiki

↓

Blog

↓

Dashboard

↓

CMS

↓

AI Platform

without redesigning the UI foundation.

***

# Design Architecture

```text
Page

↓

Section

↓

UI Components

↓

Design Tokens

↓

Tailwind CSS
```

Never skip the UI layer.

***

# UI Component Library

Location

```text
components/ui/
```

Current Components

```text
Button
Badge
Card
Container
Section
Heading
GradientText
GlassPanel
Glow
```

Future Components

```text
Avatar
Icon
Input
Textarea
Select
Tabs
Dialog
Drawer
Tooltip
Popover
Breadcrumb
Pagination
Timeline
Accordion
CodeBlock
```

***

# Component Hierarchy

```text
Page

↓

Hero

↓

Button

↓

Icon
```

Example

```tsx
<Hero>

    <Heading />

    <GradientText />

    <Button />

</Hero>
```

***

# Design Tokens

All visual values should come from reusable tokens.

***

## Colors

Primary

```text
Indigo
```

Secondary

```text
Blue
```

Accent

```text
Cyan
```

Neutral

```text
Slate
```

Background

```text
Slate-950
```

***

## Typography

Hero

```text
text-7xl
font-black
```

Section Title

```text
text-5xl
font-bold
```

Card Title

```text
text-xl
font-semibold
```

Body

```text
text-base
leading-7
```

Caption

```text
text-sm
```

***

## Border Radius

Small

```text
rounded-lg
```

Medium

```text
rounded-xl
```

Large

```text
rounded-2xl
```

Extra Large

```text
rounded-3xl
```

***

## Spacing

Section

```text
py-24
```

Container

```text
px-6
```

Card

```text
p-8
```

Gap

```text
gap-8
```

***

# Glass Morphism

The primary visual style of HelloWorld.

Standard

```text
bg-white/5

backdrop-blur-xl

border-white/10
```

Hover

```text
bg-white/10
```

Glow

```text
Indigo

Blue

Cyan
```

***

# Layout System

Container Width

```text
max-w-[1440px]
```

Content Width

```text
max-w-3xl
```

Card Grid

```text
grid

gap-8
```

***

# Buttons

Primary

```tsx
<Button variant="primary" />
```

Secondary

```tsx
<Button variant="secondary" />
```

Outline

```tsx
<Button variant="outline" />
```

Ghost

```tsx
<Button variant="ghost" />
```

Danger

```tsx
<Button variant="danger" />
```

Future

```tsx
<Button loading />

<Button disabled />

<Button icon />
```

***

# Cards

Default

```tsx
<Card>
```

Glass

```tsx
<GlassPanel>
```

Interactive

```tsx
<Card hover>
```

***

# Heading

Example

```tsx
<Heading
    title="Welcome"
    subtitle="To The Future"
/>
```

***

# Section

Every page section should use

```tsx
<Section>

    <Container>

        ...

    </Container>

</Section>
```

instead of manually writing spacing repeatedly.

***

# Icons

Preferred

Lucide React

Rules

- Outline icons
- 24px
- Consistent stroke width

***

# Animation

Motion should be subtle.

Examples

Hover

```text
TranslateY

Scale

Opacity
```

Page

```text
Fade In
```

Cards

```text
Lift
```

Buttons

```text
Scale
```

Avoid excessive animation.

***

# Responsive Design

Mobile First.

Breakpoints

```text
sm

md

lg

xl

2xl
```

Every component should support responsive layouts.

***

# Accessibility

Buttons

Keyboard Accessible

Focus Visible

ARIA Labels

Semantic HTML

Color Contrast

Reduced Motion

Accessibility is required.

***

# Naming Convention

Component

```text
Button.tsx
```

Hook

```text
useScroll.ts
```

Data

```text
navigation.ts
```

Types

```text
feature.ts
```

Constants

```text
colors.ts
```

***

# Development Rules

Do

✅ Reuse components

✅ Reuse tokens

✅ Keep components small

✅ Keep props simple

✅ Prefer composition

Don't

❌ Duplicate Tailwind classes

❌ Hardcode colors repeatedly

❌ Mix business logic into UI

❌ Build huge components

***

# Future Evolution

v0.2

UI Library

↓

v0.3

Advanced Components

↓

v0.4

Theme System

↓

v0.5

Dark Mode

↓

v1.0

Complete Design System

***

# Related Documents

- ARCHITECTURE.md
- UI\_GUIDELINES.md
- DEVELOPMENT.md
- ROADMAP.md
- README.md

***

# Philosophy

> Design once.
>
> Build consistently.
>
> Scale infinitely.

## Design System Checklist

| Component    | Status | Used By                     |
| ------------ | :----: | --------------------------- |
| Button       |    ✅   | Hero / Navbar / CTA         |
| Container    |    ⬜   | All Sections                |
| Section      |    ⬜   | All Sections                |
| Card         |    ⬜   | Features / Stats / Showcase |
| Heading      |    ⬜   | All Sections                |
| Badge        |    ⬜   | Hero / Features / Stats     |
| GradientText |    ⬜   | Hero / CTA                  |
| GlassPanel   |    ⬜   | Hero / Stats / Showcase     |
| Glow         |    ⬜   | Hero / Showcase             |

