// Cloudflare Pages Functions Middleware (Root fallback)
export const onRequest: PagesFunction = async (context) => {
  return await context.next();
};
