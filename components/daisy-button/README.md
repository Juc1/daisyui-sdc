# DaisyUI Button Component (`daisy-button`)

Universal DaisyUI 5 button component for Drupal 11 Single Directory Components (SDC) and Drupal Canvas (Experience Builder).

## Overview

A flexible, theme-agnostic button component conforming strictly to DaisyUI 5 CSS specifications and modern Drupal standards. It cleanly separates semantic color tokens (`style`) from visual treatments (`variant`), supports native DaisyUI shapes and sizes, integrates with the Drupal core Icon API, and properly renders Drupal `attributes`.

## Key Features

- **Theme Agnostic**: Uses standard DaisyUI 5 color roles (`primary`, `secondary`, `accent`, `neutral`, `info`, `success`, `warning`, `error`, `ghost`, `link`). No hardcoded theme namespaces or project-specific colors.
- **DaisyUI 5 Style Modifiers**: `solid`, `outline`, `soft`, `dash`.
- **Shapes & Widths**: `default`, `wide` (`btn-wide`), `block` (`btn-block`), `square` (`btn-square`), `circle` (`btn-circle`).
- **Semantic HTML**: Renders `<a>` when `url` is provided, `<button>` when omitted.
- **Drupal Attributes Support**: Full `create_attribute()` support preserving Canvas / Experience Builder contextual tags, accessibility attributes, and custom classes.
- **Drupal Core Icon API**: Supports Phosphor or any configured icon pack via `{{ icon(pack, name) }}`.
- **SDC Slots**: `prefix` and `suffix` slots for custom badges, icons, or complex markup.
- **DaisyUI Tooltip**: Built-in `.tooltip` wrapper with `tooltip` prop.
- **Accessible & Secure**: Screen reader support via `aria_label`, disabled states via `aria-disabled` and `tabindex="-1"`, and secure external link handling (`rel="noopener noreferrer"`).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Button"` | Text label for the button. |
| `url` | `string` / `uri` | `""` | Optional link destination (also accepts `href`). Renders `<a>` if present. |
| `style` | `string` | `"primary"` | DaisyUI semantic color: `primary`, `secondary`, `accent`, `neutral`, `info`, `success`, `warning`, `error`, `ghost`, `link`. |
| `variant` | `string` | `"solid"` | Visual appearance: `solid`, `outline`, `soft`, `dash`. |
| `size` | `string` | `"md"` | Size scale: `xs`, `sm`, `md`, `lg`, `xl`. |
| `shape` | `string` | `"default"` | Shape: `default`, `wide`, `block`, `square`, `circle`. |
| `icon` | `string` | `""` | Icon identifier from the icon pack (e.g. `arrow-right`, `download`). |
| `icon_position`| `string` | `"start"` | `start` (before label) or `end` (after label). |
| `icon_pack` | `string` | `"phosphor"`| Icon pack identifier for Drupal core Icon API. |
| `tooltip` | `string` | `""` | Optional hover tooltip text. |
| `open_in_new_tab` | `boolean` | `false` | When true, adds `target="_blank"` and `rel="noopener noreferrer"`. |
| `disabled` | `boolean` | `false` | Disables button or anchor interaction with proper ARIA attributes. |
| `button_type` | `string` | `"button"` | Type attribute when rendering `<button>`: `button`, `submit`, `reset`. |
| `aria_label` | `string` | `""` | Accessible name for screen readers. |
| `title` | `string` | `""` | Standard HTML hover title attribute. |
| `data_theme` | `string` | `""` | Optional per-button DaisyUI theme override (e.g. `dark`, `light`). |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `prefix` | Custom content or badge placed before the button label (inside the button). |
| `suffix` | Custom content or badge placed after the button label (inside the button). |

---

## Twig Usage Examples

### 1. Basic Action Button
```twig
{{ include('mytheme:daisy-button', {
  label: 'Get Started',
  url: '/register',
  style: 'primary'
}, with_context: false) }}
```

### 2. Outline Button with Right Icon
```twig
{{ include('mytheme:daisy-button', {
  label: 'Learn More',
  url: '/about',
  style: 'secondary',
  variant: 'outline',
  icon: 'arrow-right',
  icon_position: 'end'
}, with_context: false) }}
```

### 3. Icon-Only Circle Button with Tooltip
```twig
{{ include('mytheme:daisy-button', {
  icon: 'share-network',
  shape: 'circle',
  style: 'ghost',
  tooltip: 'Share this page',
  aria_label: 'Share this page'
}, with_context: false) }}
```

### 4. Button with Suffix Badge via Slot
```twig
{% embed 'mytheme:daisy-button' with {
  label: 'Inbox',
  style: 'neutral'
} only %}
  {% block suffix %}
    <span class="badge badge-sm badge-primary ml-1">3</span>
  {% endblock %}
{% endembed %}
```
