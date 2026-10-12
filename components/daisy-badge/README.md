# DaisyUI Badge Component (`daisy-badge`)

Universal DaisyUI 5 Badge component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A flexible badge component for status indicators, counts, tags, and small metadata highlights. Supports all DaisyUI 5 semantic color roles, modifiers (`solid`, `outline`, `soft`, `dash`), size variations, icons, link interaction, and slot customization.

## Key Features

- **Drupal Attributes Support**: Full `create_attribute()` support preserving Canvas / Experience Builder selectors and contextual classes.
- **DaisyUI 5 Color Roles**: `primary`, `secondary`, `accent`, `neutral`, `muted`, `info`, `success`, `warning`, `error`, `ghost`.
- **Modifier Styles**: `solid`, `outline`, `soft`, `dash`.
- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`.
- **Clean Icon Integration**: Uses Drupal core Icon API without hardcoding defaults or theme namespaces.
- **Accessible**: Semantic `<a>` when `url` is provided, `<span>` when static; no redundant `aria-label` doubling.
- **SDC Slot (`content`)**: Easily inject custom indicators, pulse dots, or complex micro-markup.

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Badge"` | Visible badge text. |
| `url` | `string` / `uri` | `""` | Optional link URL. If present, renders an `<a>` tag. |
| `open_in_new_tab` | `boolean` | `false` | When true, adds `target="_blank"` and `rel="noopener noreferrer"`. |
| `style` | `string` | `"primary"` | Color role: `primary`, `secondary`, `accent`, `neutral`, `muted`, `info`, `success`, `warning`, `error`, `ghost`. |
| `variant` | `string` | `"solid"` | Visual modifier: `solid`, `outline`, `soft`, `dash`. |
| `size` | `string` | `"md"` | Size scale: `xs`, `sm`, `md`, `lg`, `xl`. |
| `text_color` | `string` | `"default"` | Text color override: `default`, `black`, `white`, `primary`. |
| `icon` | `string` | `""` | Optional icon identifier (e.g. `'star'`, `'check'`). |
| `icon_position` | `string` | `"start"` | `start` (before label) or `end` (after label). |
| `icon_pack` | `string` | `"phosphor"`| Icon pack identifier for Drupal core Icon API. |
| `aria_label` | `string` | `""` | Optional accessible label override for assistive technology. |
| `badge_classes` | `string` | `""` | Additional CSS utility classes. |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Custom markup replacing default text/icon (e.g. status dot + number). |

---

## Twig Usage Examples

### 1. Basic Status Badge
```twig
{{ include('mytheme:daisy-badge', {
  label: 'Featured',
  style: 'primary',
  variant: 'soft'
}, with_context: false) }}
```

### 2. Clickable Category Badge with Icon
```twig
{{ include('mytheme:daisy-badge', {
  label: 'Design',
  url: '/categories/design',
  style: 'accent',
  icon: 'tag'
}, with_context: false) }}
```

### 3. Custom Indicator via Slot
```twig
{% embed 'mytheme:daisy-badge' with {
  style: 'neutral',
  variant: 'outline'
} only %}
  {% block content %}
    <span class="inline-block size-2 rounded-full bg-success mr-1"></span>
    <span>Operational</span>
  {% endblock %}
{% endembed %}
```
