// Cloudflare Pages Functions Middleware
// 이 파일이 존재하면 Cloudflare Pages가 Worker 런타임을 활성화하여 서비스 바인딩(Service Bindings)이 유지됩니다.

export const onRequest: PagesFunction = async (context) => {
  // 모든 요청을 기본 정적 자산 및 후속 핸들러로 전달
  return await context.next();
};
