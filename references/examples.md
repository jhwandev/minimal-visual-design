# Gallery and scenarios

Open `assets/gallery.html` locally in a browser: 55 functional patterns, search, category filters and four independent themes. Fourteen scenario links lead to standalone files. No server or build step is required. The gallery includes the same sample snippets that the assembler uses.

| File in assets/examples/ | Composition | Theme |
|---|---|---|
| `01-comparison.html` | comparison (compact default) | light |
| `02-decision-brief.html` | comparison-table, scorecard, evidence, decision-tree | editorial |
| `03-project-plan.html` | roadmap, gantt, swimlane, checklist | light |
| `04-operations.html` | kpi, line-chart, bar-chart, data-table | dashboard |
| `05-system.html` | architecture, sequence, dataflow, accordion | dark |
| `06-organization.html` | hierarchy, network | light |
| `07-learning-guide.html` | editorial, step-guide, accordion, checklist | editorial |
| `08-interaction.html` | tabs, filter-list, card-grid | light |
| `09-distributions.html` | histogram, scatter-chart, heatmap, stacked-bar, funnel | dashboard |
| `10-korean-stress.html` | matrix, network, tabs, data-table | dark |

All figures are fictional examples. 01 is the compact screenshot-calibrated default: title, authored SVG icons, pale nodes, vertical flow and warm result emphasis, with a concise qualification. The remaining examples demonstrate composed reports. 10 stresses long Korean node labels and an unspaced identifier. Diagram labels are HTML, not tiny SVG text. Chart patterns have exact data tables.

To regenerate a different sample composition, use `scripts/compose.py`. To make a factual deliverable, replace sample content and check all values, periods, sources and relationships. Existing examples are useful layout references, not ready-made claims.

## Extended scenarios

- `11-interactive-lab.html`: scenario-simulator, sensitivity, calculator, interactive-series, time-scrubber
- `12-diagnostics.html`: request-waterfall, flame-chart, stack-trace, sortable-table, drilldown
- `13-visual-forms.html`: waterfall-change, treemap, sankey, box-plot, small-multiples
- `14-calendar-guide.html`: calendar-day, calendar-month, stepper, illustrated-walkthrough, set-membership
