import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import PRODUCTS from '../config/products';

const formatPrice = (value) =>
  value.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Tmax = () => {
  const { type } = useParams();
  const items = useMemo(() => PRODUCTS[type] || [], [type]);
  const seriesList = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.series))).sort()],
    [items]
  );

  const [query, setQuery] = useState('');
  const [series, setSeries] = useState('All');
  const [sortBy, setSortBy] = useState('model');
  const [sortDir, setSortDir] = useState('asc');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = items.filter((item) => {
      const matchSeries = series === 'All' || item.series === series;
      const matchQuery =
        !q ||
        item.model.toLowerCase().includes(q) ||
        item.spec.toLowerCase().includes(q);
      return matchSeries && matchQuery;
    });

    const dir = sortDir === 'asc' ? 1 : -1;
    list.sort((a, b) => {
      if (sortBy === 'price') return (a.price - b.price) * dir;
      if (sortBy === 'model') return a.model.localeCompare(b.model) * dir;
      return a.spec.localeCompare(b.spec) * dir;
    });
    return list;
  }, [items, query, series, sortBy, sortDir]);

  const stats = useMemo(() => {
    if (filtered.length === 0) return { min: 0, max: 0, avg: 0 };
    const prices = filtered.map((i) => i.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      avg: prices.reduce((s, p) => s + p, 0) / prices.length,
    };
  }, [filtered]);

  const toggleSort = (key) => {
    if (sortBy === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDir('asc');
    }
  };

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm md:text-base">
            Reference price list · Unit: RMB / pcs
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
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
                  Price (RMB)
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-12 text-center text-gray-400">
                    No matching items. Try a different keyword or series.
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr
                    key={`${item.model}-${item.spec}-${index}`}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-sky-50 transition-colors duration-150`}
                  >
                    <td className="px-4 py-3 text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                      {item.model}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-gray-600 font-mono">
                      {item.spec}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-right whitespace-nowrap">
                      <span className="font-bold text-rose-600">
                        ¥{formatPrice(item.price)}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">/pcs</span>
                    </td>
                  </tr>
                ))
              )}
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
