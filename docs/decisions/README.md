# Architecture Decision Records (ADR)

> HelloWorld Architecture Decision Registry  
>
> HelloWorld 架构决策记录中心

---

# Overview / 概述

Architecture Decision Records (ADR) are used to document important technical decisions made during the evolution of the HelloWorld project.

ADR 用于记录 HelloWorld 项目发展过程中的重要技术决策。

Each ADR explains:

每个 ADR 主要说明：

- What decision was made  
  做出了什么决定

- Why this decision was chosen  
  为什么选择这个方案

- What alternatives were considered  
  考虑过哪些替代方案

- What consequences this decision brings  
  该决策带来的影响

---

# Purpose / 目的

ADR helps maintain:

ADR 用于维护：

- Technical consistency  
  技术一致性

- Architecture history  
  架构演进历史

- Development knowledge  
  开发知识沉淀

- AI collaboration context  
  AI 协作上下文

---

# ADR Directory Structure / ADR目录结构

```
docs/

└── decisions/

    ├── README.md

    ├── 0001-*.md

    ├── 0002-*.md

    ├── 0003-*.md

    └── ...
```

---

# Decision Records / 架构决策列表

| ADR | Title / 标题 | Description / 说明 | Status |
|-|-|-|-|
| ADR-0001 | GitHub Pages Base Path Strategy | GitHub Pages 静态资源路径策略 | Accepted |
| ADR-0002 | Project Structure Organization | 项目目录结构设计规范 | Accepted |
| ADR-0003 | Component Architecture Strategy | React组件架构设计原则 | Accepted |
| ADR-0004 | Design System Strategy | UI设计系统与视觉规范 | Accepted |
| ADR-0005 | GitHub Actions Deployment Strategy | CI/CD自动部署方案 | Accepted |
| ADR-0006 | Documentation System Strategy | 项目文档体系设计 | Accepted |
| ADR-0007 | AI Assisted Development Strategy | AI辅助开发模式 | Accepted |

---

# ADR Details / ADR详细说明

---

# ADR-0001

## GitHub Pages Base Path Strategy

## GitHub Pages路径策略


File:

```
0001-github-pages-base-path.md
```

---

## Purpose / 目的

Defines how static assets are handled when deploying HelloWorld to GitHub Pages.

定义 HelloWorld 部署到 GitHub Pages 后，静态资源路径如何管理。


---

## Key Decision / 核心决策

Use centralized:

统一使用：

```
lib/site.ts
```

for:

用于：

```
BASE_PATH configuration

资源路径管理
```

---

## Why / 为什么

GitHub Pages uses repository sub-path hosting.

GitHub Pages 使用仓库子路径访问。

Example:

```
/hello-world-landing/
```

Therefore asset paths must be dynamically generated.

因此资源路径不能硬编码。

---

# ADR-0002

## Project Structure Organization

## 项目目录结构设计


File:

```
0002-project-structure.md
```

---

## Purpose / 目的

Defines the organization rules of the project folders.

定义项目目录职责划分。

---

## Key Decision / 核心决策

Separate responsibilities:

目录职责分离：

```
app

components

constants

lib

public

docs
```

---

## Why / 为什么

Provides:

提供：

- Better scalability
  更好的扩展性

- Easier maintenance
  更容易维护

- Clear ownership
  清晰代码职责

---

# ADR-0003

## Component Architecture Strategy

## 组件架构设计策略


File:

```
0003-component-architecture.md
```

---

## Purpose / 目的

Defines how UI components should be created and organized.

定义 UI 组件创建和组织方式。


---

## Key Decision / 核心决策

Use component-driven architecture.

采用组件驱动架构。

Example:

```
Page

↓

Components

↓

Reusable UI
```

---

## Why / 为什么

Avoid:

避免：

- Large page files
  巨型页面文件

- Duplicate UI logic
  重复UI代码

Improve:

提升：

- Reusability
  复用能力

- Maintainability
  可维护性

---

# ADR-0004

## Design System Strategy

## 设计系统策略


File:

```
0004-design-system.md
```

---

## Purpose / 目的

Defines the visual language of HelloWorld.

定义 HelloWorld 的统一视觉体系。

---

## Key Decision / 核心决策

Build a lightweight custom design system based on:

基于以下技术建立轻量设计系统：

```
Tailwind CSS

+

Design Tokens

+

Component Rules
```

---

## Includes / 包含

- Color system
  色彩体系

- Typography
  字体体系

- Spacing
  间距体系

- Animation
  动画规范

- Glass effect
  玻璃拟态效果

---

# ADR-0005

## GitHub Actions Deployment Strategy

## GitHub Actions自动部署策略


File:

```
0005-github-actions-deployment.md
```

---

## Purpose / 目的

Defines the production deployment workflow.

定义生产环境部署流程。

---

## Key Decision / 核心决策

Use:

采用：

```
GitHub Actions

+

Next.js Static Export

+

GitHub Pages
```

---

## Workflow / 流程

```
Code Push

↓

GitHub Actions

↓

Build

↓

Deploy

↓

GitHub Pages
```

---

## Why / 为什么

Provides:

提供：

- Automatic deployment
  自动部署

- Repeatable process
  可重复流程

- Version control
  版本管理

---

# ADR-0006

## Documentation System Strategy

## 文档体系设计策略


File:

```
0006-documentation-system.md
```

---

## Purpose / 目的

Defines how project knowledge is managed.

定义项目知识管理方式。


---

## Key Decision / 核心决策

Maintain multiple documentation layers:

建立多层文档体系：

```
README

↓

docs

↓

ADR

↓

Wiki

↓

AI Context
```

---

## Why / 为什么

Prevent:

避免：

- Knowledge loss
  知识丢失

- Repeated explanations
  重复沟通

- Architecture confusion
  架构混乱

---

# ADR-0007

## AI Assisted Development Strategy

## AI辅助开发策略


File:

```
0007-ai-assisted-development.md
```

---

## Purpose / 目的

Defines how AI participates in HelloWorld development.

定义 AI 如何参与 HelloWorld 开发。

---

## Key Decision / 核心决策

AI acts as:

AI作为：

```
Development Partner

Architecture Assistant

Knowledge Navigator
```

---

## AI Must Follow / AI必须遵循

```
Project Context

↓

Architecture

↓

Coding Rules

↓

Documentation
```

---

## Why / 为什么

Ensure:

保证：

- Consistent code generation
  代码生成一致性

- Better collaboration
  更好的协作效率

- Knowledge continuity
  知识持续传承

---

# ADR Status / 状态说明

| Status | Meaning / 含义 |
|-|-|
| Proposed | Proposed decision / 提议中 |
| Accepted | Active decision / 当前有效 |
| Deprecated | No longer recommended / 已废弃 |
| Superseded | Replaced by another ADR / 被新ADR替代 |

---

# Creating New ADR / 创建新的ADR

When making important architecture decisions:

当产生重要架构决策时：

1. Create new ADR file  
   创建新的ADR文件

2. Explain the problem  
   描述问题

3. Describe alternatives  
   描述替代方案

4. Record final decision  
   记录最终决定

5. Update related documentation  
   更新相关文档

---

# Future ADR Topics / 未来可能增加的ADR

Possible future decisions:

未来可能记录：

```
0008-performance-strategy.md

性能优化策略


0009-security-strategy.md

安全策略


0010-testing-strategy.md

测试策略
```

---

# Final Principle / 最终原则

> ADR records why we build things this way.
>
> ADR 记录为什么这样构建系统。

> Code explains implementation.
>
> Code 说明如何实现。

> ADR explains decisions.
>
> ADR 解释为什么决定这样实现。