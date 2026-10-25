# Daisy Card Teaser (`daisyui_sdc:daisy-card-teaser`)

Streamlined, pure-prop teaser card component built specifically for Drupal **Views grid listings, taxonomy term lists, and Content Template card view modes** (`node.*.card`).

---

## Why Use This Over `daisy-card`?

* **Zero Slot Clutter:** Has **no slots**, meaning Canvas UI displays clean, finished cards without empty placeholder boxes or dropzone outlines.
* **Accessible Stretched Link:** Uses an accessible pseudo-link (`after:absolute after:inset-0`) so the entire card is clickable to the target node URL without risk of nested link collisions.
* **Views Grid Equal-Height Built-in:** Includes `in-[.views-row]:h-full! in-[.views-row]:self-stretch! in-[.views-row]:flex-1` classes so cards in a grid row stretch to equal height automatically.
* **Pinned Metadata Footer:** The date/reading-time metadata uses `mt-auto` to pin consistently to the bottom of the card body regardless of summary text length.
* **Theme Decoupled:** Lives in the `daisyui_sdc` module, satisfying the **Golden Rule** (fungible across any theme).

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `heading_text` | `string` | `"Article Title"` | Title of the node/article. |
| `level` | `number` (2–6) | `3` | Heading HTML tag (`<h2>`–`<h6>`). |
| `url` | `string` (uri) | `""` | Destination URL (stretched across entire card). |
| `media` | `object` (`canvas.module/image`) | `null` | Featured image (`src`, `alt`, `width`, `height`). |
| `aspect_ratio` | `enum` | `'3:2'` | `'auto'`, `'16:9'`, `'4:3'`, `'1:1'`, `'3:2'`, `'2:1'`. |
| `text` | `string` (html) | `""` | Summary / excerpt text. |
| `category` | `string` | `""` | Optional top category badge (e.g. "News", "Skincare"). |
| `date` | `string` | `""` | Optional metadata pinned to the bottom (e.g. "Oct 25, 2026", "5 min read"). |
| `orientation` | `enum` | `'vertical'` | `'vertical'`, `'horizontal'`. |
| `style` | `enum` | `'full'` | `'full'`, `'framed'`, `'border'`, `'dash'`. |
| `size` | `enum` | `'md'` | `'sm'`, `'md'`, `'lg'`, `'xl'`. |
| `background` | `enum` | `'default'` | `'default'`, `'base-200'`, `'base-300'`, `'primary'`, `'secondary'`, `'accent'`, `'neutral'`, `'transparent'`. |
| `shadow` | `enum` | `'xl'` | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`. |
| `border_top` | `boolean` | `false` | Prominent 10px top accent border. |
| `border_top_color` | `enum` | `'primary'` | `'primary'`, `'secondary'`, `'accent'`, `'neutral'`, `'base-300'`. |
| `card_classes` | `string` | `""` | Extra CSS classes. |

---

## Usage in Canvas UI (Content Template: `node.blog_post.card`)

1. In Canvas UI, select or add **Daisy Card Teaser**.
2. In the settings sidebar, map:
   * **Title** $\to$ `node:blog_post.title`
   * **Link URL** $\to$ `host-entity-url`
   * **Image Media** $\to$ `node:blog_post.field_blog_image`
   * **Summary** $\to$ `node:blog_post.body` (summary)
   * **Date or Metadata** $\to$ `node:blog_post.created`
