import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import PRODUCTS from '../config/products';

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('Siemens');
  const navigate = useNavigate();

  const brands = ['Chint', 'DELIXI', 'ABB', 'Schneider', 'Siemens'];

  const productData = {
    Chint:[
      { model: 'NM1', type: 'Molded case circuit breaker' },
      { model: 'NXM', type: 'Molded case circuit breaker' },
      { model: 'NXB-63G', type: 'Molded case circuit breaker' },
      { model: 'DZ15', type: 'Molded case circuit breaker' },
      { model: 'DZ20', type: 'Molded case circuit breaker' },
      { model: 'NXMS', type: 'Molded case circuit breaker' },
    ],
    DELIXI:[
      { model: 'CDM1', type: 'Molded case circuit breaker' },
      { model: 'CDM3S', type: 'Molded case circuit breaker' },
      { model: 'CDM3LS', type: 'Molded case circuit breaker' },
      { model: 'CDM3E', type: 'Molded case circuit breaker' }
    ],
    ABB: [
      { model: 'Tmax XT', type: 'Molded case circuit breaker' },
      { model: 'Tmax DC', type: 'Molded case circuit breaker' },
      { model: 'Tmax', type: 'Molded case circuit breaker'  },
      { model: 'Formula', type: 'Molded case circuit breaker' },
      { model: 'Formula M', type: 'Molded case circuit breaker' },
    ],
    Schneider: [
      { model: 'CVS', type: 'Molded case circuit breaker' },
      { model: 'LC1D', type: 'AC contactor' },
    ],
    Siemens: [
      { model: '3TS' },
      { model: '3RT20' },
      { model: '3RT6' },
      { model: 'S7-1200', type: 'PLC' },
      { model: 'S7-1200 G2', type: 'PLC' },
      { model: 'S7-200 SMART', type: 'PLC' },
      // { model: 'S7-200 SMART G2', type: 'PLC' },
      { model: 'S7-1500', type: 'PLC' },
      { model: 'S7-300', type: 'PLC' },
      { model: 'S7-400', type: 'PLC' },
      { model: 'PLC-1500', type: 'PLC' },
    ],
    
  };

  const handleClick = (url) => {
    if (url) {
      navigate(url);
    }
  }

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveTab(brand)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium rounded transition-all duration-200 ${
                activeTab === brand
                  ? 'bg-sky-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Model</th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {productData[activeTab].map((product, index) => (
                <tr
                  key={product.model}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-sky-50 transition-colors duration-150`}
                >
                  <td className={`px-4 py-3 text-sm md:text-base font-medium ${!!PRODUCTS[product.model] ? 'text-blue-600 cursor-pointer underline' : 'text-gray-800'}`} onClick={() => handleClick(product.model)}>
                    {product.model} (<span className='text-red-400 text-sm-0'>{PRODUCTS[product.model]?.length || 0}</span>)
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
