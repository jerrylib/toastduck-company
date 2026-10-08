import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getProductSEO,
  PRODUCTS_INDEX_SEO,
  SITE_URL,
} from "../config/product-seo";

const HOME_SEO = {
  url: `${SITE_URL}/`,
  title:
    "Toastduck International – Import & Export International Business in Hong Kong",
  description:
    "Toastduck International Business Co., Limited is a Hong Kong-based international business specializing in e-commerce products, electronic components, hardware, clothing, footwear, bags, and sports equipment. Serving global clients.",
};

const NEWS_SEO = {
  url: `${SITE_URL}/news`,
  title: "News & Updates | Toastduck International",
  description:
    "Latest news, product updates and company announcements from Toastduck International, Hong Kong.",
};

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function applySEO({ url, title, description }) {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("name", "twitter:url", url);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setCanonical(url);
}

// Match /products and /products/:type
function parseProductsPath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/products") return { kind: "productsIndex" };
  const m = clean.match(/^\/products\/(.+)$/);
  if (m) return { kind: "productDetail", type: decodeURIComponent(m[1]) };
  return null;
}

export default function SeoSync() {
  const location = useLocation();
  const productSEO = getProductSEO();

  useEffect(() => {
    const p = parseProductsPath(location.pathname);
    if (p) {
      if (p.kind === "productsIndex") {
        applySEO(PRODUCTS_INDEX_SEO);
      } else if (p.kind === "productDetail" && productSEO[p.type]) {
        applySEO(productSEO[p.type]);
      }
      return;
    }
    if (location.pathname.startsWith("/news")) {
      applySEO(NEWS_SEO);
      return;
    }
    // default: home
    applySEO(HOME_SEO);
  }, [location.pathname, productSEO]);

  return null;
}
