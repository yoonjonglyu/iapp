# IsApp 🚀 — Dark Glass SuperApp & Launcher (v2.0)

**IsApp**은 [RyuisLabs](https://ryuislabs.com/) 생태계 프로덕트, 개인 생산성 웹앱, 코어 유틸리티, 그리고 차세대 생성형 AI 도구들을 하나의 플랫폼에서 유기적으로 실행하고 관리할 수 있도록 설계된 **모바일 퍼스트 다크 글래스모피즘 슈퍼앱(Super App & Web OS Launcher)**입니다.

React 19, TypeScript, Vite 기반으로 구동되며, **Progressive Web App (PWA)**을 지원하여 모바일과 데스크톱 모두에서 네이티브 앱과 동일한 몰입감을 제공합니다.

---

## ✨ 핵심 기능 및 특징

### 1. 🌌 Dark Glassmorphism & Adaptive Shell
- **프리미엄 다크 서페이스**: 딥 스페이스 다크(`--bg-primary: #07090e`) 베이스에 오로라 앰비언트 글로우(블루·바이올렛·시안) 배합.
- **글래스모피즘 & 스쿼클**: `backdrop-filter: blur(24px)`와 반투명 서페이스, R=18px~28px 곡률의 스쿼클(Squircle) 아이콘.
- **모바일 퍼스트 쉘**: 스마트폰에서는 풀스크린 네이티브 앱, 데스크톱/태블릿에서는 정돈된 프리미엄 스마트 디바이스 뷰 제공.

### 2. ⚡ 상단 헤더 & Spotlight 검색
- **실시간 시계 & 날짜**: 초 단위로 갱신되는 고가독성 디지털 클락.
- **Dynamic Island 캡슐**: 펄스 인디케이터가 적용된 상단 상태 뱃지.
- **통합 Spotlight 검색**: 앱 이름 및 설명을 실시간으로 검색하여 즉시 실행.

### 3. ⏱ 최근 사용 앱 (Recent Apps) & 퀵 유틸리티
- **최대 8개 최근 앱 기록**: 사용자가 실행한 앱들을 로컬스토리지 기반으로 최대 8개까지 저장 및 가로 스크롤 제공.
- **외부 링크 필터링**: 순수 인앱 브라우저 앱 및 내장 미니앱만 최근 앱 목록에 기록되어 깔끔한 사용성 유지.
- **4분할 퀵 유틸리티**: `다기능 계산기`, `금융 계산기`, `Logos Path`, `MemoFlow`에 원터치로 접근.

### 4. 🧩 RyuisLabs 생태계 & 앱 라인업
- **RyuisLabs 카테고리 최우선 정렬**:
  - 📜 **Logos Path**: 인류 5대 영성·철학 전통 경전과 사유의 길 (`app.ryuislabs.com/logos-path`)
  - 🎨 **Asharyu Design Docs**: 음양오행 & 수묵 담채 디자인 시스템 문서 포털 (`docs.ryuislabs.com`)
  - 🏛️ **ISA Archive**: 류윤종 엔지니어의 시스템 아키텍처 및 프로덕트 아카이브 (`archive.ryuislabs.com`)
  - 🌐 **RyuisLabs Studio**: 온디바이스 AI 비전 & 제로지식 상태 검증 엔진 포털 (`ryuislabs.com`)
- **생산성 & 자기 숙련 (Productivity)**:
  - ☯️ **Daoxin (도심)**: 도가 철학 기반 내면 수행 & 의지력 시각화 트래커
  - 📝 **MemoFlow**: 오프라인 퍼스트 초경량 컴포넌트 PWA 메모 어플리케이션
  - 🛡️ **SeedVault**: Argon2id + AES-256 군사급 오프라인 로컬 제로지식 보안 볼트
  - 🪐 **Gravity & Time**: SF 중력 세계관 시간 통제 몰입 타이머

### 5. 🧮 내장 코어 미니앱 (Internal Tools)
- **스마트 다기능 계산기**: 사칙연산, 콤마(,) 연속 덧셈, 공학용 수식을 다중 라인으로 동시 연산.
- **스마트 금융 계산기**: 예금·적금 만기 이자, 대출 원리금 균등상환, 복리 투자 시뮬레이션 지원.

### 6. 🤖 AI 에이전트 허브 (AI Studio)
- **공식 브랜드 벡터 로고 적용**: ChatGPT, Google Gemini, Claude, xAI Grok, Perplexity의 고화질 공식 벡터 SVG 심볼 탑재.
- **다이렉트 새 탭 런처**: 보안 정책(CSP, X-Frame-Options) 제약 없이 즉각적으로 공식 AI 서비스 새 탭 실행.

### 7. 🎛 플로팅 글래스 독 (Floating Dock Navigation)
- 하단 플로팅 캡슐 내비게이션 바:
  1. `🏠 런처`: 메인 위젯 및 카테고리별 앱 런치패드
  2. `🧩 미니앱`: 오프라인 독립 실행 가능한 내장 계산기 도구 쇼케이스
  3. `✨ AI 허브`: 최신 생성형 AI 서비스 모음
  4. `⚙️ 설정`: 테마 정보, PWA 상태, 최근 기록 초기화, GitHub 저장소 링크

### 8. 🪟 네이티브 시트 모달 (App Runner & Browser)
- iOS 시트 스타일의 부드러운 슬라이드 업 윈도우.
- 상단 드래그 핸들, 도메인 보안 캡슐, 새로고침, 새 창에서 열기, 닫기(X) 툴바 내장.

---

## 🛠 기술 스택

| 영역 | 기술 |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build & Bundler** | [Vite 7](https://vite.dev/) |
| **Styling & System** | Styled-Components 6, Vanilla CSS Variables (Glass Tokens) |
| **Typography & Icons** | Pretendard WebFont, [Lucide React](https://lucide.dev/), Custom Vector SVGs |
| **State Management** | [Jotai](https://jotai.org/) (Atom with Storage) |
| **App Platform** | Progressive Web App ([vite-plugin-pwa](https://vite-pwa-org.netlify.app/)) |

---

## 🚀 시작하기

### 설치
```bash
# yarn 사용 권장
yarn
```

### 로컬 개발 서버 실행
```bash
yarn dev
# http://localhost:5173/ 접속
```

### 프로덕션 빌드
```bash
yarn build
```

---

## 📄 LICENSE

- MIT License © 2026 [RyuisLabs (류이즈랩스)](https://ryuislabs.com/)