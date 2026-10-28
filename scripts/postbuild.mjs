// Post-build: prerender /products, /products/:type and /news routes into dist/
// so GitHub Pages returns HTTP 200 with correct per-route SEO meta AND real
// static body content (not just an empty SPA shell). Also generates
// dist/sitemap.xml with all product + news child routes.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  SITE_URL,
  getProductSEO,
  PRODUCTS_INDEX_SEO,
} from "../src/config/product-seo.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const configDir = join(__dirname, "..", "src", "config");

// model (PRODUCT_CATALOG key) -> data file name. Mirrors src/config/products.js.
// These files are plain arrays with `export default`, safe to import in Node.
const MODEL_TO_FILE = {
  // Chint
  NM1: "nm1.js", NXM: "nxm.js", "NXB-63G": "nxb-63g.js", DZ15: "dz15.js",
  DZ20: "dz20.js", NXMS: "nxms.js", "NXB-63": "nxb-63.js", "NB1-63": "nb1-63.js",
  "NB1-63DC": "nb1-63dc.js", NB7: "nb7.js", "NXB-125": "nxb-125.js",
  "NB1-63H": "nb1-63h.js", NXC: "nxc.js",
  // DELIXI
  DZ15LE: "DZ15LE.js", CDM1L: "CDM1L.js", CDM3LS: "CDM3LS.js", CM3L: "CM3L.js",
  CDM1: "cdm1.js", CDM3S: "cdm3s.js", CDM3E: "cdm3e.js", JZ7: "jz7.js",
  JZC1: "JZC1.js", JZC4s: "JZC4s.js",
  // ABB
  "Tmax XT": "tmax-xt.js", "Tmax DC": "tmax-dc.js", Tmax: "tmax.js",
  Formula: "formula.js", "Formula M": "formula-m.js", SH200: "sh200.js",
  S200: "s200.js", "S200M DC": "s200mdc.js", "S200M UC": "s200muc.js",
  S800: "s800.js", ACS880: "acs880.js", ACS580: "acs580.js", ACS550: "acs550.js",
  ACS530: "acs530.js", ACS510: "acs510.js", ACS180: "acs180.js", ACS380: "acs380.js",
  // Schneider
  EZD: "EZD.js", CVS: "csv.js", LC1D: "LC1D.js", ATV12: "atv12.js",
  ATV610: "atv610.js", ATV320: "atv320.js", ATV600: "atv600.js",
  ATV340: "atv340.js", ATV900: "atv900.js", ATV630: "atv630.js",
  ATV930: "atv930.js", ATV310A: "atv310a.js", ATV212: "atv212.js",
  ATV310E: "atv310e.js",
  // Siemens
  "S7-200 SMART": "S7-200-SMART.js", "S7-300": "S7-300.js", "S7-400": "S7-400.js",
  "S7-1200": "S7-1200.js", "S7-1200 G2": "S7-1200-G2.js", "S7-1500": "S7-1500.js",
  "PLC-1500": "plc-1500.js", "3TS": "three-ts.js", "3RT20": "three-rt20.js",
  "3RT6": "three-rt6.js", HMI: "HMI.js",
  // Panasonic
  "MINAS A6": "minis-a6.js", MGM: "mgm.js", MHM: "mhm.js",
};

// 动态加载单个型号数据文件，返回产品数组。失败时返回 []。
async function loadProductItems(model) {
  const file = MODEL_TO_FILE[model];
  if (!file) return [];
  try {
    const mod = await import(
      `${pathToFileURL(join(configDir, file)).href}?t=${Date.now()}`
    );
    return Array.isArray(mod.default) ? mod.default : [];
  } catch (err) {
    console.warn(`  [warn] 无法加载产品数据 ${file}: ${err.message}`);
    return [];
  }
}

// 静态正文中每页渲染的产品行数上限（避免生成过大的 HTML，同时让 Google
// 能看到足够真实的产品数据。完整列表仍由前端 React 在客户端渲染。）
const STATIC_ROWS = 30;

function today() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
    `<meta name="description" content="${escapeHtml(desc)}" />`,
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
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  out = out.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${url}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );
  return out;
}

