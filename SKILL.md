---
name: minimal-visual-design
description: Create readable, responsive standalone HTML visual explanations using content-selected layouts, CSS and inline SVG. Use for comparisons, processes, relationships, dashboards and visual reports; not for raster illustration or unrelated application development.
---

# Minimal Visual Design

Turn the user's content into an editable visual explanation. Default to one self-contained HTML file with a compact, conversation-sized visual, minimal light styling, CSS Grid/Flex and inline SVG. A single explanation starts directly with its content title and diagram; do not add a cover, brand eyebrow, category badge or technology footer unless it serves the user’s request. Follow an existing site's design system when adapting an existing page. When the user requests an in-chat preview and the environment exposes Visualize, use its current supported renderer and controls, then keep the requested offline deliverable usable without that host. See [advanced-interaction.md](references/advanced-interaction.md) for routing and limitations. This library uses public web standards; it contains no private ChatGPT assets or internal components.

## Choose the structure before the skin

1. Identify the reader's question, entities, relationships, order, units, dates and uncertainty. Preserve supplied facts; label sample values and assumptions. Do not fabricate numbers to fill a chart.
2. Use [pattern-selection.md](references/pattern-selection.md) to select a primary pattern from 55 choices and only the supporting patterns that answer another reader question. Respect an explicit user choice. A short paragraph can be better than a diagram.
3. For the selected pattern, inspect its entry in [pattern-library.md](references/pattern-library.md), then adapt the matching `assets/patterns/<id>.html` snippet. These snippets contain clearly marked fictional example content, not reusable factual claims.
4. For a single visual or a screenshot-style request, read [conversation-quality.md](references/conversation-quality.md) and start from `assets/examples/01-comparison.html`. This is the visual calibration target, not the gallery’s report wrapper. Read [design-system.md](references/design-system.md) for theme and Korean layout decisions. Default to minimal light; use dark, editorial or dashboard only when context supports it. Token changes must preserve contrast.
5. Use `assets/starter.html` or compose sample patterns with `python3 scripts/compose.py --patterns comparison --title "제목" --output result.html`. The assembler defaults to compact mode for one pattern and report mode for several. Replace demonstration content and its sample notice with actual content and provenance before delivery. The helper is a deterministic sample assembler, not an automatic semantic classifier. The agent performs content-based selection.
6. Apply [accessibility-and-data.md](references/accessibility-and-data.md), then [verification.md](references/verification.md). Validate content, browser layout and meaningful interactions. Deliver the HTML and a short explanation of the chosen structure and any unverified limits.

## Output constraints

- Inline CSS, SVG and necessary JavaScript. No remote fonts, CDNs, fetch calls, trackers or external runtime dependencies by default. Local gallery links are navigation, not dependencies.
- Real selectable HTML text for paragraphs and nodes; SVG for connecting paths and data marks. For diagrams with long node labels, use HTML nodes with measured SVG connectors, or a legible mobile list with the same explicit relationships. Never shrink an entire graph to unreadable text.
- Use stable IDs when combining fragments: replace every `__ID__` token with a unique prefix, including SVG markers, labels, controls and panel references. `scripts/compose.py` does this for sample fragments.
- Use native links, buttons, tables and disclosure elements. Add JavaScript only for requested state changes, graph connectors or genuine interaction. Interactive patterns must retain content with JavaScript disabled.
- Mobile should reflow, not clip. Dense tables and schedules may scroll inside a labelled, keyboard-focusable region. Handle long Korean text with `word-break: keep-all; overflow-wrap: anywhere` and `min-width: 0` on grid/flex children.
- Keep axes, denominators, units and time ranges honest. Supply a data table or textual equivalent for every chart. State direction and meaning for diagram edges; verify relationships separately from attractive positioning.
- Preserve usable focus indicators, reduced-motion preferences, print readability and touch target size. Avoid gradients, ornamental icons, excessive shadows and decoration that competes with evidence.

## Resources on demand

- [Examples and gallery](references/examples.md): 14 composed scenarios and a filterable 55-pattern gallery; all HTML files work offline.
- `assets/tokens.css`: four theme palettes plus shared responsive and print layouts.
- `assets/interactions.js`: progressive enhancement for filters, keyboard tabs, theme switching and measured SVG connectors.
- `assets/catalog.json`: pattern identifiers, categories, selection cues and guardrails.
- `scripts/check_html.py`: offline checks for missing files, duplicate IDs, broken local fragments, unresolved composition tokens and external assets. Does not replace browser or accessibility review.

- [Advanced interaction and runtime routing](references/advanced-interaction.md): simulations, calculators, maps, calendars, diagnostic views and host-versus-offline behavior.
