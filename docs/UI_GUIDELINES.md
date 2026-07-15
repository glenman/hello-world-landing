# HelloWorld UI Design Guidelines

> Version: v1.0
>
> Last Update: 2026-07
>
> Design Language: Modern / Minimal / Technology
>
> Framework: Tailwind CSS

---

# 1. Design Philosophy

HelloWorld 的整体设计遵循以下理念：

- Modern（现代）
- Clean（简洁）
- Premium（高级）
- Minimal（极简）
- Technology（科技感）
- Responsive（响应式）
- Accessibility First（优先考虑可访问性）

整体风格参考：

- Apple
- Vercel
- Stripe
- Linear
- Framer
- OpenAI

---

# 2. Design Keywords

整个网站需要保持一致的视觉语言。

关键词：

- Large Space
- Glassmorphism
- Gradient
- Blur
- Soft Shadow
- Rounded Corner
- Smooth Transition

避免：

- 花哨动画
- 过多颜色
- 重边框
- 高饱和背景

---

# 3. Color System

## Background

Primary

```
Slate 950
```

Tailwind：

```
bg-slate-950
```

Secondary

```
Slate 900
```

Tailwind：

```
bg-slate-900
```

Card

```
bg-white/5
```

Overlay

```
bg-slate-950/60
```

---

## Primary Color

Indigo

```
indigo-500
```

Hover

```
indigo-400
```

---

## Secondary Color

Cyan

```
cyan-400
```

---

## Accent

Sky

```
sky-400
```

Purple

```
violet-500
```

---

## Text

Heading

```
text-white
```

Body

```
text-slate-300
```

Description

```
text-slate-400
```

Muted

```
text-white/50
```

---

# 4. Typography

## Hero Title

Desktop

```
text-7xl
```

Tablet

```
text-6xl
```

Mobile

```
text-5xl
```

Weight

```
font-bold
```

Line Height

```
leading-tight
```

---

## Section Title

```
text-4xl

font-bold
```

---

## Card Title

```
text-2xl

font-semibold
```

---

## Body

```
text-lg

leading-8
```

---

## Small Text

```
text-sm
```

---

# 5. Layout

Container

```
max-w-7xl
```

Padding

```
px-6
```

Section

```
py-24

或

py-28
```

Hero

```
min-h-screen
```

---

# 6. Border Radius

Button

```
rounded-full
```

Card

```
rounded-3xl
```

Image

```
rounded-3xl
```

Badge

```
rounded-full
```

---

# 7. Glassmorphism

统一：

```
bg-white/5

border-white/10

backdrop-blur-md
```

Hover：

```
bg-white/10
```

---

# 8. Shadow

Card Hover

```
hover:shadow-xl

hover:shadow-indigo-500/20
```

Button

```
shadow-indigo-500/40
```

---

# 9. Gradient

Hero Title

```
from-indigo-400

via-sky-400

to-cyan-300
```

Button

```
from-indigo-500

to-cyan-500
```

Glow

```
Indigo

Cyan

Purple
```

---

# 10. Animation

默认：

```
duration-300
```

Hover

```
hover:-translate-y-1
```

Button

```
group

group-hover
```

Card

```
hover:-translate-y-2
```

Scroll Indicator

```
animate-bounce
```

未来：

Framer Motion

---

# 11. Button Style

Primary

```
bg-indigo-600

text-white

rounded-full
```

Hover

```
bg-indigo-500

shadow-xl
```

Secondary

```
border-white/30

bg-white/5
```

---

# 12. Card Style

统一：

```
rounded-3xl

bg-white/5

border

border-white/10

backdrop-blur

transition-all
```

Hover

```
hover:bg-white/10

hover:-translate-y-2
```

---

# 13. Image Style

Hero

```
Background Cover
```

About

```
rounded-3xl
```

Showcase

```
16:9

rounded-3xl
```

---

# 14. Icons

推荐：

Lucide React

尺寸：

```
24

32

48
```

颜色：

```
text-indigo-400
```

---

# 15. Section Structure

统一：

```
Badge

↓

Title

↓

Description

↓

Content
```

例如：

```
WHY CHOOSE US

探索无限可能

现代科技改变世界

□□□□ □□□□ □□□□
```

---

# 16. Responsive Breakpoints

Mobile

```
<768px
```

Tablet

```
768px~
```

Desktop

```
1024px~
```

Large Desktop

```
1280px~
```

统一使用 Tailwind 默认断点：

```
sm

md

lg

xl

2xl
```

---

# 17. Image Specification

格式：

```
WebP
```

Hero：

```
1920 × 1080
```

About

```
1200 × 800
```

Showcase

```
1600 × 900
```

---

# 18. Spacing

Section

```
py-24
```

Card

```
p-8
```

Hero

```
mt-12
```

Grid Gap

```
gap-8
```

---

# 19. Accessibility

所有按钮：

必须有 Hover。

所有图片：

必须有 alt。

颜色：

保证对比度。

链接：

具有 Focus 样式。

---

# 20. Performance

图片：

WebP

避免：

PNG

大图片

CSS：

优先 Tailwind。

动画：

GPU Friendly。

---

# 21. Component Design Rules

所有组件：

一个组件负责一个功能。

组件：

不要维护数据。

数据：

统一来自：

```
constants/
```

配置：

统一来自：

```
lib/site.ts
```

---

# 22. Future Design System

未来准备增加：

```
Theme

Dark Mode

Light Mode

Design Tokens

Component Library

Icon Library

Motion System
```

---

# 23. UI Checklist

每完成一个页面，需要检查：

- [ ] 响应式布局
- [ ] Hover 效果
- [ ] 动画自然
- [ ] 图片清晰
- [ ] 字体层级正确
- [ ] 间距统一
- [ ] 深色模式一致
- [ ] GitHub Pages 显示正常
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90

---

# Design Goal

HelloWorld 的最终目标不是简单实现页面，而是建立一套统一、现代、可维护的 Design System。

设计原则：

> Consistent（统一）
>
> Modern（现代）
>
> Maintainable（可维护）
>
> Scalable（可扩展）
>
> User Friendly（用户友好）

## Design System

UI Layer

Button

Badge

Card

Container

Section

Heading

GradientText

GlassPanel

Glow

## Design Tokens

Spacing

Radius

Typography

Glass Effect

Blur

Gradient

Glow