// 生成产品页静态正文（含 H1、简介、产品表格），注入 <div id="root">。
function renderStaticProductBody({ brand, model, type, items }) {
  const typeLong =
    {
      "Molded case circuit breaker": "molded case circuit breakers (MCCB)",
      "Miniature circuit breaker": "miniature circuit breakers (MCB)",
      "Residual Current Circuit Breaker": "residual current circuit breakers (RCBO)",
      VFD: "variable frequency drives (VFD)",
      Contactor: "contactors",
      "AC contactor": "AC contactors",
      "Power Contactor": "power contactors",
      "Contactor Relay": "contactor relays",
      PLC: "PLC programmable logic controllers",
      touchscreen: "HMI touch panels",
      "Servo motor": "servo motors and drives",
    }[type] || type;

  const rows = (items || []).slice(0, STATIC_ROWS);
  const specs = {};
  for (const it of rows) {
    if (!it.remark) continue;
    for (const part of String(it.remark).split("|")) {
      const m = part.match(/^\s*([^:：]+)[:：]\s*(.+?)\s*$/);
      if (m && !specs[m[1].trim()]) specs[m[1].trim()] = m[2].trim();
    }
  }
  const specKeys = Object.keys(specs).slice(0, 12);

  const tableRows = rows
    .map((it) => {
      const spec = String(it.remark || "")
        .split("|")
        .map((s) => escapeHtml(s.trim()))
        .filter(Boolean)
        .join("<br>");
      return `<tr><td>${escapeHtml(it.orderId)}</td><td>${escapeHtml(
        it.model,
      )}</td><td>${spec}</td><td>${escapeHtml(it.price)}</td></tr>`;
    })
    .join("\n");

  const specsHtml = specKeys.length
    ? `<h2>${escapeHtml(brand)} ${escapeHtml(model)} Specifications</h2>
  <ul>
${specKeys.map((k) => `    <li><strong>${escapeHtml(k)}:</strong> ${escapeHtml(specs[k])}</li>`).join("\n")}
  </ul>`
    : "";

  const tableHtml = rows.length
    ? `<h2>${escapeHtml(brand)} ${escapeHtml(model)} Price List</h2>
  <p>The table below shows reference prices for select ${escapeHtml(
    model,
  )} models. Prices are indicative only; contact us for a firm quotation.</p>
  <table>
    <thead><tr><th>Order ID</th><th>Model</th><th>Specification</th><th>Price (CNY/pcs)</th></tr></thead>
    <tbody>
${tableRows}
    </tbody>
  </table>`
    : "";

  return `
  <div id="root">
    <h1>${escapeHtml(brand)} ${escapeHtml(model)} ${escapeHtml(
      type,
    )} – Products &amp; Price List</h1>
    <p>Browse genuine ${escapeHtml(brand)} ${escapeHtml(
      model,
    )} ${escapeHtml(typeLong)} with reference prices and specifications. Toastduck International is a Hong Kong-based supplier of industrial electrical components, serving global clients since 2023.</p>
${specsHtml}
${tableHtml}
    <h2>Order ${escapeHtml(model)} from Toastduck</h2>
    <p>Request a quote or datasheet for ${escapeHtml(brand)} ${escapeHtml(
      model,
    )}: email <a href="mailto:info@toastduck.com">info@toastduck.com</a> or contact us via the website contact form.</p>
  </div>`;
}

