# DaisyUI Hero Component (`daisy-hero`)

Universal DaisyUI 5 Hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A flexible, compositional layout container utilizing DaisyUI's `.hero`, `.hero-content`, and `.hero-overlay` primitives. Built specifically for visual page builders like Drupal Canvas (Experience Builder), it leverages Drupal SDC slots (`content` and `media_slot`) to empower authors to build diverse banner layouts—from centered typography with dark image overlays to multi-column split media arrangements—without restrictive prop boundaries.

## Key Features

- **Slot-First Composition**: The `content` slot accommodates any arbitrary combination of headings, text, badges, buttons, or form blocks.
- **Side-by-Side & Split Layouts**: Supports `side-by-side` (Media Left) and `side-by-side-reverse` (Media Right) with customizable column ratios (`1:1`, `1:2`, `2:1`).
- **Responsive Stacking**: Configurable `mobile_order` (`media-first` vs `content-first`) for fine-grained mobile breakpoint layout control.
- **Background Media with Dark Overlays**: Seamless full-bleed background images with configurable dark opacity layers (`20%`, `40%`, `50%`, `60%`, `80%`) ensuring text contrast (WCAG 2.1).
- **Aspect Ratio & Corner Radius**: Built-in crop ratios (`1:1`, `4:3`, `3:2`, `16:9`) and border radius presets (`rounded-2xl`, `rounded-3xl`, `pill`) for side media.
- **Typography Isolation**: Includes `not-prose` on the hero container to shield hero components from conflicting Tailwind Typography prose rules.
- **Drupal Attributes Support**: Full `create_attribute()` support preserving Canvas / Experience Builder contextual tags, accessibility attributes, and custom classes.
- **Graceful Prop Fallback**: Supports quick prop usage (`title`, `text`, `cta_text`, `cta_url`) when slot embedding is not required.

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `layout` | `string` | `"center"` | Alignment: `center`, `left`, `side-by-side`, `side-by-side-reverse`. |
| `min_height` | `string` | `"medium"` | Height preset: `screen` (100vh), `large` (70vh), `medium` (50vh), `small` (35vh), `auto` (padded). |
| `background_color` | `string` | `"base-200"` | Surface color token: `base-200`, `base-100`, `base-300`, `neutral`, `primary`, `transparent`. |
| `content_max_width`| `string` | `"lg"` | Max width constraint: `sm` (md), `md` (xl), `lg` (2xl), `xl` (4xl), `2xl` (6xl), `full`. |
| `overlay_opacity` | `string` | `"none"` | Background image overlay: `none`, `20`, `40`, `50`, `60`, `80`. |
| `background_media` | `canvas:image` | — | Background image object (`src`, `alt`, `width`, `height`) for full-bleed cover. |
| `side_media` | `canvas:image` | — | Side media image object (`src`, `alt`, `width`, `height`) for split layouts. |
| `mobile_order` | `string` | `"media-first"`| Mobile order (<1024px): `media-first` or `content-first`. |
| `layout_ratio` | `string` | `"1:1"` | Desktop column ratio: `1:1` (50/50), `1:2` (33/67), `2:1` (67/33). |
| `media_aspect_ratio`| `string` | `"auto"` | Image aspect crop: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. |
| `media_radius` | `string` | `"medium"` | Border radius: `none`, `small` (rounded-sm), `medium` (rounded-2xl), `large` (rounded-3xl), `full` (pill). |
| `data_theme` | `string` | `""` | Optional DaisyUI theme name applied directly to the hero via `data-theme`. |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Main content area for headings, descriptive copy, button groups, or custom components. |
| `media_slot` | Custom media area for embedding cards, video embeds, or illustrations in side-by-side layouts. |

---

## Twig Usage Examples

### 1. Centered Hero with Background Image & Overlay
```twig
{% embed 'mytheme:daisy-hero' with {
  layout: 'center',
  min_height: 'large',
  overlay_opacity: '60',
  background_media: {
    src: '/themes/custom/mytheme/assets/hero-bg.jpg',
    alt: 'Modern workspace'
  }
} only %}
  {% block content %}
    <h1 class="text-4xl md:text-6xl font-bold">Build Faster with Drupal & DaisyUI</h1>
    <p class="text-lg opacity-90 max-w-xl">Experience Builder ready components built for speed and design consistency.</p>
    <div class="flex flex-wrap gap-3">
      {{ include('mytheme:daisy-button', {
        label: 'Get Started',
        url: '/start',
        style: 'primary'
      }, with_context: false) }}
      {{ include('mytheme:daisy-button', {
        label: 'Documentation',
        url: '/docs',
        style: 'ghost',
        variant: 'outline'
      }, with_context: false) }}
    </div>
  {% endblock %}
{% endembed %}
```

### 2. Side-by-Side Hero (Content Left, Media Right)
```twig
{% embed 'mytheme:daisy-hero' with {
  layout: 'side-by-side-reverse',
  min_height: 'medium',
  background_color: 'base-100',
  layout_ratio: '1:1',
  media_aspect_ratio: '16:9',
  media_radius: 'large',
  side_media: {
    src: '/files/app-preview.jpg',
    alt: 'Application dashboard preview',
    width: 1200,
    height: 675
  }
} only %}
  {% block content %}
    <span class="badge badge-accent badge-soft">Product Update</span>
    <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">The Modern Experience Builder</h1>
    <p class="text-base text-base-content/80">Design pages visually with semantic tokens and zero CSS bloat.</p>
    <div class="flex items-center gap-4">
      {{ include('mytheme:daisy-button', {
        label: 'Start Free Trial',
        url: '/signup',
        style: 'primary',
        icon: 'arrow-right',
        icon_position: 'end'
      }, with_context: false) }}
    </div>
  {% endblock %}
{% endembed %}
```

### 3. Quick Prop Usage (Without Twig Blocks)
```twig
{{ include('mytheme:daisy-hero', {
  layout: 'center',
  min_height: 'medium',
  background_color: 'base-200',
  title: 'Welcome to Our Community',
  text: '<p>Join thousands of developers creating accessible web apps.</p>',
  cta_text: 'Join Now',
  cta_url: '/join'
}, with_context: false) }}
```
