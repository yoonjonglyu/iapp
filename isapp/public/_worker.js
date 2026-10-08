// Cloudflare Pages / Workers Advanced Mode Entrypoint
// 이 파일이 빌드 결과물(dist/_worker.js)에 포함되면 Cloudflare가 이 프로젝트를
// "정적 자산 전용 Worker"가 아닌 "코드 실행 가능한 풀스택 Worker"로 인식합니다.
// 이에 따라 대시보드의 서비스 바인딩(Service Bindings), KV, D1 바인딩이 즉시 활성화됩니다.

export default {
  async fetch(request, env) {
    // 1. 서비스 바인딩 프록시 또는 커스텀 API 처리 (필요시)
    const url = new URL(request.url);

    // 2. 기본 정적 자산(Vite 빌드 HTML/JS/CSS) 서빙
    // env.ASSETS는 Cloudflare가 정적 자산을 제공하기 위해 자동으로 주입하는 내장 바인딩입니다.
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      // SPA 라우팅 폴백: 파일을 못 찾으면 index.html 서빙
      return await env.ASSETS.fetch(new Request(new URL('/', request.url), request));
    }
  },
};
