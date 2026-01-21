import { dataProducts } from "../services/getProducts";

const siteUrl = "https://muebleriaelfiorentino.cl";

const buildUrlSet = (urls: string[], lastmod: string) =>
  urls
    .map(
      (url) => `<url>
  <loc>${url}</loc>
  <lastmod>${lastmod}</lastmod>
</url>`
    )
    .join("\n");

export function GET() {
  const productUrls = dataProducts.map(
    (product) => `${siteUrl}/products/${product.slug}`
  );
  const routes = [`${siteUrl}/`, ...productUrls];
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${buildUrlSet(routes, lastmod)}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
