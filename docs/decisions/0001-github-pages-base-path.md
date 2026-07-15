# ADR-0001: GitHub Pages Base Path Strategy

Date:

2026-07

Status:

Accepted

---

# Context

HelloWorld is deployed using GitHub Pages.

Unlike traditional hosting, GitHub Pages serves projects under a repository path:

```
https://username.github.io/repository-name/
```

Therefore static resources cannot always use root paths.

Example:

Incorrect:

```text
/images/hero.webp
```

The browser will search:

```
https://username.github.io/images/hero.webp
```

which does not exist.

---

# Decision

The project uses a centralized BASE_PATH configuration.

Location:

```
lib/site.ts
```

Example:

```ts
export const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/hello-world-landing"
    : "";
```

All static resources must use:

```ts
`${BASE_PATH}/images/hero.webp`
```

---

# Alternatives Considered

## Hardcoded Repository Path

Example:

```ts
"/hello-world-landing/images/hero.webp"
```

Rejected.

Reasons:

- Cannot change repository name easily
- Environment coupling
- Difficult local development

---

## Absolute External URLs

Example:

```text
https://cdn.example.com/image.webp
```

Rejected.

Reasons:

- Requires external storage
- Additional dependency

---

# Consequences

Positive:

- GitHub Pages compatible
- Local development works
- Configuration centralized
- Future migration easier

Negative:

- Developers need to remember BASE_PATH

---

# Related Documents

```
DEVELOPMENT.md

PROJECT_SPEC.md
```