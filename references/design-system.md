# Tokens, themes and layout

`assets/tokens.css` is the source of truth. Inline it in outputs. System fonts keep Korean readable without downloads. Text starts at 16px, body line-height 1.65, headings use fluid sizing; numbers use tabular figures. Spacing follows 4/8/12/16/24/32/48px. Main width is 1160px, prose width about 70 characters. Cards use a thin neutral border and 16px radius. Muted fills group information; accents encode meaning, not random variety.

| Theme | Select when | Distinction |
|---|---|---|
| light (default) | General explanations and screenshot-inspired cards | White canvas, pale panels, neutral typography, restrained blue accent |
| dark | Explicit request or dark surroundings | Dark canvas, lighter boundaries, high-contrast text; not inverted screenshots |
| editorial | Long narrative and annotated reports | Warm paper, serif headings, wider prose rhythm and thin rules |
| dashboard | Repeated monitoring and dense metrics | Cool canvas, compact spacing, tabular numbers; same readable text floor |

Set `data-theme` on `<html>`. Don't select dark solely to make routine output look dramatic. A page usually needs one accent and separate labelled success/caution states. Do not communicate meaning only through hue.

## Korean and responsive layout

Use `lang="ko"` for Korean content, semantic headings, no fixed text heights, and no ellipsis for essential information. Grid templates use `minmax(0, 1fr)`; flexible cards stack below 720px. Test at 360px, 390px and desktop with the longest real paragraph, a long unspaced identifier and larger font settings. Give table/schedule overflow a local scroll region; the page itself must not scroll horizontally.

SVG coordinate diagrams in this library contain only paths; HTML node labels reflow independently. The connector helper measures card centers and redraws on ResizeObserver and window resize. It draws paths between node boundaries and routes long same-row edges above intermediate nodes. For a dense graph, use grouping or another layout rather than hoping straight lines will stay readable. On mobile paths are hidden and an equivalent explicit edge list remains visible.

Print styles hide controls, reveal tab panels and filtered content, and use paper-friendly colors. Inspect print preview if a printed output is requested. Avoid fixed navigation covering content during zoom. No custom animation is necessary; respect `prefers-reduced-motion` if adding any.

For compact single visuals, the calibrated component in [conversation-quality.md](conversation-quality.md) overrides the report wrapper’s default sizing.
