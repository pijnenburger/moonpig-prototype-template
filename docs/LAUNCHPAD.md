# Launchpad components (agent reference)

Guide for AI-assisted coding when building UI in this prototype template. For install and auth, see [README](../README.md#launchpad-packages).

## When to use Launchpad

| Use Launchpad for | Use Tailwind / tokens for |
| --- | --- |
| Buttons, links, typography, tabs, modals, alerts, chips, ratings, etc. | Page layout, spacing, grids, prototype-only chrome |
| Anything that exists in the design system | One-off styling that has no Launchpad equivalent |

**Rule:** Before building a custom `<button>`, heading, modal, tab bar, or alert, check Launchpad first.

## Required setup

- The app is wrapped in [`LaunchpadShell`](../src/components/LaunchpadShell.tsx) via [`src/main.tsx`](../src/main.tsx). It provides `ThemeProvider` and `LocaleTextProvider`.
- **Do not** add `GlobalStyle` or `GlobalStyleWithTokens` from Launchpad — they conflict with [`src/index.css`](../src/index.css) base styles and fonts.
- Keep all `@moonpig/launchpad-*` packages on the **same major version** (see [`package.json`](../package.json)).
- For Greetz prototypes, swap `@moonpig/launchpad-theme` for `@moonpig/launchpad-theme-greetz` in `LaunchpadShell.tsx`.

## Package map

| Package | Purpose |
| --- | --- |
| `@moonpig/launchpad-components` | UI components (installed by default) |
| `@moonpig/launchpad-forms` | Form fields — add only when you need inputs, selects, checkboxes, etc. |
| `@moonpig/launchpad-theme` | Moonpig theme tokens (used by `LaunchpadShell`) |
| `@moonpig/launchpad-theme-greetz` | Greetz theme (swap in for Greetz prototypes) |
| `@moonpig/launchpad-localisation` | Locale strings (used by `LaunchpadShell`) |
| `@moonpig/launchpad-utils` | `ThemeProvider` and utilities (used by `LaunchpadShell`) |

## How to discover components

1. **Storybook (canonical API docs):** https://docs.launchpad.moonpig.io — use this for props, variants, and examples.
2. **Installed exports:** `node_modules/@moonpig/launchpad-components/dist/types/index.d.ts` — exhaustive list for the version in `package-lock.json`.
3. **In-repo example:** [`src/App.tsx`](../src/App.tsx) — `Tabs`, `PrimaryButton`.

Regenerate the component index below after upgrading Launchpad: `npm run launchpad:docs`.

## Common mappings

| UI need | Launchpad export(s) | Storybook area |
| --- | --- | --- |
| Primary CTA | `PrimaryButton` | Buttons |
| Secondary / tertiary actions | `SecondaryButton`, `TertiaryButton` | Buttons |
| Icon-only action | `IconButton` | Buttons |
| Body copy / display text | `Text` | Typography |
| Section heading | `Heading` | Typography |
| Inline link | `TextLink`, `Link` | Links |
| Tabbed content | `Tabs`, `TabList`, `Tab`, `TabPanels`, `TabPanel` | Tabs |
| Dialog / confirmation | `Modal`, `ModalHeader`, `ModalBody`, `ModalContent`, `ModalOverlay` | Modal |
| Side panel | `SideModal` | Modal |
| Inline alert | `Alert` | Alert |
| Page-level message | `Banner`, `InfoStrip` | Banner |
| Tag / filter chip | `Chip`, `Pill` | Chip |
| Tooltip / popover | `Tooltip`, `Popover` | Tooltip / Popover |
| Loading state | `LoadingIndicator`, `SkeletonBox` | Loading |
| Star rating | `Rating` | Rating |
| Expandable sections | `Accordion`, `AccordionHeading`, `AccordionContent` | Accordion |
| Image carousel | `Carousel` (alias for `SimpleCarousel`) | Carousel |
| Form fields | `@moonpig/launchpad-forms` (separate package) | Forms |

## Import pattern

Named imports from `@moonpig/launchpad-components`. Use Tailwind on wrapper elements for layout and spacing.

```tsx
import { PrimaryButton, Text } from '@moonpig/launchpad-components'

<section className="flex flex-col gap-6 p-6">
  <Text typography="typeDisplay02">Prototype section</Text>
  <PrimaryButton onClick={handleContinue}>Continue</PrimaryButton>
</section>
```

## Component index

<!-- AUTO-GENERATED:START -->
### Actions

`PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `IconButton`, `HeartToggle`

### Typography and lists

`Text`, `Heading`, `TextLink`, `RichTextContainer`, `BulletedList`, `NumberedList`, `IconList`, `IconListItem`

### Navigation

`Tabs`, `TabList`, `Tab`, `TabPanels`, `TabPanel`, `Link`, `LinkAsProvider`, `CustomLink`, `OptionsMenu`

### Feedback and status

`Alert`, `Banner`, `InfoStrip`, `LoadingIndicator`, `SkeletonBox`, `Rating`, `PageError`, `ProgressIndicator`, `StepStatus`, `OurPick`

### Layout

`Box`, `Flex`, `Grid`, `Container`, `VerticalStack`, `VStack`, `Strip`, `AspectRatio`, `Divider`

### Overlays

`Modal`, `ModalOverlay`, `ModalBody`, `ModalHeader`, `ModalContent`, `SideModal`, `Popover`, `Tooltip`

### Content

`Accordion`, `AccordionContent`, `AccordionHeading`, `Carousel`, `Chip`, `Pill`, `Emoji`, `Image`

### Accessibility and focus

`ScreenReaderOnly`, `FocusIndicator`, `focusIndicatorStyles`

### Do not use in this template

`GlobalStyle`, `GlobalStyleWithTokens`

Grouped exports from `@moonpig/launchpad-components` (v86). For props and usage, see Storybook.
<!-- AUTO-GENERATED:END -->

## Anti-patterns

- **Do not** add `GlobalStyle` — fonts and resets live in `src/index.css`.
- **Do not** rebuild design-system primitives in raw HTML/CSS when Launchpad already provides them (buttons, modals, tabs, alerts).
- **Do not** use arbitrary hex colors or pixel values when design tokens in `src/index.css` cover the need.
- **Do not** style Launchpad components with custom CSS classes — adjust layout on parent wrappers with Tailwind instead.
- **Do not** guess component props — check Storybook or the `.d.ts` files in `node_modules`.
