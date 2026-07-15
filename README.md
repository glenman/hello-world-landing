# HelloWorld

<p align="center">

A Modern Next.js Landing Page Project  
一个面向未来的现代化 Web 工程项目

</p>


<p align="center">

Built with:

Next.js · React · TypeScript · Tailwind CSS · GitHub Actions · AI Assisted Development

</p>


---

# 🌎 Overview / 项目简介

HelloWorld is a modern frontend project built with Next.js.

HelloWorld 不只是一个简单的 Landing Page，而是一个完整的现代 Web 工程实践项目。

项目目标：

- 创建现代化 Web UI
- 建立可扩展前端架构
- 实践组件化开发
- 建立完整工程文档体系
- 探索 AI 辅助软件开发模式


项目理念：

```
Code

+

Architecture

+

Documentation

+

AI Collaboration

=

Modern Engineering System
```

---

# ✨ Features / 项目特点


## Modern UI Design

现代化视觉体验：

- Dark Technology Style
- Gradient System
- Glassmorphism
- Responsive Layout
- Smooth Animation


---

## Component Architecture

采用组件驱动开发：

```
Project

↓

Page

↓

Section

↓

UI Component

↓

Data

↓

Types
```


核心组件：

```
Navbar

Hero

Features

Stats

Footer
```


---

## Documentation Driven Development

项目采用文档驱动开发模式。

包含：

- Project Specification
- Development Guide
- Architecture Decision Records
- Wiki System
- AI Context


---

## AI Assisted Development

HelloWorld 支持：

Human

+

AI

协同开发模式。


AI 可以帮助：

- Code Generation
- Code Review
- Architecture Discussion
- Documentation Maintenance


---

# 🚀 Tech Stack / 技术栈


## Frontend

| Technology | Description |
|-|-|
| Next.js 16 | React Framework |
| React | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling System |


---

## Development

| Technology | Description |
|-|-|
| Git | Version Control |
| GitHub | Code Repository |
| GitHub Actions | CI/CD |
| GitHub Pages | Deployment |


---

## Documentation

| Technology | Purpose |
|-|-|
| Markdown | Documentation |
| ADR | Architecture Records |
| Wiki | Knowledge Base |
| AI Context | AI Collaboration |


---

# 📂 Project Structure / 项目结构


```
helloworld/

│
├── app/
│
│   Next.js Application
│
│
├── components/
│
│   Reusable UI Components
│
│
├── constants/
│
│   Static Configuration Data
│
│
├── lib/
│
│   Shared Utilities
│
│
├── public/
│
│   Static Assets
│
│
├── docs/
│
│   Project Documentation
│
│
└── README.md

    Project Entry
```


---

# 📚 Documentation Map / 文档地图


HelloWorld uses a structured documentation system.

HelloWorld 使用分层文档体系管理项目知识。


```
HelloWorld Documentation


README.md

    |
    |
    +-- docs/
    |
    |      Core Documentation
    |
    |
    +-- docs/decisions/
    |
    |      Architecture Decision Records
    |
    |
    +-- docs/wiki/
    |
    |      Knowledge Base
    |
    |
    +-- AI_CONTEXT.md
           
           AI Development Context
```


---

# 📖 Core Documentation / 核心文档


Location:

```
docs/
```


| File | Description |
|-|-|
| PROJECT_SPEC.md | Project architecture specification / 项目规范 |
| ROADMAP.md | Product roadmap / 产品路线 |
| UI_GUIDELINES.md | UI design system / UI设计规范 |
| DEVELOPMENT.md | Development workflow / 开发流程 |
| DEVELOPMENT_LIFECYCLE.md | Development lifecycle / 开发生命周期 |
| CONTRIBUTING.md | Contribution guide / 贡献规范 |
| CHANGELOG.md | Version history / 更新记录 |
| AI_CONTEXT.md | AI project context / AI上下文 |


---

# 🏛 Architecture Decisions / 架构决策


Location:

```
docs/decisions/
```


ADR (Architecture Decision Records) records important technical decisions.


Current decisions:


