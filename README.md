# DaisyUI Single Directory Components (SDC) for Drupal 11 & Canvas

A production-ready suite of semantic, accessible, and theme-agnostic **Single Directory Components (SDCs)** built with **DaisyUI 5** and **Tailwind CSS v4** for **Drupal 11** and **Drupal Canvas (Experience Builder)**.

---

## Component Catalog

| Component | Description | Key Features |
| :--- | :--- | :--- |
| **[`daisy-badge`](daisy-badge/)** | Small metadata indicators & tags | 10 DaisyUI color roles, 4 modifiers, sizes (`xs`-`xl`), link/span support, core icon API, `content` slot. |
| **[`daisy-button`](daisy-button/)** | Interactive button & anchor links | DaisyUI 5 color tokens, modifier styles, shapes (`wide`, `block`, `square`, `circle`), tooltips, `prefix`/`suffix` slots, disabled states. |
| **[`daisy-card`](daisy-card/)** | Flexible content & media cards | Vertical / horizontal split, **10px top accent border**, image overlays, accessible stretched link, `header`, `content`, and `actions` slots. |
| **[`daisy-divider`](daisy-divider/)** | Visual separators | Zero contrib dependencies (pure Twig), vertical, horizontal, and responsive orientation, start/center/end alignment, `content` slot. |
| **[`daisy-hero`](daisy-hero/)** | Visual page banner container | Slot-first container (`content` and `media_slot`), desktop column ratios (`1:1`, `1:2`, `2:1`), mobile stacking order, dark opacity overlays, aspect ratios. |

---

## Architecture & Standards

- **Drupal 11 Core SDC**: Every component includes a strict `$schema` metadata file (`.component.yml`) adhering to Drupal core SDC schemas.
- **Drupal Attributes Support**: All components initialize `attributes` with `create_attribute()`, ensuring that Drupal Canvas (Experience Builder) contextual selectors, test attributes, and inline editing wrappers remain intact.
- **Zero Third-Party Contrib Dependencies**: Built without dependencies on modules like `drupal/cva`—all variant mappings run in fast, native Twig hash tables.
- **Drupal Core Icon API**: Supports Phosphor or any configured icon pack via `{{ icon(pack, name) }}`.
- **Theme-Agnostic Tokens**: Built using standard DaisyUI semantic tokens (`primary`, `secondary`, `accent`, `neutral`, `base-100`, `base-200`, `base-300`). No hardcoded brand names or theme namespaces.
- **WCAG 2.1 AA Accessibility**: Proper semantic tags (`<a>` vs `<button>`, `<figure>`, `<figcaption>`), `aria-disabled`, `aria-label`, and accessible CSS stretched links.

---

## Installation into a Drupal Theme

Copy the components into your custom theme's components folder (recommended subfolder: `components/daisyui/`):

```bash
# Example: clone or copy directly into your theme
cp -r daisy-button daisy-hero daisy-card daisy-badge daisy-divider /path/to/drupal/web/themes/custom/[THEMENAME]/components/daisyui/
```

After adding components, rebuild Drupal's cache:
```bash
drush cr
```

---

## License

MIT
