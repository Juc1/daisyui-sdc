# Daisy Pricing Card (`irulan:daisy-card-pricing`)

A semantic DaisyUI pricing card component designed for service packages, memberships, and subscription plans in Drupal Canvas.

## Features
- **DaisyUI Card Structure**: Uses `.card`, `.card-body`, `.card-title`, `.card-actions`, and `.badge`.
- **Theme Awareness**: Supports cascading `data-theme` overrides (`Inherit`, `Radley Blue`, `Pink`, `Radley Purple`).
- **Promoted State**: Highlights recommended plans with border/shadow emphasis, scaling, and an optional custom badge (e.g. "Recommended", "Most Popular").
- **Slotted Button Actions**: Exposes a `footer` slot, allowing editors to place modern `irulan:daisy-button` components into the card.
- **Flexible Typography**: Accommodates intro text, main price, optional frequency note, and an optional feature list.
