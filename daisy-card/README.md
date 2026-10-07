# DaisyUI Card Component (`daisy-card`)

Universal DaisyUI 5 Card component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A modern card component supporting vertical and horizontal orientations, responsive image ratios, accessible stretched link patterns, a 10px accent top border, image overlays (`image-full`), and slot-driven composition with dedicated `header`, `content`, and `actions` slots.

## Key Features

- **Flexible `header` Slot**: Allows full freedom to compose the top of the card—icon followed by heading inline, stacked icon tile above heading, badge above heading, avatar chip, or standalone icon—with automatic fallback to the standard `heading_text` prop.
- **10px Accent Border-Top**: Optional `border_top: true` adds a prominent 10px top accent border with configurable color tokens (`primary`, `secondary`, `accent`, `neutral`, `base-300`).
- **Full Drupal Attributes Support**: Renders `{{ card_attributes }}` via `create_attribute()`, ensuring compatibility with Drupal Canvas, contextual filters, and views styling.
- **Reliable Media Rendering**: Includes resilient `<img>` fallback so images never fail to render if external image components are missing.
- **Three SDC Slots**:
  - `header`: Slot for custom header markup (icon + title, stacked tile, badge, avatar).
  - `content`: Slot for arbitrary body content, badges, author chips, or complex text.
  - `actions`: Slot for action buttons or links inside DaisyUI's `.card-actions`.
- **Accessible Stretched Link**: Clicking any part of the card navigates to the card's URL using a CSS stretched link (`after:absolute after:inset-0`) without nesting interactive HTML elements.
- **Orientation Modes**: Standard `vertical` and side-by-side `horizontal` (`md:card-side`).
- **Views Integration**: Built-in support for matching heights in Views grids (`in-[.views-row]:h-full!`).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `heading_text` | `string` | `""` | Default card heading title (used when `header` slot is not passed). |
| `level` | `number` | `3` | Heading HTML level (2 through 6). |
| `url` | `string` / `uri` | `""` | Optional link destination (stretches clickable area to entire card). |
| `media` | `canvas:image` | — | Image media object (`src`, `alt`, `width`, `height`). |
| `caption` | `string` | `""` | Overlay caption for image. |
| `aspect_ratio` | `string` | `"auto"` | Image aspect crop: `auto`, `16:9`, `4:3`, `1:1`, `3:2`, `2:1`. |
| `text` | `string` (HTML) | `""` | Card body description text (used when `content` slot is not passed). |
| `is_text_centered` | `boolean` | `false` | Center aligns card body text and actions. |
| `orientation` | `string` | `"vertical"` | Layout: `vertical` or `horizontal` (`md:card-side`). |
| `height` | `string` | `"auto"` | `auto` (adapts to content) or `full` (stretches to match grid column). |
| `style` | `string` | `"full"` | Mode: `full`, `framed`, `border` (`card-border`), `dash` (`card-dash`), `overlay` (`image-full`). |
| `size` | `string` | `"md"` | Size scale: `sm`, `md`, `lg`, `xl`. |
| `background` | `string` | `"default"` | Surface token: `default` (base-100), `base-200`, `base-300`, `primary`, `secondary`, `accent`, `neutral`, `transparent`. |
| `shadow` | `string` | `"xl"` | Shadow elevation: `none`, `sm`, `md`, `lg`, `xl`, `2xl`. |
| `border_top` | `boolean` | `false` | When true, applies a 10px top accent border (`border-t-[10px]`). |
| `border_top_color` | `string` | `"primary"` | Color of top border: `primary`, `secondary`, `accent`, `neutral`, `base-300`. |
| `card_classes` | `string` | `""` | Additional CSS utility classes. |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `header` | Custom header content (icon + title inline, stacked icon tile, badge, avatar). Overrides `heading_text`. |
| `content` | Custom content inside card body (replaces or supplements `text`). |
| `actions` | Action buttons or links placed inside `.card-actions`. |

---

## Twig Usage Examples

### 1. Icon Followed by Heading (Inline on Same Line)
```twig
{% embed 'mytheme:daisy-card' with {
  border_top: true,
  border_top_color: 'primary',
  url: '/services/cloud'
} only %}
  {% block header %}
    <h3 class="card-title text-xl font-semibold flex items-center gap-2">
      <span class="text-primary">{{ icon('phosphor', 'cloud', { color: 'currentColor' }) }}</span>
      <span>Cloud Infrastructure</span>
    </h3>
  {% endblock %}
  {% block content %}
    <p>High performance, fully managed scalable hosting.</p>
  {% endblock %}
{% endembed %}
```

### 2. Stacked Icon Feature Card
```twig
{% embed 'mytheme:daisy-card' with {
  border_top: true,
  border_top_color: 'secondary'
} only %}
  {% block header %}
    <span class="inline-flex size-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary mb-2">
      {{ icon('phosphor', 'rocket-launch', { color: 'currentColor' }) }}
    </span>
    <h3 class="card-title text-xl font-semibold">Instant Deployment</h3>
  {% endblock %}
  {% block content %}
    <p>Automate your builds with modern CI/CD pipelines.</p>
  {% endblock %}
{% endembed %}
```

### 3. Icon-Only Hero Card
```twig
{% embed 'mytheme:daisy-card' with {
  is_text_centered: true
} only %}
  {% block header %}
    <div class="mx-auto size-16 rounded-full bg-accent text-accent-content flex items-center justify-center mb-2">
      {{ icon('phosphor', 'shield-check', { color: 'currentColor' }) }}
    </div>
  {% endblock %}
  {% block content %}
    <h4 class="font-bold text-lg">Guaranteed Protection</h4>
    <p class="text-sm opacity-80">24/7 proactive security monitoring.</p>
  {% endblock %}
{% endembed %}
```

### 4. Standard Usage (No slots, using props)
```twig
{{ include('mytheme:daisy-card', {
  heading_text: 'Standard Cloud Hosting',
  text: '<p>Reliable cloud instances with 99.9% uptime SLA.</p>',
  url: '/hosting',
  border_top: true,
  border_top_color: 'primary'
}, with_context: false) }}
```
