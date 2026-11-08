# DaisyUI Drawer (`daisyui_sdc:daisy-drawer`)

A modern slide-over navigation drawer component powered by DaisyUI 5 and Drupal Core Icon API (Phosphor icons).

Features:
- **Pure-CSS Toggle**: Built on DaisyUI `.drawer` and `.drawer-toggle` checkbox.
- **Animated Swap Button**: Features DaisyUI `.swap .swap-rotate` to smoothly morph between the Phosphor `list` and `x` icons.
- **Slide from Right (`drawer-end`)**: Slides smoothly from the right edge with a backdrop overlay.
- **Automatic Page Scroll Lock**: Handled natively by DaisyUI 5 via `:root:has(.drawer-toggle:checked)`.
- **Progressive Enhancement**: Closes gracefully on `Escape` key and when menu links inside the drawer are clicked.
- **Semantic Colors**: Fully compliant with DaisyUI semantic tokens (`bg-base-100`, `text-base-content`, `border-base-300`).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | `"mobile-drawer"` | Unique HTML ID for the drawer toggle checkbox. |
| `title` | `string` | `"Menu"` | Heading text displayed in the drawer header. |
| `position` | `string` | `"end"` | `"end"` (slides from right) or `"start"` (slides from left). |
| `button_style` | `string` | `"ghost"` | DaisyUI button style (`"ghost"`, `"primary"`, `"secondary"`, `"accent"`, `"neutral"`). |
| `button_shape` | `string` | `"circle"` | Button shape (`"circle"`, `"square"`, `"default"`). |
| `button_size` | `string` | `"md"` | Button size (`"sm"`, `"md"`, `"lg"`). |
| `drawer_width` | `string` | `"w-80"` | Tailwind width class for the sliding drawer panel. |
| `icon_open` | `string` | `"list"` | Icon shown when drawer is closed. |
| `icon_close` | `string` | `"x"` | Icon shown when drawer is open. |
| `icon_pack` | `string` | `"phosphor"`| Icon pack identifier for Drupal core Icon API. |
| `button_classes`| `string` | `"md:hidden"` | Extra utility classes on the trigger button. |
| `utility_classes`| `string`| `""` | Additional Tailwind utility classes on the `.drawer` container. |
| `show_close_button` | `boolean` | `true` | Whether to render the header close button inside the drawer panel. Set to `false` when using a fixed morphing swap trigger. |

---

## Slots

| Slot | Description |
| :--- | :--- |
| `content` | Page or header content placed inside `.drawer-content` (e.g. desktop menu). |
| `drawer_content` | Content placed inside the mobile slide-over drawer (defaults to `drupal_menu('main')`). |
| `actions` | Optional secondary controls or widgets at the bottom of the drawer panel. |

---

## Examples

### 1. Basic Include (Self-contained Mobile Menu)
```twig
{{ include('daisyui_sdc:daisy-drawer', {
  title: 'Menu',
  button_classes: 'md:hidden'
}) }}
```

### 2. Embed with Desktop Navigation Slot
```twig
{% embed 'daisyui_sdc:daisy-drawer' with {
  title: 'Navigation'
} %}
  {% block content %}
    <div class="hidden md:flex justify-end items-center">
      {{ drupal_menu('main') }}
    </div>
  {% endblock %}

  {% block drawer_content %}
    {{ drupal_menu('main') }}
  {% endblock %}
{% endembed %}
```
