# Specification

## Summary
**Goal:** Update all site location/contact details and map references from Mumbai to Kekri, Rajasthan, using the shared marketing configuration for consistent rendering across the frontend.

**Planned changes:**
- Update `MARKETING_CONFIG` to the Kekri location details: “Visit Us in Kekri”; “1st Floor K.J Tower Above B.O.B Bank Ajmer Road Kekri”; “Kekri, Rajasthan” (and ensure the configured phone number matches the intended Kekri contact number).
- Replace any remaining hardcoded “Mumbai”, the old Mumbai address, and the old phone number across all pages (including the About “Visit Us” section and any other user-facing copy).
- Update SEO titles/descriptions that reference Mumbai to reference Kekri, preferably sourcing city/location strings from `MARKETING_CONFIG`.
- Ensure Footer, Contact page address/phone, About “Visit Us” block, and Google Maps iframe (URL + iframe title) are all sourced from `MARKETING_CONFIG`, including `googleMapsEmbedUrl` and `location.fullLocation`.

**User-visible outcome:** The website consistently shows the Kekri, Rajasthan address and contact info (with an updated map), and no page displays “Mumbai” or the old Mumbai address/phone number.
