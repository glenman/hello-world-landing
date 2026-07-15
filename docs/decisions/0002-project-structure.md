# ADR-0002: Project Structure Organization

Date:

2026-07

Status:

Accepted

---

# Context

As HelloWorld grows, placing all code in a single directory would create maintenance problems.

A scalable frontend project requires clear separation of responsibility.

---

# Decision

The project uses the following structure:

```
app/

components/

constants/

lib/

public/

docs/
```

---

# Folder Responsibilities

## app

Purpose:

Next.js routing and pages.

Contains:

- Layout
- Pages
- Route handlers

---

## components

Purpose:

Reusable UI components.

Structure:

```
components/

├── common

├── home

└── layout
```

---

## constants

Purpose:

Static project data.

Examples:

- Navigation items
- Features
- Statistics

---

## lib

Purpose:

Shared configuration and utilities.

Examples:

- Site configuration
- Helper functions

---

## public

Purpose:

Static resources.

Examples:

```
images/

icons/

fonts/
```

---

## docs

Purpose:

Project knowledge.

Contains:

- Specifications
- Guidelines
- ADR
- Roadmap

---

# Alternatives Considered

## Everything in app/

Rejected.

Reason:

- Large files
- Poor reuse
- Difficult maintenance

---

## Components mixed with data

Rejected.

Reason:

- Data and UI become coupled

---

# Consequences

Positive:

- Clear ownership
- Easier scaling
- AI-friendly structure

Negative:

- More folders initially

---

# Related Documents

```
PROJECT_SPEC.md

DEVELOPMENT.md
```