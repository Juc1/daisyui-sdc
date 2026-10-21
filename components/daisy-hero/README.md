# DaisyUI Hero (Banner / Centered) Component (`daisy-hero`)

Universal DaisyUI 5 Hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

Focused on full-width hero banners with centered or left-aligned copy, optional background images with dark opacity overlays, and surface color tokens.

*(For two-column split heroes with side media, see the `daisy-hero-split` component).*

## Native DaisyUI Layout Patterns

1. **[Centered hero]**: Set `text_align: 'center'`. Renders a centered vertical stack of heading, text, and actions.
2. **[Hero with overlay image]**: Provide `background_media` with `overlay_opacity` (e.g. `'50'`, `'60'`). Renders `.hero-overlay` with high-contrast text overlay.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_media` | `canvas:image` | — | Background image object (`src`, `alt`, `width`, `height`) for full-bleed cover [Hero with overlay image]. |
| `overlay_opacity` | `string` | `"none"` | Darkening overlay: `none`, `20`, `40`, `50`, `60`, `80` [Hero with overlay image]. |
| `background_color` | `string` | `"base-200"` | Surface color token: `base-200`, `base-100`, `base-300`, `neutral`, `primary`, `transparent`. |
| `min_height` | `string` | `"medium"` | Height preset: `screen` (100vh), `large` (70vh), `medium` (50vh), `small` (35vh), `auto` (padded). |
| `content_max_width`| `string` | `"lg"` | Max width constraint: `sm` (md), `md` (xl), `lg` (2xl), `xl` (4xl), `2xl` (6xl), `full`. |
| `text_align` | `string` | `"center"` | Alignment: `center` [Centered hero] or `left`. |
| `data_theme` | `string` | `""` | Optional DaisyUI theme name applied directly to the hero via `data-theme`. |

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Main content area for headings, descriptive copy, button groups, or custom components. |

## Twig Usage Examples

### 1. Centered Hero with Background Image & Overlay
```twig
{% embed 'daisyui_sdc:daisy-hero' with {
  min_height: 'large',
  overlay_opacity: '60',
  background_media: {
    src: '/files/banner.jpg',
    alt: 'Modern workspace'
  }
} only %}
  {% block content %}
    <h1 class="text-4xl md:text-6xl font-bold">Build Faster with Drupal & DaisyUI</h1>
    <p class="text-lg opacity-90 max-w-xl">Experience Builder ready components built for speed and design consistency.</p>
    <div class="flex flex-wrap gap-3">
      <a href="/start" class="btn btn-primary">Get Started</a>
      <a href="/docs" class="btn btn-ghost btn-outline">Documentation</a>
    </div>
  {% endblock %}
{% endembed %}
```

### 2. Quick Prop Usage
```twig
{{ include('daisyui_sdc:daisy-hero', {
  min_height: 'medium',
  background_color: 'base-200',
  title: 'Welcome to Our Community',
  text: '<p>Join thousands of developers creating accessible web apps.</p>',
  cta_text: 'Join Now',
  cta_url: '/join'
}, with_context: false) }}
```
