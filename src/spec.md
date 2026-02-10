# Specification

## Summary
**Goal:** Update the homepage coaches section to a maintainable multi-coach “Meet Our Expert Coaches” grid and prep the Google Maps embed for an upcoming location change.

**Planned changes:**
- Replace/update the existing `TrainerHighlights` homepage section to display a “Meet Our Expert Coaches” grid with 3 coach cards: Lavesh Kodwani, Hemraj Dhakar, and Ishika Sahu, showing specialties as provided and showing experience only where provided.
- Centralize the coaches data (name, specialties, optional experience) in a single frontend config-style export and render the section by mapping over that list to support adding more coaches later.
- Ensure the map embed continues to use `MARKETING_CONFIG.googleMapsEmbedUrl` and add a clear code comment in `frontend/src/config/marketing.ts` indicating exactly where to paste the new Google Maps embed URL once provided (without changing the current URL yet).
- Add a follow-up-ready approach for applying a future location update so site location text and SEO/JSON-LD can be updated consistently once the new address/embed URL is supplied.

**User-visible outcome:** The homepage shows a “Meet Our Expert Coaches” section with 3 coaches in a grid, and the embedded Google Map continues to work while the code is prepared for a future location URL update.
