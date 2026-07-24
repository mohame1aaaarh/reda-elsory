---
name: رضا السوري | Reda El-Sory
description: Syrian restaurant menu & ordering platform — "Premium, Warm, Authentic"
colors:
  primary: "#8B0000"
  primary-light: "#C62828"
  primary-dark: "#5D0000"
  gold: "#C8A45C"
  gold-light: "#E8C97A"
  gold-dark: "#A8883C"
  cream: "#FFF8F0"
  cream-dark: "#F5E6D0"
  card-start: "#FFFBF5"
  card-end: "#FFF5E6"
typography:
  display:
    fontFamily: "Readex Pro, Noto Sans Arabic, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Readex Pro, Noto Sans Arabic, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "Readex Pro, Noto Sans Arabic, sans-serif"
    fontSize: "clamp(1rem, 2.5vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Readex Pro, Noto Sans Arabic, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Readex Pro, Noto Sans Arabic, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  pill: "9999px"
spacing:
  px: "1rem"
  py: "0.75rem"
  section: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card:
    backgroundColor: "linear-gradient(135deg, {colors.card-start}, {colors.card-end})"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
  input:
    backgroundColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: رضا السوري | Reda El-Sory

## 1. Overview

**Creative North Star: "The Warm Welcome"**

The interface carries the generosity of Syrian hospitality — deep crimson warmth, gold accents like candlelight, cream-background comfort. Every surface feels touched by care: card gradients shift subtly, gold catches the eye at interaction points, and the crimson primary appears where action happens. The system rejects fast-food urgency — no countdowns, no garish sale badges, no cheap brights. It is a well-appointed family restaurant online: warm enough to feel welcome, polished enough to feel premium.

**Key Characteristics:**
- Single Arabic-optimized font (Readex Pro) across all roles — weights do the hierarchy work
- Warm cream gradient backgrounds with gold diamond pattern overlay as a heritage texture
- Crimson primary used decisively on interactive elements, never as a body background
- Gold accents as secondary signals — price badges, decorative borders, hover glow
- Card shine and hover elevation provide tactile feedback without relying on heavy shadows
- Arabic-first layout with RTL as native direction, not a translation adaptation

## 2. Colors

A warm, rich palette built on Syrian hospitality cues: the confidence of deep crimson, the warmth of gold, and the comfort of cream. No cold blues or clinical whites.

### Primary
- **Damascus Crimson** (`#8B0000`): The brand's assertive voice. Used for primary buttons, nav text on scroll, active states, cart badges, and key headings. Never used as a page background — its power is in decisive application on interactive surfaces.
- **Crimson Light** (`#C62828`): Hover state for primary elements. Adds lift without changing the hue family.
- **Crimson Dark** (`#5D0000`): Hero overlays, footer backgrounds, deep-background sections. Provides tonal structure behind content.

### Secondary
- **Aleppo Gold** (`#C8A45C`): The warmth accent. Price badges, decorative borders, hover glows, pattern overlays. Never used as a text color on light backgrounds below 14px (insufficient contrast).
- **Gold Light** (`#E8C97A`): Gradient partners, hover highlights, glow effects.
- **Gold Dark** (`#A8883C`): Gold-toned text on cream backgrounds, decorative lines.

### Neutral
- **Warm Cream** (`#FFF8F0`): Page background base. A true cream with subtle warmth, no green or gray undertones.
- **Deeper Cream** (`#F5E6D0`): Gradient endpoint for the body background. The gentle shift from top to bottom creates depth without a shadow.
- **Card Cream** (`#FFFBF5` → `#FFF5E6`): Card surface gradient. Warm white shifting to a slightly deeper cream — feels tactile and inviting.
- **Body Ink** (`#1a1a2e`): All body text. A very-dark-blue-tinged black that reads warmer than pure `#000`.

### Named Rules

**The Hospitality Rule.** Crimson commands action; gold rewards attention. When a user needs to decide (add to cart, order), use crimson. When they need to feel valued (price, deal, decoration), use gold. Never invert these roles.

