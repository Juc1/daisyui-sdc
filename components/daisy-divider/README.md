# DaisyUI Divider Component (`daisy-divider`)

Universal DaisyUI 5 Divider component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A flexible visual separator component adhering strictly to DaisyUI 5 CSS specifications and standard Drupal SDC standards. It creates visual divisions between elements vertically or horizontally, with support for text labels, icons, semantic colors, and custom content blocks via SDC slots.

## Key Features

- **Zero Contrib Dependencies**: Written in pure Twig without requiring `drupal/cva` or third-party extensions.
- **Direction Control**: `vertical` (stacked), `horizontal` (side-by-side flex/grid), and responsive options (`responsive-md`, `responsive-lg`).
- **DaisyUI 5 Color Tokens**: `default`, `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`.
- **Text & Icon Placement**: Alignment to `center`, `start` (top/left), or `end` (bottom/right).
- **Drupal Core Icon API**: Supports any icon pack (defaults to `phosphor`) via `{{ icon(pack, name) }}`.
- **Slot Extensibility**: Custom badges, buttons, or chips can be embedded via the `content` slot.
- **Full Drupal `attributes` Support**: Seamlessly merges Canvas metadata and contextual attributes.

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | `""` | Optional text displayed inside the divider (e.g. `'OR'`). Leave empty for a solid continuous line. |
| `color` | `string` | `"default"` | Theme color: `default`, `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`. |
| `direction` | `string` | `"vertical"` | Orientation: `vertical`, `horizontal`, `responsive-md`, `responsive-lg`. |
| `position` | `string` | `"center"` | Placement: `center`, `start`, `end`. |
| `icon` | `string` | `""` | Optional icon identifier (e.g. `'dots-three'`). |
| `icon_pack` | `string` | `"phosphor"` | Icon pack identifier for Drupal core Icon API. |
| `divider_classes` | `string` | `""` | Additional CSS classes. |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Custom markup placed inside the divider (replaces or augments text/icon). |

---

## Twig Usage Examples

### 1. Plain Continuous Line Divider
```twig
{{ include('mytheme:daisy-divider', {
  color: 'neutral'
}, with_context: false) }}
```

### 2. Basic Text Divider
```twig
{{ include('mytheme:daisy-divider', {
  text: 'OR',
  color: 'neutral'
}, with_context: false) }}
```

### 3. Responsive Divider (Vertical on mobile, Horizontal on desktop)
```twig
{{ include('mytheme:daisy-divider', {
  text: 'AND',
  direction: 'responsive-md',
  color: 'primary'
}, with_context: false) }}
```

### 3. Divider with Badge via Slot
```twig
{% embed 'mytheme:daisy-divider' with {
  color: 'accent'
} only %}
  {% block content %}
    <span class="badge badge-accent">Featured Section</span>
  {% endblock %}
{% endembed %}
```
