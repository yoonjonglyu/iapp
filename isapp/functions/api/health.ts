// Health check endpoint for Cloudflare Pages Functions
export const onRequestGet: PagesFunction = async () => {
  return new Response(JSON.stringify({ status: 'healthy', service: 'isapp' }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};
