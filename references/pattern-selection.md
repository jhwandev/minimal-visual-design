# Content-based selection

Read the content, not its keywords alone. Selection happens in the agent; no network or classifier package is needed. Record a short rationale in the delivery message, not an implementation questionnaire in the user's page.

| Reader question | Primary choice | Alternative / boundary |
|---|---|---|
| How are 2–3 options different? | comparison | Many shared attributes → comparison-table; scored evidence → scorecard |
| What happens next? | process | Parallel responsibilities → swimlane; conditional branches → decision-tree |
| When did it happen? | timeline | Duration and overlap → gantt; future stages without precise dates → roadmap |
| Who contains or reports to whom? | hierarchy | Multiple owners or cyclic relations → network, never a forced tree |
| What is connected? | network | Technical boundaries → architecture; data transformation → dataflow |
| Where should we place things on two dimensions? | matrix | Use qualitative quadrants only when positions are qualitative; numeric x/y → scatter-chart |
| What decision follows from conditions? | decision-tree | Few choices with explicit criteria → scorecard; don't invent criteria |
| What is the current state? | kpi | Multiple metrics plus trend → dashboard; tasks by state → kanban |
| What changed over time? | line-chart | Discrete category sizes → bar-chart; composition → stacked-bar |
| What is the distribution or association? | histogram / scatter-chart | Correlation is not causation; bins and units must be explicit |
| How do I perform a task? | step-guide | Ordered concepts → process; optional detail → accordion |
| How does the system work? | architecture | System interaction sequence → sequence; component transforms → dataflow |
| What should I browse or find? | card-grid | A few content modes → tabs; many items → filter-list |
| What is the exact value? | data-table | Dense cross-category intensity → heatmap plus actual values |
| What should I remember? | infographic | Avoid disconnected big numbers; connect each fact to an explanation |
| What supports this conclusion? | evidence | Background narrative → editorial; don't hide counterevidence |
| Where are losses or capacity constraints? | funnel | Stages must share a cohort; unrelated totals → bar-chart |

## Composition

Use the smallest number of sections that answer the task. Common combinations:
- Decision brief: comparison → comparison-table → evidence → decision-tree.
- Launch plan: roadmap → gantt → swimlane → checklist.
- Operations report: kpi → line-chart → bar-chart → data-table.
- System explainer: architecture → sequence → dataflow → accordion.
- Learning guide: editorial → process → step-guide → checklist.

Don't place two equivalent representations of the same information side by side unless comparison improves understanding. Pair a chart with a collapsible source table, not a competing second chart. Use one dominant reading direction per section; explain a new direction when the structure changes. Group dense networks into local views with an edge list. Missing dates mean an ordered roadmap, not invented calendar dates. Missing quantitative evidence means a qualitative comparison, not synthetic scores.

## Ties and fallback

Prefer the representation preserving more source information with fewer visual encodings. If three options require twenty attributes, select a table over huge cards. Use prose or a table when the data is too sparse, relationships are unknown or the visual would exaggerate certainty. Theme and pattern are independent: a dark comparison and editorial timeline should still obey the same structural rules.
