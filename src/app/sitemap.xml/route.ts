export const runtime = "edge";

export async function GET() {
  const baseUrl = "https://dillihouse.com";

  const pages = ["/", "/bronze", "/golden","/silver", "/#footer","/#Map", "/PhotoGallery"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
          <url>
            <loc>${baseUrl}${page}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>`
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
