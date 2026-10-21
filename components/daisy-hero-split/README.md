# DaisyUI Hero (Side by Side) Component (`daisy-hero-split`)

Two-column hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

Focused exclusively on two-column side-by-side hero arrangements. Features configurable desktop column ratios (`1:1`, `1:2`, `2:1`), mobile stacking order, image aspect ratios, and corner rounding.

## Native DaisyUI Layout Patterns

1. **[Hero with figure]**: Set `media_position: 'left'`. Displays the figure/image on the left and content on the right (`lg:flex-row`).
2. **[Hero with figure but reverse order]**: Set `media_position: 'right'`. Displays content on the left and figure/image on the right (`lg:flex-row-reverse`).

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `media` | `canvas:image` | — | Side media image object (`src`, `alt`, `width`, `height`) [Hero with figure]. |
| `media_position` | `string` | `"left"` | Desktop column position: `left` [Hero with figure] or `right` [Hero with figure but reverse order]. |
| `layout_ratio` | `string` | `"1:1"` | Column width split: `1:1` (50/50), `1:2` (33/67), `2:1` (67/33). |
| `mobile_order` | `string` | `"media-first"`| Mobile stacking order (<1024px): `media-first` or `content-first`. |
| `media_aspect_ratio`| `string` | `"auto"` | Aspect ratio crop: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. |
| `media_radius` | `string` | `"medium"` | Corner rounding: `none`, `small`, `medium`, `large`, `full`. |
| `background_color` | `string` | `"base-200"` | Surface color token: `base-200`, `base-100`, `base-300`, `neutral`, `primary`, `transparent`. |
| `min_height` | `string` | `"medium"` | Height preset: `screen` (100vh), `large` (70vh), `medium` (50vh), `small` (35vh), `auto`. |
| `data_theme` | `string` | `""` | Optional DaisyUI theme override. |

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Main content area for headings, descriptive copy, button groups, or custom components. |

## Twig Usage Example

```twig
{% embed 'daisyui_sdc:daisy-hero-split' with {
  media_position: 'right',
  layout_ratio: '1:1',
  media_aspect_ratio: '16:9',
  media_radius: 'large',
  media: {
    src: '/files/dashboard.jpg',
    alt: 'Dashboard preview'
  }
} only %}
  {% block content %}
    <h1 class="text-3xl md:text-5xl font-bold">Fast & Accessible</h1>
    <p class="text-base text-base-content/80">Build layouts visually with clean semantic DaisyUI tokens.</p>
    <div class="flex gap-3">
      <a href="/get-started" class="btn btn-primary">Get Started</a>
    </div>
  {% endblock %}
{% endembed %}
```
