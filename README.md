# IsApp 🚀

**IsApp** 은 개인적으로 개발한 다양한 웹앱을 하나의 플랫폼에서 실행할 수 있도록 통합한 **슈퍼앱(Super App)** 프로젝트입니다.  
React + TypeScript + Vite 기반으로 제작되었으며, Progressive Web App(PWA) 형태로 제공되어 모바일과 데스크탑 모두에서 네이티브 앱처럼 실행할 수 있습니다.

👉 [데모 바로가기](https://yoonjonglyu.github.io/iapp/)

---

## 📌 특징

- **슈퍼앱 런처**: 여러 개의 미니 앱(Memo, Daoxin 등)을 하나의 플랫폼에서 관리 및 실행 가능
- **PWA 지원**: 설치 가능한 앱(App-like) 환경 제공
- **심플한 UI**: 미니멀하고 직관적인 UX 디자인
- **확장성**: 새로운 앱을 쉽게 추가할 수 있도록 구성

---

## 🛠 기술 스택

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **UI**: CSS Modules / Emotion (선택 적용 가능)
- **배포**: [GitHub Pages](https://pages.github.com/)
- **기타**: Progressive Web App (PWA)

---

## 📂 프로젝트 구조

```bash
iapp/
├── public/          # 정적 리소스 (favicon, manifest.json 등)
├── src/
│   ├── apps/        # 미니앱 (Memo, Daoxin 등)
│   ├── components/  # 공통 UI 컴포넌트
│   ├── pages/       # 라우팅 페이지
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```
