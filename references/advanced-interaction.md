# Advanced interaction and runtime routing

The offline library has 55 implemented patterns and 14 standalone scenarios. Choose controls only when the reader needs to change an input, inspect a state or explore detail. The public [OpenAI Visualizations guide](https://learn.chatgpt.com/docs/visualizations), checked 2026-11-04, describes charts, maps, diagrams, calculators, simulations and interactive explanations. This package implements transferable equivalents; it does not claim the entire ChatGPT runtime or private components are bundled.

## Selection extensions

- `scenario-simulator`: change multiple inputs of a declared hypothetical model. Display the equation, domain, units and what the model omits. It is not a measured benchmark.
- `sensitivity`: vary one assumption on fixed axes and show a derived threshold. Avoid auto-rescaling that exaggerates change. Clip to the declared plot domain, not an unlabelled screen boundary.
- `calculator`: validate blank, negative, out-of-range and nonfinite values; explicitly handle division by zero where relevant.
- `interactive-series`: stable line styles and direct monthly lookup; the underlying table stays visible when a series is toggled. Touch and keyboard users can use the same selector.
- `sortable-table`, `drilldown`, `time-scrubber`, `stepper`: local view state only. Do not imply that a selection queried a server or updated the source data.
- `calendar-day`, `calendar-month`: real calendar dates and local time strings; convert source times first. Multi-day events crossing midnight need separate segments. The month demo computes November 2026 with a Monday-first calendar, not a guessed grid.
- `request-waterfall`: start offsets and durations; direct parent time subtracts the union of overlapping child intervals. `flame-chart`: chronological sampled stacks; inclusive and self time are sampled estimates. `stack-trace`: display supplied diagnostic data without executing errors or fetching arbitrary files.
- `waterfall-change`, `treemap`, `sankey`, `box-plot`, `small-multiples`, `set-membership`: disclose the statistical/area/flow/set encoding; check numeric invariants before rendering.
- `illustrated-walkthrough`: make actual screen landmarks recognizable and connect them in the right order. Mark sketches as explanation, not working controls.

## Geographic maps

Map support is a generation recipe, not a fabricated boundary demo. Use official/published GeoJSON or supplied geometry, identify its source and license, project longitude/latitude, and embed the geometry and renderer in the final offline HTML. Never invent country, municipal or parcel boundaries. If trustworthy geometry cannot be obtained, offer a labelled schematic only when appropriate, and disclose the limit. A real geographic map must keep region context, units and any join failures visible. Do not label a blank point plot a finished map.

## Optional native ChatGPT rendering

When the target environment exposes its Visualize skill, use that skill's current instructions and supported controls for an in-chat preview. Read its widget references for current schemas; native entry points include calendar, request waterfall, sampled CPU flame chart and error stack trace. In this session the built-in single-day calendar was exercised with a generated preview. Native runtime components are not required by the 55 offline patterns.

Match capabilities at execution time, not by assuming a global function exists. A calendar adapter uses title/start/end local event data; a waterfall adapter uses id/name/startMs/durationMs/parentId; a flame adapter uses frame definitions and ordered stack samples; an error adapter uses structured error/frames. Read current supported versions from the available environment. Do not copy host runtime bundles into the skill or promise support in every client.

For unavailable native widgets, choose the corresponding offline pattern. Host theme inheritance, native tooltips, host state persistence and follow-up actions belong to the host. A standalone file must provide its own safe controls and state or omit those actions. Never call a host-only action from an offline file. User data stays local; do not persist sensitive values or trigger messages as a side effect of view changes.

## Host-quality behavior applied offline

Keep a dominant visual instead of unrelated summary cards; use native controls, precise axes, exact values on selection, visible units, keyboard/touch equivalents and reduced motion. On narrow screens reflow rather than compress labels. All 55 pattern fragments can be composed without the host or a network connection. Only attach JavaScript to patterns that need it; the compact assembler does not attach scripts to static comparison output.

`assets/host-recipes.json` supplies concrete native/fallback data fixtures. Only the native calendar was actually executed in this session; other native widgets were inspected through their available reference schemas, with offline equivalents implemented and browser-tested.
