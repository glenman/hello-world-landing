# ADR-0005: GitHub Actions Deployment Strategy

Date:

2026-07

Status:

Accepted

---

# Context

HelloWorld requires a reliable and automated deployment process.

The project is built with:

- Next.js 16
- TypeScript
- Tailwind CSS

The target deployment platform is:

```
GitHub Pages
```

GitHub Pages provides free static hosting, but it requires a build and deployment workflow.

Manual deployment would introduce:

- Human error
- Inconsistent releases
- Slow iteration

Therefore an automated CI/CD solution is required.

---

# Decision

HelloWorld uses:

```
GitHub Actions

+

Next.js Static Export

+

GitHub Pages
```

as the deployment strategy.

The workflow is:

```
Developer

↓

Git Commit

↓

Git Push

↓

GitHub Actions Trigger

↓

Install Dependencies

↓

Build Next.js Application

↓

Generate Static Files

↓

Deploy to GitHub Pages
```

---

# Deployment Architecture

```mermaid
flowchart LR

A[Developer]

B[GitHub Repository]

C[GitHub Actions]

D[npm install]

E[npm run build]

F[Static Export]

G[GitHub Pages]

A --> B

B --> C

C --> D

D --> E

E --> F

F --> G
```

---

# Why GitHub Pages?

## Advantages

### Free Hosting

GitHub Pages provides free static website hosting.

---

### Native GitHub Integration

Repository, source code, and deployment exist together.

---

### Simple Maintenance

No additional server management is required.

---

### Suitable for Landing Pages

HelloWorld is currently:

- Static
- Frontend focused
- Content driven

which matches GitHub Pages perfectly.

---

# Alternatives Considered

---

# Vercel

## Advantages

- Designed for Next.js
- Automatic deployment
- Server-side features

## Rejected For Now

Reasons:

- Requires external platform
- More suitable for dynamic applications
- GitHub Pages meets current requirements

---

# Netlify

## Advantages

- Strong frontend deployment
- Good CI/CD

## Rejected For Now

Reasons:

- Additional platform dependency

---

# Traditional Server Deployment

Example:

```
VPS

+

Nginx

+

Node.js
```

Rejected.

Reasons:

- Higher maintenance cost
- Not required for static landing page

---

# CI/CD Workflow

The deployment workflow should guarantee:

## Build Verification

Every push should verify:

```bash
npm run build
```

---

## Static Compatibility

Generated files must support:

```
GitHub Pages
```

---

## Asset Compatibility

Images and static resources must use:

```ts
BASE_PATH
```

Example:

```ts
`${BASE_PATH}/images/hero.webp`
```

---

# GitHub Actions Responsibilities

GitHub Actions handles:

## Environment Setup

Install:

- Node.js
- npm dependencies

---

## Build

Execute:

```bash
npm run build
```

---

## Deployment

Publish generated static files.

---

# Deployment Configuration

Important configuration:

## next.config.ts

Must support static export.

Example concept:

```ts
output: "export"
```

---

## Base Path

Configured through:

```
lib/site.ts
```

Example:

```ts
BASE_PATH
```

---

# Consequences

## Positive

- Fully automated deployment
- No manual upload
- Free hosting
- Version controlled deployment
- Easy rollback through Git history


## Negative

- Limited backend capability
- Static export restrictions
- Requires BASE_PATH handling

---

# Operational Rules

## Before Push

Always run:

```bash
npm run build
```

---

## After Deployment

Verify:

- Homepage loads
- Images display correctly
- Navigation works
- Mobile layout works

---

# Troubleshooting

---

## Images Missing

Possible causes:

- Incorrect asset path
- Missing BASE_PATH
- Wrong public directory location

Solution:

Use:

```ts
BASE_PATH
```

---

## Deployment Failed

Check:

1. GitHub Actions logs
2. Build errors
3. Next.js configuration
4. Repository Pages settings

---

# Future Evolution

Possible future deployment upgrades:

```
GitHub Pages

↓

Vercel

↓

Cloud Platform
```

when the project requires:

- Server Components
- API Routes
- Database
- Authentication

---

# Related Documents

```
DEVELOPMENT.md

DEVELOPMENT_LIFECYCLE.md

0001-github-pages-base-path.md

PROJECT_SPEC.md
```

---

# Final Principle

> Deployment should be automated, repeatable, and predictable.

HelloWorld treats deployment as part of engineering, not a manual operation.