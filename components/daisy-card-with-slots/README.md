# Daisy Card (with Slots) (`daisyui_sdc:daisy-card-with-slots`)

Flexible DaisyUI card frame with media controls and interactive drag-and-drop slots for building custom marketing cards and layout blocks in Canvas UI.

---

## Slots

* **`content` (Card Content):** Drop Headings, Text blocks, Badges, or other components here.
* **`actions` (Card Actions):** Drop Buttons or Action links here (rendered inside `.card-actions`).

---

## Props

* `media`: Featured image object (`$ref: json-schema-definitions://canvas.module/image`).
* `caption`: Image caption.
* `aspect_ratio`: Media aspect ratio (`auto`, `16:9`, `4:3`, `1:1`, `3:2`, `2:1`).
* `orientation`: `vertical` (stacked) or `horizontal` (side-by-side).
* `height`: `auto` or `full`.
* `style`: `full` (default), `framed`, `border`, `dash`, `overlay`.
* `size`: `sm`, `md` (default), `lg`, `xl`.
* `background`: `default` (base-100), `base-200`, `base-300`, `primary`, `secondary`, `accent`, `neutral`, `transparent`.
* `shadow`: `none`, `sm`, `md`, `lg`, `xl`, `2xl`.
* `border_top`: Prominent 10px top accent border.
* `border_top_color`: `primary`, `secondary`, `accent`, `neutral`, `base-300`.
* `is_text_centered`: Center aligns content and actions.
* `card_classes`: Extra utility classes.
