# Specification

## Summary
**Goal:** Make all user-visible text across the app render in pure white by setting the global `text-foreground` token to white and ensuring no components override it with non-white text utilities.

**Planned changes:**
- Update Tailwind/theme color tokens so `text-foreground` resolves to pure white in both light and dark modes, keeping `body` using `@apply ... text-foreground`.
- Audit and adjust any explicit non-white text utility usages (including hover/focus/active states) so navigation, footer, CTA areas, and form text remain white.
- Apply the same white-foreground token update consistently across all active global CSS entrypoints used by the build (including `frontend/src/index.css` and `frontend/index.css` if both are in use) to avoid environment-dependent mismatches.

**User-visible outcome:** All pages (Home, About, Programs, Café, Membership, Contact) display white text by default, including interactive states (hover/focus), without layout or spacing changes.
