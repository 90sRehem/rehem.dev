export const GET = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Sitemap: https://rehem.dev/sitemap-index.xml',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
