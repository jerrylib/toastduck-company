import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../config/products";
import { PRODUCT_CATALOG } from "../config/product-catalog";

const ProductList = () => {
  const brands = [
    "Chint",
    "DELIXI",
    "ABB",
    "Schneider",
    "Siemens",
    "Panasonic",
  ];

  // 从 sessionStorage 恢复上次选中的标签，校验合法性后回退到默认值
  const STORAGE_KEY = "productList.activeTab";
  const [activeTab, setActiveTab] = useState(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return brands.includes(saved) ? saved : "Chint";
  });
  const navigate = useNavigate();

  const handleClick = (url) => {
    if (url) {
      navigate(url);
    }
  };

  const handleTabClick = (brand) => {
    setActiveTab(brand);
    sessionStorage.setItem(STORAGE_KEY, brand);
  };

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleTabClick(brand)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded transition-all duration-200 ${
                activeTab === brand
                  ? "bg-sky-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
                  Model
                </th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT_CATALOG[activeTab].map((product, index) => (
                <tr
                  key={product.model}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-sky-50 transition-colors duration-150`}
                >
                  <td
                    className={`px-4 py-3 text-sm md:text-base font-medium ${!!PRODUCTS[product.model] ? "text-blue-600 cursor-pointer underline" : "text-gray-800"}`}
                    onClick={() => handleClick(product.model)}
                  >
                    {product.model} (
                    <span className="text-red-400 text-sm-0">
                      {PRODUCTS[product.model]?.length || 0}
                    </span>
                    )
                  </td>
                  <td className="px-4 py-3 text-sm md:text-base text-gray-600">
                    {product.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          For more product information, please contact us.
        </p>
      </div>
    </section>
  );
};

export default ProductList;
