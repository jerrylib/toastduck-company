// Shared product catalog metadata for SEO.
// Single source of truth used by both the frontend SeoSync component
// and scripts/postbuild.mjs (build-time prerender + sitemap).
// Product data lives in ./product-catalog.js (PRODUCT_CATALOG), which is the
// single source of truth shared with src/components/ProductList.jsx.

import { PRODUCT_CATALOG } from "./product-catalog.js";

export const SITE_URL = "https://company.toastduck.com";

const TYPE_LABELS = {
  "Molded case circuit breaker": { short: "MCCB", long: "molded case circuit breakers (MCCB)" },
  "Miniature circuit breaker": { short: "MCB", long: "miniature circuit breakers (MCB)" },
  VFD: { short: "VFD", long: "variable frequency drives (VFD)" },
  Contactor: { short: "Contactor", long: "contactors" },
  "AC contactor": { short: "AC Contactor", long: "AC contactors" },
  "Power Contactor": { short: "Power Contactor", long: "power contactors" },
  "Contactor Relay": { short: "Contactor Relay", long: "contactor relays" },
  PLC: { short: "PLC", long: "PLC programmable logic controllers" },
  touchscreen: { short: "HMI", long: "HMI touch panels" },
  "Servo motor": { short: "Servo", long: "servo motors and drives" },
};

// Derived from the single source of truth (PRODUCT_CATALOG) into the
// { brand, items } array shape consumed by getProductSEO() below.
export const BRAND_PRODUCTS = Object.entries(PRODUCT_CATALOG).map(
  ([brand, items]) => ({ brand, items })
);

// Build lookup: model -> { brand, type, title, description, url }
export function getProductSEO() {
  const map = {};
  for (const { brand, items } of BRAND_PRODUCTS) {
    for (const { model, type } of items) {
      // Skip entries without a type so no "undefined" leaks into title/description.
      if (!type) continue;
      const labels = TYPE_LABELS[type] || { short: type, long: type };
      const urlSegment = encodeURIComponent(model);
      map[model] = {
        model,
        brand,
        type,
        url: `${SITE_URL}/products/${urlSegment}`,
        title: `${brand} ${model} ${labels.short} Products & Price List | Toastduck`,
        description: `Browse ${brand} ${model} ${labels.long} with reference prices and specifications at Toastduck International. Hong Kong-based supplier of industrial electrical components.`,
      };
    }
  }
  return map;
}

export const PRODUCTS_INDEX_SEO = {
  url: `${SITE_URL}/products`,
  title:
    "Industrial Electrical Products Catalog | ABB, Schneider, Siemens, Chint | Toastduck",
  description:
    "Browse industrial electrical products: molded case and miniature circuit breakers, variable frequency drives (VFD), PLCs, contactors and servo motors from ABB, Schneider Electric, Siemens, Chint, DELIXI and Panasonic.",
};
