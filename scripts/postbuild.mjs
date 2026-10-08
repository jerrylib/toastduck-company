// Post-build: prerender /products and /products/:type routes into dist/
// so GitHub Pages returns HTTP 200 with correct per-route SEO meta.
// Also generates dist/sitemap.xml with all product child routes.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, getProductSEO, PRODUCTS_INDEX_SEO } from "../src/config/product-seo.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

function today() {
  return new Date().toISOString().slice(0, 10);
}

// Replace a specific <link rel="canonical" href="..."> in the HTML.
function setCanonical(html, url) {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
}

function setMetaDescription(html, desc) {
  return html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${desc}" />`,
  );
}

function setOgMeta(html, { url, title, description }) {
  let out = html;
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${url}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  return out;
}

function renderPage(template, { url, title, description }) {
  let html = template;
  html = setCanonical(html, url);
  html = setTitle(html, title);
  html = setMetaDescription(html, description);
  html = setOgMeta(html, { url, title, description });
  return html;
}

function writeHtml(relativePath, html) {
  const abs = join(distDir, relativePath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, html, "utf-8");
  console.log("  wrote", relativePath);
}

function buildSitemap(productRoutes) {
  const urls = [];
  urls.push({ loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" });
  urls.push({ loc: `${SITE_URL}/news`, priority: "0.8", changefreq: "daily" });
  urls.push({ loc: `${SITE_URL}/products`, priority: "0.9", changefreq: "weekly" });
  for (const r of productRoutes) {
    urls.push({ loc: r.url, priority: "0.7", changefreq: "weekly" });
  }
  const lastmod = today();
  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
  const template = readFileSync(join(distDir, "index.html"), "utf-8");
  const productRoutes = Object.values(getProductSEO());

  console.log(`Prerendering ${productRoutes.length} product routes...`);

  // /products index page
  const productsIndexHtml = renderPage(template, PRODUCTS_INDEX_SEO);
  writeHtml("products/index.html", productsIndexHtml);

  // /products/:type pages
  for (const route of productRoutes) {
    const html = renderPage(template, {
      url: route.url,
      title: route.title,
      description: route.description,
    });
    writeHtml(`products/${route.model}/index.html`, html);
  }

  // sitemap.xml
  const sitemap = buildSitemap(productRoutes);
  writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf-8");
  console.log(`  wrote sitemap.xml (${productRoutes.length + 3} URLs)`);

  console.log("Post-build SEO prerender complete.");
}

main();
