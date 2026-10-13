# DaisyUI Single Directory Components (SDC) for Drupal 10 & 11

A production-ready suite of semantic, accessible, and theme-agnostic **Single Directory Components (SDCs)** built with **DaisyUI 5** and **Tailwind CSS v4** for **Drupal 10.3+ / Drupal 11** and **Drupal Canvas (Experience Builder)**.

Packaged as a decoupled Drupal module so your components stay independent of your active theme, ensuring your site's landing pages and block configurations never break when switching themes.

---

## Component Catalog

| Component | Description | Key Features |
| :--- | :--- | :--- |
| **[`daisy-badge`](components/daisy-badge/)** | Small metadata indicators & tags | 10 DaisyUI color roles, 4 modifiers, sizes (`xs`-`xl`), link/span support, core icon API, `content` slot. |
| **[`daisy-button`](components/daisy-button/)** | Interactive button & anchor links | DaisyUI 5 color tokens, modifier styles, shapes (`wide`, `block`, `square`, `circle`), tooltips, `prefix`/`suffix` slots, disabled states. |
| **[`daisy-card`](components/daisy-card/)** | Flexible content & media cards | Vertical / horizontal split, **10px top accent border**, image overlays, accessible stretched link, `header`, `content`, and `actions` slots. |
| **[`daisy-divider`](components/daisy-divider/)** | Visual separators | Zero contrib dependencies (pure Twig), vertical, horizontal, and responsive orientation, start/center/end alignment, `content` slot. |
| **[`daisy-hero`](components/daisy-hero/)** | Visual page banner container | Slot-first container (`content` and `media_slot`), desktop column ratios (`1:1`, `1:2`, `2:1`), mobile stacking order, dark opacity overlays, aspect ratios. |
| **[`theme_controller_circles`](components/theme_controller_circles/)** | Multi-skin color theme switcher | Radio palette swatches with active rings, `localStorage` persistence, multi-widget synchronization, and `[data-theme-reset]` support. |
| **[`theme_controller_toggle`](components/theme_controller_toggle/)** | 2-Theme binary controller | Pure-CSS `:has()` toggle, checkbox, and animated Sun/Moon icon swap variants without requiring JS. |

---

## Installation

### Via Composer (Recommended)

Add the repository to your Drupal project:

```bash
composer require juc1/daisyui-sdc
drush en daisyui_sdc
```

### Manual Installation

Place this repository into your Drupal site's custom modules directory:

```bash
git clone https://github.com/Juc1/daisyui-sdc.git web/modules/custom/daisyui_sdc
drush en daisyui_sdc
```

---

## Twig Usage

Once enabled, all components are automatically available under the `daisyui_sdc:*` namespace:

```twig
{# Button #}
{{ include('daisyui_sdc:daisy-button', {
  label: 'Get Started',
  variant: 'primary',
  size: 'lg',
  href_url: '/contact',
}) }}

{# Badge #}
{{ include('daisyui_sdc:daisy-badge', {
  label: 'New Release',
  color: 'accent',
  style: 'outline',
}) }}

{# Card #}
{{ include('daisyui_sdc:daisy-card', {
  title: 'Feature Card',
  accent_border: true,
  content: '<p>Accessible card component with semantic tokens.</p>',
}) }}

{# Divider #}
{{ include('daisyui_sdc:daisy-divider', {
  label: 'OR',
  horizontal: false,
}) }}
```

---

## Architecture & Standards

- **Theme-Agnostic Stability**: Providing components via a module namespaces them as `daisyui_sdc:*`, protecting your Drupal Canvas pages and layouts from breaking if you ever swap themes.
- **Drupal 11 Core SDC**: Every component includes a strict `$schema` metadata file (`.component.yml`) adhering to Drupal core SDC schemas.
- **Drupal Attributes Support**: All components initialize `attributes` with `create_attribute()`, ensuring that Drupal Canvas (Experience Builder) contextual selectors, test attributes, and inline editing wrappers remain intact.
- **Zero Third-Party Contrib Dependencies**: Built without dependencies on modules like `drupal/cva`—all variant mappings run in fast, native Twig hash tables.
- **Drupal Core Icon API**: Supports Phosphor or any configured icon pack via `{{ icon(pack, name) }}`.
- **Theme-Agnostic Tokens**: Built using standard DaisyUI semantic tokens (`primary`, `secondary`, `accent`, `neutral`, `base-100`, `base-200`, `base-300`). Colors automatically inherit from whatever DaisyUI theme is active on `<html>`.
- **WCAG 2.1 AA Accessibility**: Proper semantic tags (`<a>` vs `<button>`, `<figure>`, `<figcaption>`), `aria-disabled`, `aria-label`, and accessible CSS stretched links.

---

## License

MIT
