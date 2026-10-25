# Daisy Hero (Side by Side) Component (`daisy-hero-split`)

Turnkey two-column hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A pure-prop, slot-free hero banner that renders immediately upon being dragged into Canvas UI. Features configurable desktop column ratios (`1:1`, `1:2`, `2:1`), mobile stacking order, image aspect ratios, and responsive primary/secondary action buttons.

## Button Layout Rules

- **0 CTAs**: If both button labels/URLs are omitted, no button wrapper is rendered.
- **1 CTA**: If only one CTA is provided, the button is automatically centered in the content column.
- **2 CTAs**: If both primary and secondary CTAs are provided, they display side-by-side on desktop (`md:flex-row`) and stack vertically on mobile screens (`flex-col w-full`).

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `media` | `canvas:image` | Placeholder | Side media image object (`src`, `alt`, `width`, `height`). |
| `media_position` | `string` | `"left"` | Desktop column position: `left` or `right`. |
| `layout_ratio` | `string` | `"1:1"` | Column width split: `1:1` (50/50), `1:2` (33/67), `2:1` (67/33). |
| `mobile_order` | `string` | `"media-first"`| Mobile stacking order (<1024px): `media-first` or `content-first`. |
| `media_aspect_ratio`| `string` | `"auto"` | Aspect ratio crop: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. |
| `media_radius` | `string` | `"medium"` | Corner rounding: `none`, `small`, `medium`, `large`, `full`. |
| `background_color` | `string` | `"base-200"` | Surface color token: `base-200`, `base-100`, `base-300`, `neutral`, `primary`, `transparent`. |
| `min_height` | `string` | `"medium"` | Height preset: `screen` (100vh), `large` (70vh), `medium` (50vh), `small` (35vh), `auto`. |
| `data_theme` | `string` | `""` | Optional DaisyUI theme override. |
| `title` | `string` | `"Engage Your Audience"` | Hero headline text. |
| `title_level` | `integer` | `1` | HTML heading level (1-6) for `title`. |
| `text` | `string` | `"Deliver a compelling summary..."` | Hero descriptive copy. |
| `cta_text` | `string` | `"Get Started"` | Primary action button label. |
| `cta_url` | `string` | `"#"` | Primary action destination URL. |
| `cta_style` | `string` | `"primary"` | Color role: `primary`, `secondary`, `accent`, `neutral`, `ghost`, `link`. |
| `cta_variant` | `string` | `"solid"` | Visual variant: `solid`, `outline`, `soft`, `dash`. |
| `cta2_text` | `string` | `""` | Optional secondary action button label. |
| `cta2_url` | `string` | `""` | Optional secondary action destination URL. |
| `cta2_style` | `string` | `"neutral"` | Color role for second button. |
| `cta2_variant` | `string` | `"outline"` | Visual variant for second button. |

## Twig Usage Examples

### 1. Single Centered CTA (Default)
```twig
{{ include('daisyui_sdc:daisy-hero-split', {
  title: 'Welcome to Our Clinic',
  text: 'Expert aesthetic and skin health treatments in central London.',
  cta_text: 'Book Consultation',
  cta_url: '/book'
}, with_context: false) }}
```

### 2. Dual CTAs (Side by Side on Desktop, Stacked on Mobile)
```twig
{{ include('daisyui_sdc:daisy-hero-split', {
  title: 'Transform Your Wellness',
  text: 'Discover our comprehensive treatments customized for your lifestyle.',
  cta_text: 'View Treatments',
  cta_url: '/treatments',
  cta2_text: 'Our Team',
  cta2_url: '/practitioners',
  cta2_style: 'neutral',
  cta2_variant: 'outline'
}, with_context: false) }}
```