**The Two-Tone Floor Rule.** No flat neutral surfaces. Every background is a gradient (body: cream → deeper cream, cards: card-start → card-end, hero: primary-dark overlay). The gradient is subtle enough to feel like a single color but rich enough to avoid flatness.

## 3. Typography

**Display & Body Font:** Readex Pro (Arabic-optimized variable font, with Noto Sans Arabic fallback)

**Character:** A single Arabic-optimized typeface doing all the work — weight contrast replaces font contrast. Readex Pro's generous apertures and tall ascenders suit Arabic script's vertical rhythm. The bold (700) and extra-bold (800) weights provide the hierarchy punch that a mono-family system relies on.

### Hierarchy

- **Display** (ExtraBold 800, `clamp(1.75rem, 5vw, 2.5rem)`, 1.2 line-height): Hero headline and major section titles. Set against dark backgrounds (hero overlay, footer) for maximum gravity. `text-wrap: balance`.
- **Headline** (Bold 700, `clamp(1.5rem, 4vw, 2rem)`, 1.3 line-height): Section headings within the page body. Always paired with adequate white space above (≥3rem).
- **Title** (Bold 700, `clamp(1rem, 2.5vw, 1.25rem)`, 1.4 line-height): Menu item names, card titles, category headers. The bold weight distinguishes items from body text.
- **Body** (Medium 500, `0.9375rem`, 1.7 line-height): Descriptions, cart details, all running text. Capped at 65–75ch. The medium weight prevents Arabic text from looking too light at small sizes.
- **Label** (Regular 400, `0.75rem`, 1.0 line-height): Secondary metadata, badges, small print. Regular weight at small size reads cleanly in Arabic script.

### Named Rules

**The One-Family Rule.** Readex Pro is the only font family. No pairings, no contrast axes. Hierarchy comes from weight (400 → 500 → 700 → 800) and size alone. This is a deliberate constraint: when every weight lives in one family, the scale relationship is harmonious by definition.

## 4. Elevation

Depth is layered — background tones do the structural work (cream → deeper cream gradient for the page, warmer gradient for cards, dark overlay for hero). Shadows are reserved for interactive feedback, not structural separation.

### Shadow Vocabulary

- **Surface shadow** (`0 4px 6px rgba(0,0,0,0.06)`): Cards and containers at rest. Noticeable but not structural — it signals "this is a surface" without floating.
- **Hover elevation** (`0 12px 24px rgba(139,0,0,0.12)`): Card hover state with crimson tint. The shadow takes on the brand color temperature, not a neutral gray.
- **Modal depth** (`0 25px 50px rgba(0,0,0,0.25)`): Lightbox overlays and drawers. Dark, wide blur to separate modal content from the page.

### Named Rules

**The Tinted Shadow Rule.** Hover shadows carry the brand hue (crimson at 12%), never neutral gray. A shadow that matches the brand color feels intentional; a gray shadow feels like a system default.

## 5. Components

### Buttons
- **Shape:** Gently curved corners (12px / `rounded-xl`). Never pill-shaped except for cart quantity badges.
- **Primary (Crimson):** Deep crimson fill (`#8B0000`), white text, medium weight at 0.875rem. Shadow: `0 4px 12px rgba(139,0,0,0.2)`. Hover: lighten to `#C62828`, elevate shadow. Active: `scale(0.95)`.
- **Ghost (Gold border):** Transparent fill, gold border at 20% opacity, gray text. Hover: crimson fill, white text, crimson shadow. Used for size/option selection.
- **Quantity Stepper:** Inline flex group with − / count / + segments. Crimson text on white, hover fills each cell with crimson. Compact (32px cells).

