# DaisyUI Single Directory Components (SDC) for Drupal 10 & 11

A production-ready suite of semantic, accessible, and theme-agnostic **Single Directory Components (SDCs)** built with **DaisyUI 5** and **Tailwind CSS v4** for **Drupal 10.3+ / Drupal 11** and **Drupal Canvas (Experience Builder)**.

Packaged as a decoupled Drupal module so your components stay independent of your active theme, ensuring your site's landing pages and block configurations never break when switching themes.

---

## Component Catalog

| Component | Description | Key Features |
| :--- | :--- | :--- |
| **[`daisy-badge`](components/daisy-badge/)** | Small metadata indicators & tags | 10 DaisyUI color roles, 4 modifiers, sizes (`xs`-`xl`), link/span support, core icon API, `content` slot. |
| **[`daisy-button`](components/daisy-button/)** | Interactive button & anchor links | DaisyUI 5 color tokens, modifier styles, shapes (`wide`, `equal`, `block`, `square`, `circle`), tooltips, disabled states. |
| **[`daisy-card-pricing`](components/daisy-card-pricing/)** | Pricing plan card | Tier highlight badge, pricing display, description, and action button slot. |
| **[`daisy-card-teaser`](components/daisy-card-teaser/)** | Structured teaser card (pure props, zero slots) | Ideal for Views grids & content templates. Configurable image, title, excerpt/body, date/author meta, button link with accessible stretched click area. |
| **[`daisy-card-testimonial`](components/daisy-card-testimonial/)** | Testimonial & quote card | Formatted quote, avatar portrait, author citation, and flexible vertical alignments. |
| **[`daisy-card-with-slots`](components/daisy-card-with-slots/)** | Flexible composable card container (slots) | Open container card with `content` and `actions` slots, optional image, and customizable styles for flexible Canvas UI composition. |
| **[`daisy-divider`](components/daisy-divider/)** | Visual separators | Zero contrib dependencies (pure Twig), solid continuous line or text/icon, vertical, horizontal, and responsive orientation, start/center/end alignment, `content` slot. |
| **[`daisy-hero-centered`](components/daisy-hero-centered/)** | Visual page banner container | Slot-first container (`content` and `media_slot`), desktop column ratios (`1:1`, `1:2`, `2:1`), mobile stacking order, dark opacity overlays, aspect ratios. |
| **[`daisy-hero-with-figure`](components/daisy-hero-with-figure/)** | Turnkey two-column hero (pure props) | Immediate Canvas preview with side media, headline, text, and 1 or 2 responsive CTAs (1 centered, 2 side-by-side on desktop / stacked on mobile). |
| **[`daisy-hero-with-figure-slots`](components/daisy-hero-with-figure-slots/)** | Composable two-column hero container | Side media paired with an open `content` slot for nested Drupal blocks, webforms, or custom layouts. |
| **[`daisy-list`](components/daisy-list/)** | Icon + text list container | DaisyUI 5 `.list` + `.list-row` grid rows, automatic `<ul><li>` parsing, core icon API, semantic icon colors, clean/divided/boxed styles, `items` slot. |
| **[`theme_controller_circles`](components/theme_controller_circles/)** | Multi-skin color theme switcher | Radio palette swatches with active rings, `localStorage` persistence, multi-widget synchronization, and `[data-theme-reset]` support. |
| **[`theme_controller_toggle`](components/theme_controller_toggle/)** | 2-Theme binary controller | Pure-CSS `:has()` toggle, checkbox, and animated Sun/Moon icon swap variants without requiring JS. |

---

### Card & Hero Component Inputs

#### [`daisy-card-teaser`](components/daisy-card-teaser/)
##### Inputs
- `heading_text` (prop: Title text)
- `url` (prop: Destination link URL)
- `media` (prop: Image media object)
- `caption` (prop: Image caption text)
- `text` (prop: Summary / excerpt rich text)
- `category` (prop: Category / tag label)
- `date` (prop: Date or metadata text)
- `icon` (prop: Icon identifier, e.g. 'rocket', 'star')

#### [`daisy-card-with-slots`](components/daisy-card-with-slots/)
##### Inputs
- `media` (prop: Image media object)
- `caption` (prop: Image caption text)
- `content` (slot: Main card content area)
- `actions` (slot: Card action buttons or links)

#### [`daisy-card-pricing`](components/daisy-card-pricing/)
##### Inputs
- `heading_text` (prop: Plan heading text)
- `description` (prop: Plan description rich text)
- `price` (prop: Price string)
- `badge_text` (prop: Highlight badge text)
- `footer` (slot: Action buttons or links)

#### [`daisy-card-testimonial`](components/daisy-card-testimonial/)
##### Inputs
- `rich_text` (prop: Testimonial quote rich text)
- `cite_name` (prop: Citation author name)
- `cite_text` (prop: Citation role / company title)
- `cite_url` (prop: Citation link URL)
- `media` (prop: Author portrait avatar object)

#### [`daisy-hero-centered`](components/daisy-hero-centered/)
##### Inputs
- `background_media` (prop: Background image media object)
- `title` (prop: Headline title text)
- `text` (prop: Body copy rich text)
- `cta_text` (prop: Call-to-action button label)
- `cta_url` (prop: Call-to-action button URL)
- `content` (slot: Main content area)

#### [`daisy-hero-with-figure`](components/daisy-hero-with-figure/)
##### Inputs
- `media` (prop: Side media image object)
- `title` (prop: Headline title text)
- `text` (prop: Body copy rich text)
- `cta_text` (prop: Primary call-to-action button label)
- `cta_url` (prop: Primary call-to-action button URL)
- `cta2_text` (prop: Secondary call-to-action button label)
- `cta2_url` (prop: Secondary call-to-action button URL)

#### [`daisy-hero-with-figure-slots`](components/daisy-hero-with-figure-slots/)
##### Inputs
- `media` (prop: Side media image object)
- `content` (slot: Main content area)

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

{# Teaser Card (Pure Props, no slots - ideal for Views & nodes) #}
{{ include('daisyui_sdc:daisy-card-teaser', {
  title: 'Blog Post Title',
  url: '/blog/post-1',
  text: 'Excerpt summary text...',
  image: '/sites/default/files/blog.jpg',
  button_text: 'Read more',
}) }}

{# Composable Card with Slots #}
{% embed 'daisyui_sdc:daisy-card-with-slots' with {
  image: '/sites/default/files/hero.jpg',
  accent_border: true,
} %}
  {% block content %}
    <h3 class="card-title text-xl font-bold">Custom Heading</h3>
    <p>Custom content dropped into the card slot.</p>
  {% endblock %}
  {% block actions %}
    {{ include('daisyui_sdc:daisy-button', { label: 'Click here' }) }}
  {% endblock %}
{% endembed %}

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