// 生成产品页 Product JSON-LD，插入 </head> 前。
// image 必填（Google Product 富媒体结果要求），优先用首张产品图，无则回退品牌 banner。
function renderProductJsonLd({ brand, model, type, url, description, price, image }) {
  const imageUrl = image || `${SITE_URL}/images/toastduck_banner_3x_black.png`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand} ${model} ${type}`,
    description,
    image: [imageUrl],
    brand: { "@type": "Brand", name: brand },
    sku: model,
    url,
    offers: {
      "@type": "Offer",
      priceCurrency: "CNY",
      price,
      availability: "https://schema.org/InStock",
      url,
    },
  };
  return `<script type="application/ld+json">\n${JSON.stringify(
    data,
    null,
    2,
  )}\n</script>`;
}

// 生成 news 文章静态正文，注入 <div id="root">。
function renderStaticNewsBody(article) {
  return `
  <div id="root">
    <h1>${escapeHtml(article.title)}</h1>
    <p><time datetime="${escapeHtml(article.publishedAt || "")}">${escapeHtml(
      (article.publishedAt || "").slice(0, 10),
    )}</time></p>
    ${article.content || ""}
    <p><a href="${SITE_URL}/news">Back to all news</a></p>
  </div>`;
}

function renderPage(template, { url, title, description }) {
  let html = template;
  html = setCanonical(html, url);
  html = setTitle(html, title);
  html = setMetaDescription(html, description);
  html = setOgMeta(html, { url, title, description });
  return html;
}

function injectBody(html, bodyHtml) {
  return html.replace(/<div id="root"><\/div>/, bodyHtml);
}

function injectJsonLd(html, ldHtml) {
  return html.replace(/<\/head>/, `${ldHtml}\n  </head>`);
}

function writeHtml(relativePath, html) {
  const abs = join(distDir, relativePath);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, html, "utf-8");
  console.log("  wrote", relativePath);
}

function buildSitemap(productRoutes, newsRoutes) {
  const urls = [];
  urls.push({ loc: `${SITE_URL}/`, priority: "0.8", changefreq: "weekly" });
  urls.push({ loc: `${SITE_URL}/news`, priority: "0.6", changefreq: "daily" });
  urls.push({ loc: `${SITE_URL}/products`, priority: "0.7", changefreq: "weekly" });
  for (const r of productRoutes) {
    urls.push({ loc: r.url, priority: "0.8", changefreq: "weekly" });
  }
  for (const r of newsRoutes || []) {
    urls.push({ loc: r.url, priority: "0.5", changefreq: "weekly" });
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

async function main() {
  const template = readFileSync(join(distDir, "index.html"), "utf-8");
  const productRoutes = Object.values(getProductSEO());

  // News article routes from public/news/data.json (source of truth).
  let newsRoutes = [];
  const publicNewsDataPath = join(__dirname, "..", "public", "news", "data.json");
  const distNewsDataPath = join(distDir, "news", "data.json");
  const newsDataPath = existsSync(publicNewsDataPath)
    ? publicNewsDataPath
    : distNewsDataPath;
  let newsData = { articles: [] };
  try {
    newsData = JSON.parse(readFileSync(newsDataPath, "utf-8"));
    newsRoutes = (newsData.articles || [])
      .map((a) => a.url)
      .filter(Boolean)
      .map((id) => ({ url: `${SITE_URL}/news/${encodeURIComponent(id)}` }));
  } catch (err) {
    console.warn(`  Skipping news sitemap entries (${newsDataPath}): ${err.message}`);
  }

  console.log(`Prerendering ${productRoutes.length} product routes...`);

  // /products index page
  const productsIndexHtml = renderPage(template, PRODUCTS_INDEX_SEO);
  writeHtml("products/index.html", productsIndexHtml);

  // /products/:type pages (static body + Product schema)
  for (const route of productRoutes) {
    const items = await loadProductItems(route.model);
    const firstPrice = items.find((it) => it.price)?.price || "";
    // 首张产品图（item.url），供 Product schema 的 image 使用
    const firstImage = items.find((it) => it.url)?.url || "";
    let html = renderPage(template, {
      url: route.url,
      title: route.title,
      description: route.description,
    });
    html = injectBody(
      html,
      renderStaticProductBody({ ...route, items }),
    );
    html = injectJsonLd(
      html,
      renderProductJsonLd({ ...route, price: firstPrice, image: firstImage }),
    );
    writeHtml(`products/${route.model}/index.html`, html);
  }

  // /news index page
  const newsIndexHtml = (() => {
    let html = renderPage(template, {
      url: `${SITE_URL}/news`,
      title: "News & Updates | Toastduck International",
      description:
        "Latest news, product updates and company announcements from Toastduck International, Hong Kong.",
    });
    const list = (newsData.articles || [])
      .map(
        (a) =>
          `<li><a href="${SITE_URL}/news/${encodeURIComponent(
            a.url,
          )}">${escapeHtml(a.title)}</a></li>`,
      )
      .join("\n");
    const body = `<div id="root"><h1>News &amp; Updates</h1><ul>\n${list}\n</ul></div>`;
    return injectBody(html, body);
  })();
  writeHtml("news/index.html", newsIndexHtml);

  // /news/:id pages (static body)
  for (const a of newsData.articles || []) {
    if (!a.url) continue;
    let html = renderPage(template, {
      url: `${SITE_URL}/news/${encodeURIComponent(a.url)}`,
      title: `${a.title} | Toastduck`,
      description: (a.description || a.title || "").slice(0, 160),
    });
    html = injectBody(html, renderStaticNewsBody(a));
    writeHtml(`news/${a.url}/index.html`, html);
  }

  // sitemap.xml
  const sitemap = buildSitemap(productRoutes, newsRoutes);
  writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf-8");
  console.log(
    `  wrote sitemap.xml (${productRoutes.length + 3 + newsRoutes.length} URLs)`,
  );

  console.log("Post-build SEO prerender complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
