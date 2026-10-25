# Daisy Hero (Side by Side with Slots) Component (`daisy-hero-split-with-slots`)

Composable two-column hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

Designed specifically for complex landing page hero sections requiring arbitrary Drupal block composition, webforms, multi-button groups, or nested components inside the content column.

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

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Main content area for dragging and dropping headings, text, buttons, forms, and composite blocks. |

## Twig Usage Example

```twig
{% embed 'daisyui_sdc:daisy-hero-split-with-slots' with {
  media_position: 'left',
  layout_ratio: '1:1',
  media: {
    src: '/sites/default/files/hero.jpg',
    alt: 'Hero banner preview'
  }
} %}
  {% block content %}
    <h1 class="text-4xl md:text-6xl font-bold">Composable Hero Banner</h1>
    <p class="text-lg opacity-90">Freely drop buttons, forms, or any custom components inside this slot.</p>
    <div class="flex gap-4">
      <a href="/contact" class="btn btn-primary">Contact Us</a>
      <a href="/about" class="btn btn-outline">Learn More</a>
    </div>
  {% endblock %}
{% endembed %}
```
