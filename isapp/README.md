# IsApp (v2.0) — Frontend Application

IsApp 프론트엔드 웹 애플리케이션 프로젝트 디렉토리입니다.

## 🛠 개발 환경 및 실행

### 패키지 설치
```bash
yarn
```

### 개발 서버 실행
```bash
yarn dev
```
브라우저에서 `http://localhost:5173/`으로 접속합니다.

### 프로덕션 빌드
```bash
yarn build
```
타입 검사(`tsc -b`)와 Vite 번들링이 수행되며 결과물은 `dist/`에 생성됩니다.

---

## 📂 프로젝트 구조

```
src/
├── assets/                  # 정적 에셋 및 파비콘
├── components/              # 글로벌 공용 컴포넌트
│   ├── AiLogos.tsx          # OpenAI, Google, Anthropic, xAI, Perplexity 공식 벡터 SVG
│   ├── Header.tsx           # 상단 상태바, 실시간 시계, Dynamic Island, Spotlight 검색
│   └── Icons.tsx            # 경량 인터랙션 SVG 아이콘
├── features/
│   ├── appbrowser/          # iOS 시트 스타일 인앱 브라우저 (AppBrowser)
│   ├── applist/             # 스쿼클 앱 런치패드 그리드 & 카테고리 탭 (AppList)
│   ├── bottomnavigation/    # 하단 플로팅 글래스 독 (BottomNav)
│   ├── kanbans/             # 최근 사용 앱(RecentApps) & 퀵 유틸리티(SquareWidget)
│   └── views/               # 탭별 전용 뷰 (MiniAppsView, AiHubView, SettingsView)
├── hooks/                   # useRecent (최근 앱 로컬스토리지 동기화 훅)
├── miniapps/                # 내장 코어 미니앱
│   ├── AppWrapper.tsx       # 미니앱 실행 모달 시트
│   ├── financecalculator/   # 스마트 금융 계산기
│   └── multicalculator/     # 스마트 다기능 계산기
├── store/                   # Jotai 기반 상태 스토어
├── apps.ts                  # RyuisLabs 생태계, 생산성, AI 도구 카탈로그 정의
├── App.css                  # 모바일 퍼스트 반응형 글래스 쉘 컨테이너
├── index.css                # 다크 글래스모피즘 디자인 토큰 & 글로벌 스타일
└── main.tsx                 # React 루트 진입점
```

---

자세한 제품 스펙 및 라이선스는 상위 루트 [README.md](../README.md)를 참조하세요.
