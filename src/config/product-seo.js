// Shared product catalog metadata for SEO.
// Single source of truth used by both the frontend SeoSync component
// and scripts/postbuild.mjs (build-time prerender + sitemap).
// Keep in sync with src/components/ProductList.jsx (productData).

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

export const BRAND_PRODUCTS = [
  {
    brand: "Chint",
    items: [
      { model: "NM1", type: "Molded case circuit breaker" },
      { model: "NXM", type: "Molded case circuit breaker" },
      { model: "NXB-63G", type: "Molded case circuit breaker" },
      { model: "DZ15", type: "Molded case circuit breaker" },
      { model: "DZ20", type: "Molded case circuit breaker" },
      { model: "NXMS", type: "Molded case circuit breaker" },
      { model: "NXB-63", type: "Miniature circuit breaker" },
      { model: "NB1-63", type: "Miniature circuit breaker" },
      { model: "NB1-63DC", type: "Miniature circuit breaker" },
      { model: "NB7", type: "Miniature circuit breaker" },
      { model: "NXB-125", type: "Miniature circuit breaker" },
      { model: "NB1-63H", type: "Miniature circuit breaker" },
      { model: "NXC", type: "Miniature circuit breaker" },
    ],
  },
  {
    brand: "DELIXI",
    items: [
      { model: "CDM1", type: "Molded case circuit breaker" },
      { model: "CDM3S", type: "Molded case circuit breaker" },
      { model: "CDM3LS", type: "Molded case circuit breaker" },
      { model: "CDM3E", type: "Molded case circuit breaker" },
      { model: "JZ7", type: "Contactor Relay" },
      { model: "JZC1", type: "Contactor Relay" },
      { model: "JZC4s", type: "Contactor Relay" },
    ],
  },
  {
    brand: "ABB",
    items: [
      { model: "Tmax XT", type: "Molded case circuit breaker" },
      { model: "Tmax DC", type: "Molded case circuit breaker" },
      { model: "Tmax", type: "Molded case circuit breaker" },
      { model: "Formula", type: "Molded case circuit breaker" },
      { model: "Formula M", type: "Molded case circuit breaker" },
      { model: "SH200", type: "Miniature circuit breaker" },
      { model: "S200", type: "Miniature circuit breaker" },
      { model: "S200M DC", type: "Miniature circuit breaker" },
      { model: "S200M UC", type: "Miniature circuit breaker" },
      { model: "S800", type: "Miniature circuit breaker" },
      { model: "ACS880", type: "VFD" },
      { model: "ACS580", type: "VFD" },
      { model: "ACS550", type: "VFD" },
      { model: "ACS530", type: "VFD" },
      { model: "ACS510", type: "VFD" },
      { model: "ACS180", type: "VFD" },
      { model: "ACS380", type: "VFD" },
    ],
  },
  {
    brand: "Schneider",
    items: [
      { model: "CVS", type: "Molded case circuit breaker" },
      { model: "LC1D", type: "AC contactor" },
      { model: "ATV12", type: "VFD" },
      { model: "ATV610", type: "VFD" },
      { model: "ATV320", type: "VFD" },
      { model: "ATV600", type: "VFD" },
      { model: "ATV340", type: "VFD" },
      { model: "ATV900", type: "VFD" },
      { model: "ATV630", type: "VFD" },
      { model: "ATV930", type: "VFD" },
      { model: "ATV310A", type: "VFD" },
      { model: "ATV212", type: "VFD" },
      { model: "ATV310E", type: "VFD" },
    ],
  },
  {
    brand: "Siemens",
    items: [
      { model: "3TS", type: "Contactor" },
      { model: "3RT20", type: "Power Contactor" },
      { model: "3RT6", type: "Power Contactor" },
      { model: "S7-1200", type: "PLC" },
      { model: "S7-1200 G2", type: "PLC" },
      { model: "S7-200 SMART", type: "PLC" },
      { model: "S7-1500", type: "PLC" },
      { model: "S7-300", type: "PLC" },
      { model: "S7-400", type: "PLC" },
      { model: "PLC-1500", type: "PLC" },
      { model: "HMI", type: "touchscreen" },
    ],
  },
  {
    brand: "Panasonic",
    items: [
      { model: "MINAS A6", type: "Servo motor" },
      { model: "MGM", type: "Servo motor" },
      { model: "MHM", type: "Servo motor" },
    ],
  },
];

// Build lookup: model -> { brand, type, title, description, url }
export function getProductSEO() {
  const map = {};
  for (const { brand, items } of BRAND_PRODUCTS) {
    for (const { model, type } of items) {
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
