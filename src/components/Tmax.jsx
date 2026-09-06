import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PRODUCTS from '../config/products';

const formatPrice = (value) =>
  value.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Tmax = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const filtered = useMemo(() => PRODUCTS[type] || [], [type]);

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-8">
          <button className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" onClick={() => navigate('/products')}>
            <svg className="w-4 h-4 mr-1.5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th
                  className="px-4 py-3 text-left text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none"
                >
                  OrderId
                </th>
                <th
                  className="px-4 py-3 text-left text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none"
                >
                  Model
                </th>
                <th
                  className="px-4 py-3 text-left text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none"
                >
                  Specification
                </th>
                <th
                  className="px-4 py-3 text-right text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none whitespace-nowrap"
                >
                  Price (RMB/pcs)
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filtered.map((item, index) => (
                  <tr
                    key={`${item.model}-${item.spec}-${index}`}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-sky-50 transition-colors duration-150`}
                  >
                    <td className="px-4 py-3 text-sm md:text-base text-gray-600 font-mono">
                      {item.orderId}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                      {item.model}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-gray-600 font-mono">
                      {item.remark?.split('|').map((line, idx) => (
                        <div key={idx} className="whitespace-nowrap">
                          {line.trim()}
                        </div>
                      ))}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-right whitespace-nowrap">
                      <span className="font-bold text-rose-600">
                        {formatPrice(item.price || item.showPrice)}
                      </span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-xs md:text-sm mt-6">
          Prices are for reference only. For actual quotes, please contact us.
        </p>
      </div>
    </section>
  );
};

export default Tmax;
