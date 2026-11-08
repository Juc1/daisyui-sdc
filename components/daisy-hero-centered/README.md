# DaisyUI Hero (Banner / Centered) Component (`daisy-hero-centered`)

Universal DaisyUI 5 Hero layout component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

Focused on full-width hero banners with centered or left-aligned copy, optional background images with dark opacity overlays, and surface color tokens.

*(For two-column heroes with side media, see the `daisy-hero-with-figure` component).*

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
| `title` | `string` | `""` | Headline title text. Wrap any word(s) in `[brackets]` to highlight them in the `title_highlight_color`. |
| `title_highlight_color` | `string` | `"primary"` | Color token for bracketed words: `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`. |
| `title_level` | `integer` | `1` | HTML heading level `1`-`6` (`h1` through `h6`). |
| `text` | `string` | `""` | Descriptive body copy / subtitle. |
| `cta_text` | `string` | `""` | Call-to-action button label. |
| `cta_url` | `string` | `""` | Call-to-action button destination URL. |

## Bracket Title Highlighting

You can highlight one or more words in a different DaisyUI color without writing HTML or requiring a full Markdown parser. Wrap the target words in `[brackets]` in the `title` prop:

```twig
title: "Build [digital experiences] that matter"
title_highlight_color: "accent"
```

### Twig String-Splitting Logic
The component parses bracketed words using pure Twig string splitting with zero dependencies or overhead:

```twig
{% set highlight_color_map = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error'
} %}
{% set hl_class = highlight_color_map[title_highlight_color|default('primary')]|default('text-primary') %}

<{{ h_tag }} class="{{ title_size_map[h_tag] }} font-bold tracking-tight">
  {%- for chunk in title|split('[') -%}
    {%- if loop.first -%}
      {{ chunk }}
    {%- elseif ']' in chunk -%}
      {%- set subparts = chunk|split(']', 2) -%}
      <span class="{{ hl_class }}">{{ subparts[0] }}</span>{{ subparts[1]|default('') }}
    {%- else -%}
      [{{ chunk }}
    {%- endif -%}
  {%- endfor -%}
</{{ h_tag }}>
```

This renders:
```html
<h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
  Build <span class="text-accent">digital experiences</span> that matter
</h1>
```

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Main content area for headings, descriptive copy, button groups, or custom components. |

## Twig Usage Examples

### 1. Centered Hero with Background Image & Overlay
```twig
{% embed 'daisyui_sdc:daisy-hero-centered' with {
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

### 2. Quick Prop Usage with Bracket Highlighting
```twig
{{ include('daisyui_sdc:daisy-hero-centered', {
  min_height: 'medium',
  background_color: 'base-200',
  title: 'Welcome to Our [Community]',
  title_highlight_color: 'primary',
  text: '<p>Join thousands of developers creating accessible web apps.</p>',
  cta_text: 'Join Now',
  cta_url: '/join'
}, with_context: false) }}
```
