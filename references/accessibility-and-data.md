# Accessibility and evidence

## Interaction contracts

- Filter: labelled native search and select; visible result count announced with `role=status`; an empty state; filtering keeps keyboard focus on the control. No JavaScript means all items remain visible.
- Tabs: start as ordinary headings and sections. Only after initialization add tablist/tab/tabpanel roles, aria-selected, aria-controls, roving tabindex and hidden panels. Left/Right/Home/End move and activate tabs. A tab's panel is keyboard focusable. Print shows every panel.
- Accordion: use details/summary. Never hide essential warnings or the only explanation of a data value by default.
- Themes: native select, labelled, updates document attribute. Theme selection is local to the page and has no persistence or tracking.
- Charts: figure caption plus labelled SVG or CSS bars, data table with caption, explicit scales and units. Screen readers can use the exact values without interpreting paths.
- Diagrams: HTML nodes plus ordered/textual relationship list. Decorative connector SVG is aria-hidden because edges are described in text. Maintain distinct markers when diagrams are combined.

Check visible focus, sequential heading order, useful link names and keyboard operation. Aim for WCAG AA contrast: 4.5:1 normal text, 3:1 large text and meaningful non-text boundaries. Test actual foreground/background pairs when customizing tokens. An automated pass alone cannot establish conformance.

## Data contracts

- Preserve input data in a table. Add provenance, observation period, unit, denominator and sampling limits where known. Unknown values stay unknown, not zero.
- Bar and area lengths start at zero. A cropped line axis must be explicit. Never use 3D, unequal category spacing on a time axis, or shapes whose area misrepresents magnitude.
- Percent change = (new-old)/old ×100; old=0 means undefined unless a domain convention is stated. Percentage-point difference is new%-old%; do not call it percent growth.
- A funnel's conversions use one cohort and clearly stated cumulative or step denominators. Stacked values share a total; state if they do not sum to 100%. Histograms declare bin edges including boundary handling. Heatmap bins have visible legend and underlying values.
- Gantt bars must derive from dates or explicit relative week indices; end dates are inclusive only when stated. Dependencies need independent edges, not implied adjacency.
- KPI targets, baselines and thresholds are supplied evidence, never ornamental values. A comparison score needs a disclosed rubric; absent evidence means no ranking.
- Examples in this package are fictional demonstration data. Remove neither the sample label nor its uncertainty unless replacing the content with verified or supplied facts.

Escape inserted text and attributes. For JS updates use textContent; never inject untrusted HTML into innerHTML. Static snippets are trusted source templates, not a reason to trust arbitrary pasted content.
