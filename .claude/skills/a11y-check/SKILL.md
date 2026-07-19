---
name: a11y-check
description: Audit a page or component for web accessibility (WCAG) — semantic HTML, alt text, color contrast, keyboard navigation, focus states, ARIA, and forms. Use when the user asks about accessibility, a11y, WCAG, screen readers, keyboard nav, or contrast, or before shipping a new page/section.
---

# a11y-check

Review pages/components in this Next.js site for accessibility issues and fix them.

## Static review checklist
- **Semantics**: real landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`), one `<h1>` per page, ordered heading levels.
- **Images**: every `next/image`/`img` has meaningful `alt` (empty `alt=""` for decorative).
- **Links vs buttons**: `<a>`/`next/link` for navigation, `<button>` for actions. No clickable `<div>`s.
- **Keyboard**: everything interactive is focusable and operable by keyboard; visible `focus-visible:` styles; logical tab order; no keyboard traps.
- **Forms**: every input has an associated `<label>`; errors are announced (`aria-describedby`, `aria-invalid`); required fields marked.
- **Color contrast**: text ≥ 4.5:1 (≥ 3:1 for large text). Don't rely on color alone to convey meaning.
- **ARIA**: only where native HTML can't express it; correct roles/states; no redundant ARIA.
- **Motion**: honor `prefers-reduced-motion`.
- **Language**: `<html lang="…">` set in root layout.

## Dynamic check (optional, if the app is running)
Use the chrome-devtools MCP tools to load the page and inspect:
- `take_snapshot` for the accessibility tree, `list_console_messages` for warnings.
- `lighthouse_audit` and read the Accessibility category for scored issues.

## Output
List findings as: issue → why it matters → concrete fix (with the file/line). Then apply the fixes and note which are WCAG A vs AA.
