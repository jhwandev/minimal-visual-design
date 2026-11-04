# Verification workflow

1. Verify source facts and numerical invariants before layout. Trace chart marks to data cells, percentages to denominators and edges to an explicit relationship list. Reject invented values or unsupported factual conclusions.
2. Run `python3 scripts/check_html.py .` from the skill folder, or provide specific HTML paths. Run the host skill-creator validator when available. The HTML checker uses only the Python standard library.
3. Open `assets/gallery.html` and relevant `assets/examples/*.html` in a real browser. Inspect at desktop and 360/390px widths. Check long Korean text, narrow controls, table scrolling, connector endpoints and theme changes. Check duplicate diagram fragments after composition.
4. Keyboard: Tab to every control, operate tabs with arrows/Home/End, toggle details, search a nonexistent term and reset it. Confirm all-content behavior without JS, and print visibility of hidden panels and filtered items.
5. Check browser console errors and unexpected resource requests if supported. Static checks don't execute JS or prove visual quality. If automation is unavailable, use actual manual browser inspection; report the tested widths/pages and interaction cases honestly.
6. Reopen the final generated HTML after changes. Do not claim a browser or accessibility test that was not performed. Package only the skill root and supported resources, excluding temporary files and OS metadata.

Representative adaptation prompts (selection smoke tests):
- “3가지 저장 방식의 18개 속성을 비교해 줘.” → comparison-table, not 18 stacked cards.
- “정확한 날짜는 없지만 조사, 설계, 배포 순서야.” → roadmap/process, no fabricated Gantt dates.
- “A→B, B→C, C→A 관계와 긴 설명이 있어.” → network + edge list, not hierarchy.
- “월별 실제 수치 10, 12, 9를 보여줘.” → line-chart with values and period labels; no smoothing or invented intermediate values.
- “대상 6개 중 조건에 맞는 것을 검색하고 싶어.” → filter-list; check zero results and JS-disabled content.

See [validation-record.md](validation-record.md) for checks actually performed on this distribution and their limits.