### Cards / Menu Item Cards
- **Corner Style:** 16px radius (`rounded-2xl`), with a subtle inner gradient border via `border-gold/12`.
- **Background:** Gradient from `#FFFBF5` to `#FFF5E6` — warm white shifting to delicate cream. A crimson overlay (2% opacity) fades in on hover.
- **Shadow:** Surface shadow at rest, hover elevation with crimson tint on hover.
- **Shine Effect:** A diagonal white highlight sweeps left-to-right on hover (`card-shine` class) — a tactile luxury cue, invisible at rest.
- **Internal Padding:** 16–20px. Image thumbnail at 64–72px with gold border ring.

### Navigation
- **Fixed Navbar:** Transparent on hero sections, white/95 with backdrop-blur and shadow-lg on scroll. Logo in white (transparent) or crimson (scrolled). Links white/80 on hero, gray-700 on scroll. Desktop: horizontal link row. Mobile: hamburger → full-width dropdown.
- **Menu Category Nav:** Sticky horizontal scroll bar below the menu header. Gold underline indicator on active category. Hide-scrollbar utility for clean appearance.
- **Footer:** Dark background (`from-[#0d0000] via-[#1a0000] to-[#0d0000]`), gold pattern overlay, white/gold text. Logo + brand tagline + quick links + WhatsApp CTA + social links.

### Inputs & Forms
- **Style:** White fill, 12px radius, 1px gold/20 border. Focus: crimson border with glow. RTL-aware padding.
- **Checkout fields:** Phone input with Egyptian number validation (`01[0125][0-9]{8}`).

### Cart
- **Drawer:** Slides in from the left (`animate-slide-up` on mobile). Fixed overlay with backdrop blur. Shows item list with quantity steppers, subtotal, total, and WhatsApp checkout CTA.
- **Bottom Bar (mobile):** Fixed at bottom, visible when items > 0. Shows count + total + "View Cart" button. Slides up with animation.
- **Button (desktop):** Gold circular badge with item count. Bounce animation on add.

### Tags & Badges
- **Spicy:** Red-500 background (`#EF4444`), white text, pill shape.
- **Regular/Mild:** Blue-500 background (`#3B82F6`), white text, pill shape.
- **Nutrition:** Green-500 (`#22C55E`) background, white text, pill shape.
- **Price Badge:** Gold gradient (`from-gold/20 to-gold/5`) with gold-dark text. Rounded, compact.

### Loading
- **Skeleton Shimmer:** Gradient animation on gray-200 base (`#f0e6d8` to `#e8dcc8`). Used for menu items and cart placeholders.

### Signature: Lightbox
- **Overlay:** Fixed full-screen, black/80 with backdrop-blur-sm. Fade-in animation (0.25s).
- **Image:** Scale-in animation (0.3s) from 0.9x. Close button top-left in white circle.
- **Dismiss:** Click overlay or close button.

## 6. Do's and Don'ts

### Do:

- **Do** use Damascus Crimson for all primary actions (add to cart, order, submit). Gold is the supporting accent.
- **Do** keep the warm cream gradient as the body background. The subtle top-to-bottom shift is the system's depth foundation.
- **Do** use Readex Pro across all roles. Weight contrast (400/500/700/800) is the sole hierarchy mechanism.
- **Do** tint hover shadows with the brand hue (crimson at 10–15% opacity) rather than neutral gray.
- **Do** use the card-shine effect on hoverable cards — the diagonal white sweep adds tactile luxury without animation overhead.
- **Do** maintain RTL-native layout: padding, icon positioning, and text alignment designed for Arabic first.

### Don't:

- **Don't** use fast-food visual language — bright primary colors (yellow/red combos), countdown timers, giant discount badges.
- **Don't** default to dark mode. The interface is warm and cream-based — dark would strip the hospitality warmth.
- **Don't** strip cultural identity for minimalist convenience. The gold diamond pattern, the crimson depth, the card gradients — these are not decoration, they're the brand's warmth made visible.
- **Don't** pair a second font family with Readex Pro. The one-family constraint is deliberate.
- **Don't** use flat neutral backgrounds. Every surface has a gradient, even if subtle.
- **Don't** use a generic gray shadow on hover — it dilutes the brand temperature.
- **Don't** put crimson text on a cream background below 14px — contrast fails.
