// Copied to research-deploy@vercel root (see gh-pages.yml).
// Serves Disallow-all robots.txt for research.dora.ventures so crawlers
// prefer https://dora.ventures/research (canonical via routes proxy).

export default function middleware() {
  return new Response("User-agent: *\nDisallow: /\n", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export const config = {
  matcher: "/robots.txt",
};
