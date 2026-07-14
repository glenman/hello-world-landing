# ADR-0007: AI Assisted Development Strategy

Date:

2026-07

Status:

Accepted

---

# Context

Modern software development is increasingly supported by AI assistants.

HelloWorld is designed not only for human developers, but also for AI-assisted development workflows.

As the project grows, AI needs to understand:

- Project goals
- Architecture decisions
- Coding conventions
- Development history
- Current roadmap

Without structured context:

- AI may generate inconsistent code
- Existing architecture may be ignored
- Duplicate solutions may be created
- Project quality may decrease over time

Therefore, AI collaboration must become part of the engineering strategy.

---

# Decision

HelloWorld adopts an AI-assisted development model.

AI is treated as:

```
Development Partner

+

Architecture Assistant

+

Knowledge Navigator

+

Code Generation Assistant
```

AI must follow existing project rules instead of introducing independent patterns.

---

# AI Development Principles

## 1. Context First

Before generating code, AI should understand:

```
Project Purpose

↓

Architecture

↓

Design Rules

↓

Current Roadmap

↓

Implementation Details
```

AI should not directly modify code without understanding the project structure.

---

# 2. Documentation as AI Context

The primary AI context sources are:

```
README.md

docs/PROJECT_SPEC.md

docs/UI_GUIDELINES.md

docs/ROADMAP.md

docs/AI_CONTEXT.md

docs/decisions/
```

These documents represent the project's knowledge foundation.

---

# 3. Architecture Consistency

AI-generated code must follow:

```
Existing Architecture

↓

Existing Patterns

↓

Existing Naming Rules

↓

Existing Components
```

AI should prefer:

```
Reuse

over

Create
```

---

# 4. AI Development Workflow

Recommended workflow:

```
Requirement

↓

AI Reads Context

↓

Architecture Discussion

↓

Implementation Plan

↓

Code Generation

↓

Human Review

↓

Build Verification

↓

Documentation Update
```

---

# AI Responsibility

AI can assist with:

## Code Generation

Examples:

- Components
- Utilities
- Configuration
- Documentation

---

## Code Review

AI can check:

- Architecture consistency
- Potential bugs
- Refactoring opportunities

---

## Documentation

AI can help maintain:

- README
- Wiki
- ADR
- CHANGELOG

---

## Knowledge Retrieval

AI can answer:

- Why was this design chosen?
- How does this component work?
- Where should new code be placed?

---

# Human Responsibility

AI does not replace engineering decisions.

Humans remain responsible for:

- Product direction
- Architecture approval
- Security decisions
- Final code acceptance

---

# AI Coding Rules

## Rule 1

Do not create new architecture without discussion.

---

## Rule 2

Do not duplicate existing functionality.

Before creating:

```
New Component
```

check:

```
components/

constants/

lib/
```

---

## Rule 3

Respect project conventions.

Follow:

```
CONTRIBUTING.md

DEVELOPMENT.md

UI_GUIDELINES.md
```

---

## Rule 4

Update Documentation

Important changes require updates:

```
CHANGELOG.md

ROADMAP.md

ADR
```

---

# AI Context Loading Order

When starting a new AI session:

Recommended reading order:

```
1. README.md

↓

2. PROJECT_SPEC.md

↓

3. AI_CONTEXT.md

↓

4. ROADMAP.md

↓

5. UI_GUIDELINES.md

↓

6. decisions/
```

---

# AI Prompt Template

Recommended initial prompt:

```
This is the HelloWorld project.

Please read:

README.md

docs/PROJECT_SPEC.md

docs/AI_CONTEXT.md

docs/ROADMAP.md

before making changes.

Follow existing architecture and coding standards.
```

---

# AI Knowledge Lifecycle

Project knowledge evolves:

```
New Decision

↓

ADR Update

↓

Documentation Update

↓

AI Context Update

↓

Future AI Sessions
```

---

# AI and Wiki Integration

Future direction:

```
Project Documentation

↓

Wiki Knowledge Base

↓

Embedding / Search

↓

AI Assistant

↓

Developer Question Answering
```

Example:

Question:

```
Why does Hero use BASE_PATH?
```

AI Answer:

```
Because the project is deployed under GitHub Pages repository path.
See ADR-0001.
```

---

# Alternatives Considered

## AI Without Documentation

Rejected.

Reasons:

- AI loses historical decisions
- Inconsistent implementations
- Repeated explanations

---

## AI Only As Code Generator

Rejected.

Reasons:

- Ignores architecture
- Limited long-term value

---

# Consequences

## Positive

- Faster development
- Better consistency
- Easier onboarding
- Long-term AI collaboration
- Knowledge preservation


## Negative

- Requires documentation discipline
- Requires human review

---

# Future Evolution

AI development may evolve into:

```
AI Assistant

↓

Project Knowledge Search

↓

AI Code Review

↓

AI Architecture Assistant

↓

Autonomous Development Workflow
```

---

# Related Documents

```
AI_CONTEXT.md

PROJECT_SPEC.md

DEVELOPMENT.md

WIKI_GUIDELINES.md

0006-documentation-system.md
```

---

# Final Principle

> AI should not replace engineering thinking.
>
> AI should amplify engineering capability.

HelloWorld is designed as a project where humans and AI collaborate through shared knowledge.