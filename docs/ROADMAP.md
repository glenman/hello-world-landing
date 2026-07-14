# HelloWorld Development Roadmap

> Version: v1.0
>
> Last Update: 2026-07
>
> Status: 🚧 In Development

---

# Project Vision

HelloWorld 不只是一个 Landing Page。

目标是打造一个：

- Modern
- Responsive
- Component Driven
- Scalable
- Maintainable

现代化 Web 项目模板。

整个项目采用企业级开发方式，而不是 Demo 式开发。

---

# Current Tech Stack

## Framework

- Next.js 16 (App Router)

## Language

- TypeScript

## UI

- Tailwind CSS

## Runtime

- React 19

## Build

- Turbopack

## Deploy

- GitHub Pages

## CI/CD

- GitHub Actions

---

# Current Repository

GitHub Repository

```
hello-world-landing
```

Deployment

GitHub Pages

Base Path

```
/hello-world-landing
```

所有静态资源必须通过：

```ts
BASE_PATH
```

进行访问。

禁止硬编码：

```
/hello-world-landing/images/...
```

---

# Current Directory Structure

```
app/
components/
components/common/
components/home/
components/layout/
constants/
docs/
lib/
public/images/
```

目录已经创建完成。

后续开发应遵循该结构。

---

# Completed

## Infrastructure

- [x] Next.js Project
- [x] Git Repository
- [x] GitHub Repository
- [x] GitHub Actions
- [x] GitHub Pages
- [x] BASE_PATH Configuration

---

## Layout

- [x] Navbar

目前：

基础版本。

未来：

支持：

- Sticky
- Scroll Effect
- Mobile Menu

---

## Hero

已完成：

- Hero Background
- Gradient
- Glow Effect
- CTA
- Scroll Indicator
- GitHub Pages Compatible

后续：

增加：

- Hero Animation
- Mouse Effect
- Background Motion

---

# In Progress

## Features

目前：

基础版本。

下一步：

- 使用 constants/features.ts

- Card Hover

- Icon

- Responsive

---

# TODO

## Stats

优先级：

★★★★★

包括：

- 四个统计卡片

未来：

数字滚动动画

---

## About

左右布局：

```
Text

+

Image
```

---

## Showcase

展示项目。

支持：

- Image Card

未来：

Carousel

---

## CTA

行动号召。

包括：

- Title

- Description

- Button

---

## Footer

包括：

- Logo

- Navigation

- GitHub

- Copyright

---

# Future Versions

## v1.1

UI Upgrade

包括：

- Animation

- Better Hover

- Smooth Transition

- Reveal On Scroll

---

## v1.2

Engineering

包括：

- Common Components

- Utils

- Theme

- Constants

---

## v1.3

SEO

包括：

- Metadata

- Open Graph

- Sitemap

- robots.txt

- favicon

---

## v2.0

Advanced Features

包括：

- Blog

- CMS

- API

- Contact Form

- i18n

- Dark Mode

---

# Development Principles

开发必须遵循以下原则。

## Component First

一个组件：

负责一个功能。

---

## Data Driven

所有数据：

来自：

```
constants/
```

不要在组件内部维护静态数据。

---

## Configuration Driven

所有配置：

来自：

```
lib/site.ts
```

例如：

- BasePath

- SiteName

- GitHub

- Description

---

## Reusable

优先使用：

```
components/common
```

避免重复代码。

---

## Responsive First

必须支持：

- Mobile

- Tablet

- Desktop

---

## GitHub Pages Compatible

所有图片：

必须：

```ts
BASE_PATH + "/images/..."
```

---

# Current Design Language

参考：

- Apple

- Vercel

- Stripe

- Linear

- Framer

- OpenAI

关键词：

- Modern

- Glass

- Blur

- Gradient

- Large Space

- Premium

---

# Current Documents

目前已经建立：

```
PROJECT_SPEC.md
```

```
UI_GUIDELINES.md
```

后续建议继续维护：

```
CHANGELOG.md
```

---

# Git Commit Rules

采用 Conventional Commits：

```
feat:
```

```
fix:
```

```
docs:
```

```
style:
```

```
refactor:
```

例如：

```
feat: add hero section

feat: implement stats section

refactor: extract constants

docs: update roadmap
```

---

# AI Collaboration Notes

该项目长期由 AI 协助开发。

每次继续开发时：

AI 应首先阅读：

```
docs/PROJECT_SPEC.md
```

然后：

```
docs/UI_GUIDELINES.md
```

最后：

```
docs/ROADMAP.md
```

AI 应保持：

- 相同目录结构

- 相同设计语言

- 相同组件风格

- 相同代码规范

不要随意修改：

项目结构。

不要重复创建：

已有组件。

优先扩展：

已有组件。

---

# Immediate Next Tasks

下一阶段建议开发顺序：

```
Stats
```

↓

```
Features（升级）
```

↓

```
About
```

↓

```
Showcase
```

↓

```
CTA
```

↓

```
Footer
```

每完成一个模块：

执行：

```
npm run build
```

确认：

GitHub Pages

显示正常。

然后：

```
git commit
```

```
git push
```

---

# Long-term Goal

HelloWorld 最终目标：

不仅仅是一个 Landing Page。

而是一个：

> 企业级
>
> 可维护
>
> 可扩展
>
> 可持续演进

现代 Web Starter Template。