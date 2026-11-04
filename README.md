# Minimal Visual Design

내용에 맞는 구조를 선택하는 HTML·CSS·SVG 시각화 스킬입니다.

- 55개 패턴과 14개 조합 예제
- 비교, 프로세스, 일정, 관계, 차트, 대시보드, 계산기와 시뮬레이션
- 기본 독립형 HTML, 외부 런타임 의존성 없음
- 한국어 줄바꿈, 모바일 반응형, 키보드 상호작용

`assets/showcase.html`에서 7가지 상호작용 예제를, `assets/gallery.html`에서 전체 패턴을 확인할 수 있습니다. 수치와 조직·일정은 가상 예시입니다.

## 사용

스킬을 지원하는 도구의 스킬 디렉터리에 이 폴더를 넣고 `SKILL.md`를 진입점으로 사용하세요.

```sh
python3 scripts/compose.py --patterns comparison --title "비교 설명" --output result.html
python3 scripts/check_html.py .
```

조립 도구는 샘플 템플릿을 합칩니다. 의미에 맞는 패턴 선택은 스킬을 읽는 에이전트가 수행하며, 실제 자료로 내용을 바꾼 뒤 검증해야 합니다.

이 프로젝트는 공개 웹 표준으로 작성한 패턴 라이브러리입니다. ChatGPT의 내부 엔진이나 비공개 컴포넌트 전체를 포함하지 않습니다. 선택적 호스트 기능과 독립형 대체 구현은 `references/advanced-interaction.md`를 참고하세요.
