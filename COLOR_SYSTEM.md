# Whalelord Compass Design System — Color & Button System (Hybrid Final)

## Core Brand
* **Primary / Brand Blue**: `#025E96`
* **Primary Hover**: `#01385A`

## Text
* **Primary Text (Ink)**: `#1A202C`
* **Secondary Text**: `#718096`
* **Inverse Text**: `#FFFFFF`

## Surfaces (Semantic Whites)
These are not accents — they are surface layers.

* **Base / Neutral White**: `#F7FAFC` — Default canvas, cards, modals
* **Cool Surface (Ice)**: `#D9F0F2` — Used for:
  * Secondary sections
  * Data tables
  * Product cards
  * Hover fills for outline buttons
* **Warm Surface (Sand)**: `#EDE6D8` — Used for:
  * Editorial sections
  * Empty states
  * Footers
  * Story / brand content
* **Light Surface (Kelp 50)**: `#E6F2F8` — Used for:
  * Light buttons on dark backgrounds
  * Subtle highlights
  * Tertiary sections

## Borders & Dividers
* **Default Border / Divider**: `#E2E8F0`
* **Neutral Border (Gray)**: `#CBD5E0`
* **Hover Border**: `#A0AEC0`

## Semantic Signals (Micro-use only)
Never used as primary button fills — icons, badges, subtle highlights only
* **Success**: `#48BB78`
* **Error / Destructive**: `#C24E3A`
* **Warning**: `#F59E0B`
* **Info**: `#025E96`

---

## Button System — Light Backgrounds

### Primary (Filled Blue)
* **Background**: `#025E96`
* **Text**: `#FFFFFF`
* **Hover**: `#01385A` + underline
* **Disabled**: `#CBD5E0` background, `#A0AEC0` text

### Primary Outline
* **Background**: transparent
* **Border**: `#025E96` (1px)
* **Text**: `#025E96`
* **Hover background**: `#D9F0F2` (Ice surface)
* **Hover border**: `#01385A`
* **Disabled**: `#E2E8F0` border, `#A0AEC0` text

### Secondary Outline (Tertiary Stroke)
* **Background**: transparent
* **Border**: `#CBD5E0` (1px)
* **Text**: `#1A202C`
* **Hover background**: `#F7FAFC`
* **Hover border**: `#A0AEC0`
* **Disabled**: `#E2E8F0` border, `#A0AEC0` text

### Neutral (White)
* **Background**: `#F7FAFC`
* **Border**: `#E2E8F0` (1px)
* **Text**: `#1A202C`
* **Hover background**: `#E2E8F0`
* **Hover border**: `#CBD5E0`
* **Disabled**: `#F7FAFC` background, `#A0AEC0` text

---

## Button System — Dark Backgrounds
(Use on `#025E96` or darker)

### Primary Light (Filled)
* **Background**: `#E6F2F8` (Kelp 50)
* **Text**: `#1A202C`
* **Hover**: `#CCE5F1` (Kelp 100)
* **Disabled**: `#718096` background, `#A0AEC0` text

### Primary Light Outline
* **Background**: transparent
* **Border**: `#E6F2F8` (1px)
* **Text**: `#E6F2F8`
* **Hover background**: rgba(230, 242, 248, 0.1)
* **Hover border**: `#CCE5F1`
* **Disabled**: `#718096` border and text

### Tertiary (Text Only)
* **Text**: `#E6F2F8`
* **Hover**: underline + `#CCE5F1` text
* **Disabled**: `#718096` text

---

## Button Sizes

| Size | Height | Padding Horizontal | Font Size |
|------|--------|-------------------|-----------|
| **Small** | 32px | 16px | 14px |
| **Medium** (default) | 40px | 24px | 16px |
| **Large** | 48px | 32px | 18px |

**Note**: Outline buttons reduce horizontal padding by 1px to account for border (e.g., 23px instead of 24px for medium)

---

## Button States

### All Buttons Support:
1. **Default** — Base state
2. **Hover** — Interactive feedback
3. **Active/Pressed** — Click state (same as hover)
4. **Focus** — 2px outline at 2px offset in `#025E96`
5. **Disabled** — Reduced opacity, no interaction
6. **Loading** — Spinner icon replaces content

---

## Icon Guidelines

### Icon Placement:
* **Icon Left**: 16×16px icon + 8px gap + text
* **Icon Right**: text + 8px gap + 16×16px icon
* **Icon Only**: 16×16px centered in button

### Loading State:
* Replace button content with spinning icon
* Maintain button dimensions
* Disable interaction

---

## Key Rules (Do Not Break)

1. ✅ **#D9F0F2 and #EDE6D8 are surfaces, not accents**
2. ✅ **Hierarchy comes from fill, not color**
3. ✅ **Semantic colors support meaning, never dominance**
4. ✅ **White text only on dark or high-emphasis buttons**
5. ✅ **Outline buttons always have 1px borders**
6. ✅ **All hover states include visual feedback (color + underline/opacity)**
7. ✅ **Focus states are always visible for accessibility**

---

## One-Line Principle

**Surfaces carry tone. Buttons carry intent. Color carries meaning.**

---

## What Changed from Original System

### Added:
* Ice (#D9F0F2) and Sand (#EDE6D8) surface colors
* Neutral White button variant
* Clear semantic signal colors (Success, Error, Warning, Info)
* Tertiary text-only buttons for dark backgrounds
* Kelp 50 (#E6F2F8) explicitly retained for light buttons on dark backgrounds

### Improved:
* Clearer separation: Surfaces vs. Buttons vs. Signals
* Better hover states using Ice surface for outline buttons
* More explicit dark background button variants
* Disabled states better defined across all variants

### Retained:
* Primary blue system (#025E96 → #01385A)
* Button sizes (32px, 40px, 48px)
* Gray outline buttons (now called Secondary Outline)
* Icon placement and sizing (16×16px)
* Focus and loading states
