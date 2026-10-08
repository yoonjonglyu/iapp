export default {
  async fetch(request, env) {
    // 필요 시 서비스 바인딩 호출 또는 커스텀 API 핸들링 가능
    // 예: return env.MY_SERVICE.fetch(request);

    // 기본 정적 자산(SPA) 서빙
    return env.ASSETS.fetch(request);
  },
};
