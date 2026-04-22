# Design Language: Home 1 - Slope

> Extracted from `https://slope-wcopilot.webflow.io/home-1` on April 21, 2026
> 434 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#4353ff` | rgb(67, 83, 255) | hsl(235, 100%, 63%) | 7 |
| Secondary | `#ffd5bf` | rgb(255, 213, 191) | hsl(21, 100%, 87%) | 3 |
| Accent | `#ccf6ea` | rgb(204, 246, 234) | hsl(163, 70%, 88%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#0e0e0e` | hsl(0, 0%, 5%) | 504 |
| `#222222` | hsl(0, 0%, 13%) | 172 |
| `#ffffff` | hsl(0, 0%, 100%) | 118 |
| `#000000` | hsl(0, 0%, 0%) | 54 |
| `#333333` | hsl(0, 0%, 20%) | 8 |
| `#9a9a9a` | hsl(0, 0%, 60%) | 8 |
| `#eaeaea` | hsl(0, 0%, 92%) | 2 |

### Background Colors

Used on large-area elements: `#ffffff`, `#0e0e0e`, `#ccf6ea`, `#d5c9f8`, `#ffd5bf`, `#fafafa`

### Text Colors

Text color palette: `#000000`, `#0e0e0e`, `#333333`, `#222222`, `#d5c9f8`, `#ffffff`, `#9a9a9a`, `#f69c20`, `#4353ff`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#0e0e0e` | text, border, background | 504 |
| `#222222` | text, border | 172 |
| `#ffffff` | background, text, border | 118 |
| `#d5c9f8` | border, text, background | 58 |
| `#000000` | text, border, background | 54 |
| `#333333` | text, border | 8 |
| `#9a9a9a` | text, border | 8 |
| `#4353ff` | background, border, text | 7 |
| `#ffd5bf` | background, border | 3 |
| `#ccf6ea` | background, border | 2 |
| `#eaeaea` | border | 2 |
| `#f69c20` | text, border | 2 |
| `#1c276d` | background | 1 |

## Typography

### Font Families

- **Manrope** — used for all (213 elements)
- **Lato** — used for body (165 elements)
- **sans-serif** — used for all (22 elements)
- **Fa solid 900** — used for body (10 elements)
- **webflow-icons** — used for body (6 elements)
- **system-ui** — used for body (6 elements)
- **Arial** — used for body (6 elements)
- **Fa brands 400** — used for body (4 elements)
- **Poppins** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 60px | 3.75rem | 600 | 60px | -3px | h1 |
| 50px | 3.125rem | 600 | 60px | normal | h2 |
| 40px | 2.5rem | 600 | 48px | normal | h2, br |
| 27px | 1.6875rem | 600 | 32.4px | normal | h3 |
| 24px | 1.5rem | 400 | 16px | normal | div, img, h4 |
| 22px | 1.375rem | 600 | 26.4px | normal | h5 |
| 20px | 1.25rem | 500 | 30px | normal | p |
| 18px | 1.125rem | 600 | 27px | normal | a, img, p, svg |
| 16px | 1rem | 400 | normal | normal | html, head, style, meta |
| 14px | 0.875rem | 400 | 21px | normal | a, div |
| 12px | 0.75rem | 500 | 15.6px | normal | div, span, a, img |
| 11px | 0.6875rem | 700 | 18px | normal | div |

### Heading Scale

```css
h1 { font-size: 60px; font-weight: 600; line-height: 60px; }
h2 { font-size: 50px; font-weight: 600; line-height: 60px; }
h2 { font-size: 40px; font-weight: 600; line-height: 48px; }
h3 { font-size: 27px; font-weight: 600; line-height: 32.4px; }
h4 { font-size: 24px; font-weight: 400; line-height: 16px; }
h5 { font-size: 22px; font-weight: 600; line-height: 26.4px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (197x), `600` (187x), `500` (43x), `700` (7x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-5 | 5px | 0.3125rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-70 | 70px | 4.375rem |
| spacing-80 | 80px | 5rem |
| spacing-100 | 100px | 6.25rem |
| spacing-128 | 128px | 8rem |
| spacing-140 | 140px | 8.75rem |
| spacing-395 | 395px | 24.6875rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 2 |
| md | 9px | 1 |
| lg | 16px | 8 |
| xl | 20px | 1 |
| full | 50px | 14 |

## Box Shadows

**lg** — blur: 25px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px 0px;
```

**lg** — blur: 30px
```css
box-shadow: rgba(0, 0, 0, 0.33) 0px 0px 30px 0px;
```

**xl** — blur: 35px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 35px 0px;
```

## CSS Custom Properties

### Colors

```css
--primary: #d5c9f8;
--primary-light: #ccf6ea;
--light-grey-bg: #fafafa;
```

### Other

```css
--gray: #9a9a9a;
--white: white;
--orange: #ffd5bf;
--1d1d1b: #0e0e0e;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 479px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| xl | 1280px | min-width |
| 1440px | 1440px | min-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Durations:** `0.3s`, `0.2s`

### Common Transitions

```css
transition: all;
transition: color 0.3s;
transition: 0.3s;
transition: 0.2s;
transition: transform 0.3s;
transition: transform 0.3s, background-color 0.3s, color 0.3s;
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (24 instances)

```css
.button {
  background-color: rgb(0, 0, 0);
  color: rgb(14, 14, 14);
  font-size: 18px;
  font-weight: 400;
  padding-top: 12px;
  padding-right: 20px;
  border-radius: 0px;
}
```

### Cards (5 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (87 instances)

```css
.link {
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 600;
}
```

### Navigation (142 instances)

```css
.navigatio {
  background-color: rgb(213, 201, 248);
  color: rgb(34, 34, 34);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (40 instances)

```css
.foote {
  color: rgb(14, 14, 14);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (4 instances)

```css
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 480px;
}
```

### Dropdowns (121 instances)

```css
.dropdown {
  background-color: rgb(213, 201, 248);
  border-radius: 0px;
  border-color: rgb(34, 34, 34);
  padding-top: 0px;
}
```

### Badges (5 instances)

```css
.badge {
  background-color: rgb(67, 83, 255);
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 500;
  padding-top: 5px;
  padding-right: 15px;
  border-radius: 4px;
}
```

### Switches (12 instances)

```css
.switche {
  border-radius: 0px;
  border-color: rgb(34, 34, 34);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
```

### Button — 8 instances, 4 variants

**Variant 1** (1 instance)

```css
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 12px 20px 12px 20px;
  border-radius: 50px;
  border: 1px solid rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
  padding: 12px 20px 12px 20px;
  border-radius: 50px;
  border: 1px solid rgb(14, 14, 14);
  font-size: 18px;
  font-weight: 500;
```

**Variant 3** (4 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(14, 14, 14);
  padding: 12px 20px 12px 20px;
  border-radius: 50px;
  border: 1px solid rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
```

**Variant 4** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 12px 20px 12px 20px;
  border-radius: 50px;
  border: 1px solid rgb(250, 250, 250);
  font-size: 18px;
  font-weight: 500;
```

### Button — 9 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(14, 14, 14);
  font-size: 16px;
  font-weight: 500;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(14, 14, 14);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(14, 14, 14);
  font-size: 16px;
  font-weight: 400;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(213, 201, 248, 0.2);
  color: rgb(14, 14, 14);
  padding: 30px 30px 0px 30px;
  border-radius: 16px;
  border: 1px solid rgb(213, 201, 248);
  font-size: 16px;
  font-weight: 400;
```

### Card — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(14, 14, 14);
  font-size: 27px;
  font-weight: 600;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 5px 15px 5px 15px;
  border-radius: 4px;
  border: 1px solid rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 500;
```

## Layout System

**0 grid containers** and **146 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 15px |
| 100% | 0px |
| 370px | 0px |
| 570px | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 101x |
| column/nowrap | 43x |
| row/wrap | 2x |

**Gap values:** `10px normal`, `15px normal`, `20px normal`, `25px normal`, `30px normal`, `5px`, `8px`, `normal 100px`, `normal 10px`, `normal 125px`, `normal 12px`, `normal 15px`, `normal 20px`, `normal 30px`, `normal 50px`, `normal 5px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 5 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#000000` | 21:1 | AAA |
| `#0e0e0e` | `#ffffff` | 19.3:1 | AAA |

## Design System Score

**Overall: 82/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 75/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 9 font families — consider limiting to 2 (heading + body)
- 39 !important rules — prefer specificity over overrides
- 90% of CSS is unused — consider purging
- 5167 duplicate CSS declarations

## Z-Index Map

**11 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,2000000 | div.n.a.v.b.a.r. .w.-.n.a.v, a.p.r.o.m.o.t.i.o.n.-.l.a.b.e.l.-.b.u.y.-.t.h.i.s.-.t.e.m.p.l.a.t.e. .w.-.i.n.l.i.n.e.-.b.l.o.c.k, a.p.r.o.m.o.t.i.o.n.-.l.a.b.e.l.-.a.l.l.-.t.e.m.p.l.a.t.e.s. .w.-.i.n.l.i.n.e.-.b.l.o.c.k |
| dropdown | 900,900 | div.n.a.v.-.d.r.o.p.d.o.w.n. .w.-.d.r.o.p.d.o.w.n, div.n.a.v.-.d.r.o.p.d.o.w.n. .w.-.d.r.o.p.d.o.w.n, div.n.a.v.-.d.r.o.p.d.o.w.n. .w.-.d.r.o.p.d.o.w.n |
| base | 1,5 | div.w.-.n.a.v.-.o.v.e.r.l.a.y, div.c.o.n.t.e.n.t.-.w.r.a.p, img.h.o.m.e.-.a.b.s.o.l.u.t.e.-.i.m.a.g.e |

**Issues:**
- [object Object]

## SVG Icons

**1 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| sm | 1 |

**Icon colors:** `currentColor`, `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| webflow-icons | self-hosted | normal | normal |
| Fa brands 400 | self-hosted | 400 | normal |
| Fa solid 900 | self-hosted | 400 | normal |
| Fa 400 | self-hosted | 400 | normal |
| Lato | google-fonts | 100, 300, 400, 700, 900 | italic, normal |
| Manrope | cdn | 400, 500, 600, 700 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 9 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 6 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: fill, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (8x), 3:2 (3x), 3.52:1 (2x), 4:3 (2x), 1.15:1 (1x), 0.25:1 (1x), 3:4 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |

## Component Anatomy

### button — 26 instances

**Slots:** label, icon
**Variants:** primary · secondary
**Sizes:** large

| variant | count | sample label |
|---|---|---|
| default | 20 | 0 |
| primary | 3 | Get Started
 |
| secondary | 3 | Let’s talk to an expert
 |

### card — 4 instances

**Slots:** media

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **talk** (2)
- **discover** (2)
- **book** (2)
- **view** (2)
- **get** (1)
- **learn** (1)
- **open** (1)
- **schedule** (1)

### Button Copy Patterns

- "" (13×)
- "discover more
" (2×)
- "0" (1×)
- "get started
" (1×)
- "let’s talk to an expert

get api keys
" (1×)
- "let’s talk to an expert
" (1×)
- "learn more
" (1×)
- "open an account

book a demo
" (1×)
- "open an account
" (1×)
- "book a demo
" (1×)

### Sample Headings

> Simplify, Secure, Succeed.
> Start with banking basics that just work
> Our intuitive interface, user-friendly design, and responsive customer support make navigating our platform effortless.
> Financial transactions should be more than just a mundane task.
> Scale your business with credit card
> Setting up Apple Pay made easy
> Grow your business with our payment methood
> Discover the possibilities with our card
> Send, Receive, Swap.
All in one place.
> A modern banking for modern companies

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Manrope` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
