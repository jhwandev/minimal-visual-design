# Conversation-quality visual output

## Default composition

Use a compact visual that answers one question directly. The screenshot reference is a rounded white frame, a strong title, two pale node cards, thin arrows, and two result bands. Its quality comes from hierarchy, deliberate empty space and aligned lanes, not a large report cover. Use `assets/examples/01-comparison.html` as the calibration target and `assets/patterns/comparison.html` for the reusable component. The exact runtime DOM and font metrics of ChatGPT are unavailable; never promise pixel-identical rendering across systems.

The original report wrapper remains useful for multi-section reports and the pattern gallery. It is not the default wrapper for a single visual explanation. Keep sample-data/source qualification adjacent and concise; don't let generic notices or implementation labels dominate a simple diagram. Important uncertainty must remain visible.

## Calibrated comparison recipe

At a 1364px-wide reference viewport: approximately 14–26px outer margins, 20px frame padding, 36px frame radius, 44px title, a 22px lane gap, 180px top cards with a 28px radius, 24px card headings, 22px secondary text, a 176px flow zone, 24px action labels and 84px result bands with 26px text. These are a starting point, not fixed heights for arbitrary user content: top cards and result bands use minimum heights and grow with text. The compact stylesheet handles mobile stacking below 720px.

Keep node columns aligned. One node icon style uses consistent hand-authored SVG strokes; a person icon represents the developer and repeated small robots represent multiple agents. Icons are optional when they add no meaning; don't add decorative icons throughout unrelated charts or tables. The right-side caution is a very pale warm fill with a quiet border; don't replace it with a saturated accent merely for variety. Qualify the server-load statement as a conceptual illustration.

## Transfer the quality to other patterns

- Process: one reading direction, consistent nodes, arrows placed in actual gaps; action labels never float ambiguously.
- Relationship: HTML labels at readable size, edges meeting node boundaries, long edges routed around cards. Keep explicit relation descriptions.
- Data: fewer but legible ticks, visible units, correct scales and source values; the chart itself takes priority over decorative metric cards.
- Table: clear column hierarchy, enough padding, minimal rules, scroll locally on narrow screens.
- Narrative: readable paragraphs and a few purposeful emphasis blocks, not a card for each sentence.
- Dashboard: hierarchy among primary metric, trend and supporting detail; do not enlarge every number equally.

## Acceptance check

Render the chosen visual at the reference width and a mobile width. Compare title size, card silhouette, internal whitespace, lane alignment, icon weight, arrow rhythm, result treatment and extra page chrome. If the result merely contains the same nouns in cards but loses those relationships, it has not matched the design quality. A single screenshot match does not prove every future generated result will match; verify the actual deliverable each time.

