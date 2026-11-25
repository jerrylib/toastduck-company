// PC parts catalog (brand -> items) for the /pc-parts page.
// Rendering style mirrors src/components/ProductList.jsx: brand tabs + a
// Model / Type table.
//
// NOTE: this is a starter list. Replace the models/types below with the real
// PC-parts stock. Each item may optionally carry a `path` (e.g.
// "/pc-parts/KC3000"); when present the model becomes a clickable link.

export const PC_PARTS_CATALOG = {
  "Brand-new & Original": [
    { model: "RAM", type: "NVMe SSD" },
  ],
  "Used": [
     { model: "RAM", type: "NVMe SSD" },
  ],
};

export const PC_PARTS_INDEX_SEO = {
  url: "https://company.toastduck.com/pc-parts",
  title: "PC Parts Catalog | SSD, RAM, CPU | Toastduck",
  description:
    "Browse PC parts supplied by Toastduck International: NVMe and SATA SSDs, DDR4/DDR5 memory modules, hard drives and CPUs from Kingston, Samsung, Western Digital, Crucial, Intel and AMD.",
};