| ADR | Topic | Description |
|-|-|-|
| 0001 | GitHub Pages Base Path | Static resource path strategy |
| 0002 | Project Structure | Folder organization |
| 0003 | Component Architecture | Component design rules |
| 0004 | Design System | UI visual system |
| 0005 | Deployment Strategy | GitHub Actions deployment |
| 0006 | Documentation System | Knowledge management |
| 0007 | AI Assisted Development | AI collaboration workflow |


Detailed index:

```
docs/decisions/README.md
```


---

# 📘 Wiki Knowledge Base / Wiki知识库


Location:

```
docs/wiki/
```


Purpose:

建立项目长期知识库。


规划结构：

```
wiki/

├── Getting Started

├── Architecture

├── Components

├── Design System

├── Deployment

├── Troubleshooting

└── AI Development
```


Future evolution:

```
Markdown

↓

MDX

↓

Next.js Wiki

↓

AI Knowledge Assistant
```


---

# 🛠 Development Setup / 开发环境


## Requirements

需要：

```
Node.js >= 20

npm >= 10

Git
```


---

## Installation / 安装


Clone repository:

```bash
git clone https://github.com/glenman/hello-world-landing.git
```


Enter project:

```bash
cd hello-world-landing
```


Install dependencies:

```bash
npm install
```


---

# 💻 Development / 本地开发


Start development server:

```bash
npm run dev
```


Open:

```
http://localhost:3000
```


---

# 🏗 Build / 构建


Production build:

```bash
npm run build
```


Expected:

```
✓ Compiled successfully

✓ Generated static pages

✓ Build completed
```


---

# 🚢 Deployment / 部署


Current deployment:

```
GitHub Actions

        ↓

Next.js Build

        ↓

Static Export

        ↓

GitHub Pages
```


Deployment decision:

```
docs/decisions/0005-github-actions-deployment.md
```


---

# 🖼 Static Assets / 静态资源


Because GitHub Pages uses repository path:

```
https://username.github.io/repository/
```


Static assets should use:

```
BASE_PATH
```


Configuration:

```
lib/site.ts
```


Example:

```ts
`${BASE_PATH}/images/hero.webp`
```


Related decision:

```
ADR-0001
```


---

# 🤖 AI Development Workflow / AI开发流程


HelloWorld is designed for AI-assisted development.


Recommended AI context loading:


```
README.md

↓

AI_CONTEXT.md

↓

PROJECT_SPEC.md

↓

ROADMAP.md

↓

UI_GUIDELINES.md

↓

docs/decisions/
```


AI should:

- Understand architecture first
- Reuse existing components
- Follow design rules
- Update documentation


---

# 🔄 Development Lifecycle / 开发生命周期


```
Idea

↓

Planning

↓

Architecture Decision

↓

Implementation

↓

Review

↓

Documentation Update

↓

Deployment
```


Detailed document:

```
docs/DEVELOPMENT_LIFECYCLE.md
```


---

# 🤝 Contribution / 贡献


Before contributing:

Please read:


```
CONTRIBUTING.md

DEVELOPMENT.md

UI_GUIDELINES.md
```


Contribution process:


```
Issue

↓

Discussion

↓

Implementation

↓

Review

↓

Merge
```


---

# 🗺 Roadmap / 未来规划


Current:

```
v0.1

Project Foundation

✓ Next.js Setup

✓ Component Architecture

✓ GitHub Pages Deployment

✓ Documentation System
```


Next:

```
v0.2

Complete Landing Page

- Features Section
- Stats Section
- About Section
- Showcase
- Footer
```


Future:

```
v1.0

AI Enhanced Web Platform

- Wiki System
- Search
- AI Assistant
- Design System Evolution
```


Full roadmap:

```
docs/ROADMAP.md
```


---

# 📈 Project Philosophy / 项目理念


HelloWorld follows:


```
Build

↓

Document

↓

Improve

↓

Evolve
```


或者：


> 用代码构建产品。  
>
> 用文档沉淀知识。  
>
> 用 AI 提升效率。


---

# 📄 License


MIT License


---

# 👨‍💻 Author


Created with:

```
Human Intelligence

+

Artificial Intelligence

+

Modern Web Technology
```


---

# ⭐ Support


If this project helps you:

Give it a star ⭐

and follow the evolution of HelloWorld.