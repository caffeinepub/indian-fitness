# Specification

## Summary
**Goal:** Replace the site’s current branding logo with the newly uploaded Indian Fitness transparent logo across header, footer, and favicon.

**Planned changes:**
- Add the uploaded transparent Indian Fitness logo as a new static asset under `frontend/public/assets/generated/`, standardized to a square 512×512 PNG.
- Update `frontend/src/config/branding.ts` so `BRANDING.logo.path` points to the new logo asset used by the header and footer.
- Update `frontend/index.html` favicon `<link rel="icon">` to reference the new logo asset.

**User-visible outcome:** The new Indian Fitness logo appears in the site header and footer, and the browser tab/favicon matches the new logo.
