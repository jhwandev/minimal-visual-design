# Validation record

Validated 2026-11-04 (Asia/Seoul), expanded distribution.

## Visual fidelity

The first version’s report wrapper was not equivalent to the supplied conversation screenshot. It was replaced as the single-visual default by a compact layout with authored line icons, pale neutral cards, calibrated title/body hierarchy, two aligned lanes, vertical arrows and a warm result emphasis. Reports remain available for multi-section content.

At a measured 1364px CSS viewport, the final comparison had approximately 630.7px-wide top cards, a 22px lane gap, 180.3px top-card height, 84px result bands and a 44px title. The result bands began at y≈456.6px. These align closely with the supplied screenshot’s visible geometry; the screenshot has no source DOM and exact font metrics/antialiasing were not available. No pixel-perfect identity or universal future-output quality is claimed. The qualification below the diagram is intentionally preserved.

## Functional and structural checks

- 55 reusable pattern fragments; 14 standalone scenarios; gallery, starter and showcase: 72 distributed HTML files passed the offline checker.
- Host skill-creator quick validator passed. Each of the 55 patterns was additionally assembled as a standalone compact document and structurally checked.
- All 14 scenario examples opened at measured CSS widths 1364px, 390px and 360px: 42 page/width combinations. No page-level horizontal overflow or unresolved composition tokens. The available preview surface used a nondefault display scale; verification records actual CSS widths rather than inferring them from the requested screenshot dimensions.
- The gallery initialized at 55 results, experiment filter returned 3, a nonexistent search returned 0, and reset restored 55.
- Simulator: 400 agents × 2 requests/s gave 800 requests/s and 300 above the assumed 500/s capacity. Invalid zero agents produced an accessible error. Sensitivity at 50 points/unit gave a 2-unit threshold. Calculator 10×12 gave 120 minutes/2 hours.
- Series selection: disabling A then selecting March showed B=25; disabling B too showed no visible series. Time scrubber End selected March=40.
- Numeric table sorted 40/60/80 ascending and then descending. Drilldown selected design only. Month calendar selected 12 November’s review and correctly reported no event on 5 November. Stepper reached 3/3 and disabled Next.
- Native ChatGPT calendar: rendered the available built-in day component in the visualization renderer, then clicked the 11:30–13:00 event; the selection event updated the visible selected-item label. Native waterfall/flame/stack components were not executed; their available schemas were reviewed and offline equivalents were implemented.
- Console inspection found no JavaScript warnings/errors on the tested examples. The earlier keyboard tab, duplicate namespace, script-removed fallback and four-theme checks remain applicable to the unchanged interaction implementations.
- Numeric checks covered KPI arithmetic, histogram total, funnel denominators, tree-map area ratios, Sankey flow conservation, waterfall running totals, box-summary geometry and overlapping request spans.

## Limits

No full screen-reader audit, cross-browser matrix or print-preview certification. Geographic maps are a source/projection recipe requiring trustworthy supplied or published geometry; a working geographic map demo is not claimed in the 55-pattern library. Native runtime code is not bundled and availability is checked at execution time. Offline examples require no host or network. See the public [OpenAI Visualizations guide](https://learn.chatgpt.com/docs/visualizations) for product scope, rather than interpreting this library as the entire ChatGPT feature inventory.
