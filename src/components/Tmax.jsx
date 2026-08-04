import React, { useMemo, useState } from 'react';

const RAW_DATA = `T5N630 PR221DS-LSI R630 FF 3P ====$gt 7273.43 rmb/pcs
T5N630 PR221DS-LSI R630 PMP 3P ====$gt 8301.98 rmb/pcs
T5H400 PR221DS-LSI R400 PMP 3P ====$gt 5692.71 rmb/pcs
T4N250 TMA250/1250-2500 FF 3P ====$gt 3268.69 rmb/pcs
T7S1600 PR231/P-LSI R1600 FF 3P ====$gt 26996.80 rmb/pcs
T6S630 TMA630/3150-6300 FF 3P ====$gt 9960.82 rmb/pcs
T5S630 TMA500/2500-5000 FF 3P ====$gt 6951.62 rmb/pcs
T5S400 TMA400/2000-4000 FF 3P ====$gt 4158.13 rmb/pcs
T5S400 TMA320/1600-3200 FF 3P ====$gt 4158.13 rmb/pcs
T5N630 PR222DS/P-LSI R630 FF 3P ====$gt 9751.08 rmb/pcs
T5N400 UL/CSA TMA 300-1500..3000 3p F F ====$gt 4576.57 rmb/pcs
T5N400 UL/CSA TMA 400-2000..4000 3p F F ====$gt 4576.57 rmb/pcs
T4V250 PR221DS-LSI R100 FF 3P ====$gt 8689.49 rmb/pcs
T4S250 TMA250/1250-2500 FF 3P ====$gt 3445.70 rmb/pcs
T4N250 TMA125/625-1250 FF 4P N=100% ====$gt 4334.63 rmb/pcs
T4V250 TMA250/1250-2500 FF 3P ====$gt 6209.33 rmb/pcs
T4V250 PR221DS-LSI R250 FF 3P ====$gt 8689.49 rmb/pcs
T4V250 PR222DS/P-LSI R250 FF 3P ====$gt 9601.83 rmb/pcs
T5V630 PR221DS-I R630 FF 3P ====$gt 13152.46 rmb/pcs
T4L250 MA160/960-2240 FF 3P ====$gt 2845.67 rmb/pcs
T6N800 PR221DS-LSI R800 FF 4P ====$gt 12898.54 rmb/pcs
T6N800 TMA800/4000-8000 WMP 3P ====$gt 12316.79 rmb/pcs
T6S800 PR221DS-LSI R800 WMP 3P ====$gt 14026.12 rmb/pcs
T6S800 PR221DS-LSI R800 FF 3P ====$gt 11506.52 rmb/pcs
T6N800 PR222MP-LRIU R630 FF 3P ====$gt 11840.81 rmb/pcs
T6S800 TMA800/4000-8000 FF 3P ====$gt 10772.78 rmb/pcs
T6H630 TMA630/3150-6300 FF 3P ====$gt 11735.08 rmb/pcs
T6N630 PR222DS/P-LSI R630 FF 3P ====$gt 11691.70 rmb/pcs
T6S800 PR222DS/P-LSI R800 WMP 3P ====$gt 16376.79 rmb/pcs
T6H800 PR221DS-LSI R800 WMP 3P ====$gt 15665.06 rmb/pcs
T6N800 PR221DS-I R800 FF 3P ====$gt 10354.48 rmb/pcs
T6N630 TMA630/3150-6300 FF 4P N=100% ====$gt 10987.32 rmb/pcs
T6S630 PR221DS-LSI R630 FF 3P ====$gt 10639.87 rmb/pcs
T6S800 PR221DS-LSI R800 FF 4P ====$gt 14333.63 rmb/pcs
T6H800 TMA800/4000-8000 FF 3P ====$gt 12307.07 rmb/pcs
T6N800 PR222DS/P-LSI R800 FF 3P ====$gt 12471.01 rmb/pcs
T6S800 TMA800/4000-8000 WMP 3P ====$gt 13395.40 rmb/pcs
T6N800 TMA800/4000-8000 FF 4P N=100% ====$gt 12079.24 rmb/pcs
T6N630 PR221DS-LSI R630 FF 3P ====$gt 9574.00 rmb/pcs
T6S800 PR222DS/P-LSI R800 FF 3P ====$gt 13857.16 rmb/pcs
T7S800 PR231/P-LSI R800 FF 3P ====$gt 12083.11 rmb/pcs
T7S1250 PR232/P-LSI R1250 FF 3P ====$gt 22231.34 rmb/pcs
T7S1600M PR231/P-LSI R1600 FF 3P ====$gt 34034.88 rmb/pcs
T7S800M PR231/P-LSI R800 FF 3P ====$gt 17839.82 rmb/pcs
T7S1000 PR231/P-I R1000 FF 3P ====$gt 16553.85 rmb/pcs
T7H1000M PR231/P-LSI R1000 FF 3P ====$gt 26661.32 rmb/pcs
T7H1250 PR231/P-LSI R1250 FF 3P ====$gt 22804.47 rmb/pcs
T7S1000 PR231/P-LSI R1000 FF 4P ====$gt 21523.13 rmb/pcs
T7H1000 PR231/P-LSI R1000 FF 3P ====$gt 18534.13 rmb/pcs
T7S1250M PR231/P-LSI R1250 FF 3P ====$gt 28845.41 rmb/pcs
T6H800 PR221DS-LSI R800 FF 3P ====$gt 13143.15 rmb/pcs
T7L1000 PR231/P-LSI R1000 FF 3P ====$gt 22349.02 rmb/pcs
T7S1000M PR231/P-LSI R1000 FF 3P ====$gt 24776.59 rmb/pcs
T7S1600 PR232/P-LSI R1600 FF 3P ====$gt 30103.44 rmb/pcs
T6S800 PR221DS-I R800 FF 3P ====$gt 11506.52 rmb/pcs
T7S1000 PR232/P-LSI R1000 FF 3P ====$gt 18811.32 rmb/pcs
T7S1250M PR232/P-LSI R1250 FF 3P ====$gt 30181.51 rmb/pcs
T7S1250 PR231/P-I R1250 FF 3P ====$gt 20828.85 rmb/pcs
T7S1250 PR231/P-LSI R1250 FF 3P ====$gt 21448.58 rmb/pcs
T7L1250 PR231/P-I R1250 FF 3P ====$gt 28117.41 rmb/pcs
T7S1000 PR231/P-LSI R1000 FF 3P ====$gt 16553.85 rmb/pcs
T7S800 PR231/P-I R800 FF 3P ====$gt 12083.11 rmb/pcs
T6N800 PR221DS-LSI R800 FF 3P ====$gt 10354.48 rmb/pcs
T7S1600 PR231/P-I R1600 FF 3P ====$gt 26996.80 rmb/pcs
T7S1250 PR231/P-LSI R1250 FF 4P ====$gt 27080.65 rmb/pcs
T5N400 TMA320/1600-3200 WMP 4P N=100% ====$gt 7083.73 rmb/pcs
T5N400 PR221DS-LSI R320 FF 4P ====$gt 5690.35 rmb/pcs
T5S400 PR222DS/P-LSI R320 PMP 3P ====$gt 7316.53 rmb/pcs
T5L400 PR221DS-LSI R400 FF 3P ====$gt 7501.70 rmb/pcs
T5N400 PR221DS-LSI R400 PMP 3P ====$gt 4916.92 rmb/pcs
T5N400 PR221DS-LSI R400 FF 4P ====$gt 5690.35 rmb/pcs
T5H400 PR221DS-LSI R320 PMP 3P ====$gt 5692.71 rmb/pcs
T5S400 PR222DS/P-LSI R400 PMP 3P ====$gt 7316.53 rmb/pcs
T5L400 PR221DS-LSI R320 FF 3P ====$gt 7501.70 rmb/pcs
T5S400 PR221DS-LSI R400 FF 4P ====$gt 5867.46 rmb/pcs
T5S400 TMA400/2000-4000 FF 4P N=100% ====$gt 5496.08 rmb/pcs
T5N400 PR221DS-LSI R320 WMP 3P ====$gt 5713.67 rmb/pcs
T5N400 PR222DS/P-LSI R320 FF 3P ====$gt 6424.27 rmb/pcs
T5N400 PR221DS-I R320 FF 3P ====$gt 3571.49 rmb/pcs
T4H250 TMA250/1250-2500 PMP 3P ====$gt 4494.83 rmb/pcs
T5S400 PR221DS-LSI R320 FF 3P ====$gt 4353.13 rmb/pcs
T5H400 PR221DS-I R320 PMP 3P ====$gt 5476.04 rmb/pcs
T5N400 TMA320/1600-3200 FF 4P N=100% ====$gt 5325.19 rmb/pcs
T5H400 PR221DS-I R400 PMP 3P ====$gt 5476.04 rmb/pcs
T5H400 TMA320/1600-3200 FF 3P ====$gt 4642.93 rmb/pcs
T5N400 TMA320/1600-3200 WMP 3P ====$gt 5509.43 rmb/pcs
T5N400 PR221DS-I R400 FF 3P ====$gt 3571.49 rmb/pcs
T5S400 PR222DS/P-LSI R400 FF 3P ====$gt 6585.01 rmb/pcs
T5N630 PR221DS-I R630 FF 3P ====$gt 6720.10 rmb/pcs
T5S400 TMA400/2000-4000 PMP 3P ====$gt 4800.48 rmb/pcs
T5H400 PR222DS/P-LSI R320 FF 3P ====$gt 7582.10 rmb/pcs
T5N400 PR221DS-LSI R320 FF 3P ====$gt 4224.97 rmb/pcs
T5N400 TMA400/2000-4000 WMP 3P ====$gt 5509.43 rmb/pcs
T5S400 PR222DS/P-LSIG R400 FF 3P ====$gt 7436.48 rmb/pcs
T5N400 PR221DS-LSI R400 FF 3P ====$gt 4224.97 rmb/pcs
T5S400 PR221DS-LSI R400 FF 3P ====$gt 4353.13 rmb/pcs
T5H400 TMA400/2000-4000 FF 3P ====$gt 4642.93 rmb/pcs
T5L400 TMA400/2000-4000 FF 3P ====$gt 7025.54 rmb/pcs
T5H400 PR221DS-I R320 FF 3P ====$gt 4743.34 rmb/pcs
T5H400 PR221DS-LSI R400 FF 3P ====$gt 4958.82 rmb/pcs
T5N400 PR222DS/P-LSI R400 FF 3P ====$gt 6424.27 rmb/pcs
T5S400 PR222DS/P-LSI R320 FF 3P ====$gt 6585.01 rmb/pcs
T5H400 PR221DS-LSI R400 FF 4P ====$gt 6746.92 rmb/pcs
T5S630 PR221DS-I R630 FF 3P ====$gt 7370.10 rmb/pcs
T5V400 PR221DS-I R400 FF 3P ====$gt 7505.22 rmb/pcs
T5S400 PR221DS-I R320 FF 3P ====$gt 4042.09 rmb/pcs
T5N400 PR222DS/P-LSIG R400 FF 3P ====$gt 7285.08 rmb/pcs
T5H400 TMA320/1600-3200 PMP 3P ====$gt 5405.19 rmb/pcs
T5S400 TMA320/1600-3200 FF 4P N=100% ====$gt 5496.08 rmb/pcs
T5N400 TMA400/2000-4000 PMP 3P ====$gt 4680.46 rmb/pcs
T5N400 PR222MP R400 FF 3P ====$gt 5140.56 rmb/pcs
T5N400 TMA400/2000-4000 FF 4P N=100% ====$gt 5325.19 rmb/pcs
T5H400 TMA400/2000-4000 FF 4P N=100% ====$gt 6317.78 rmb/pcs
T5N400 TMA400/2000-4000 FF 3P ====$gt 4034.51 rmb/pcs
T5N400 TMA320/1600-3200 FF 3P ====$gt 4034.51 rmb/pcs
T5S400 PR221DS-I R400 FF 3P ====$gt 4042.09 rmb/pcs
T5S400 PR221DS-LSI R400 PMP 3P ====$gt 5045.05 rmb/pcs
T5H630 PR222DS/P-LSI R630 FF 3P ====$gt 11048.75 rmb/pcs
T5V400 PR221DS-LSI R400 FF 3P ====$gt 8347.45 rmb/pcs
T5S630 PR221DS-I R630 WMP 3P ====$gt 9343.36 rmb/pcs
T5H400 PR222DS/P-LSIG R400 FF 3P ====$gt 8578.05 rmb/pcs
T5L400 PR222DS/P-LSIG R320 FF 3P ====$gt 11388.85 rmb/pcs
T5S630 PR222DS/P-LSI R630 PMP 3P ====$gt 11145.41 rmb/pcs
T5H630 TMA500/2500-5000 FF 3P ====$gt 7889.62 rmb/pcs
T5S630 TMA500/2500-5000 PMP 3P ====$gt 8096.87 rmb/pcs
T5S630 PR221DS-LSI R630 PMP 3P ====$gt 8525.64 rmb/pcs
T5S630 PR221DS-LSI R630 PMP 4P ====$gt 11339.96 rmb/pcs
T5H630 PR221DS-I R630 PMP 3P ====$gt 9539.07 rmb/pcs
T5S630 PR221DS-LSI R630 FF 4P ====$gt 10020.18 rmb/pcs
T5V400 TMA400/2000-4000 FF 3P ====$gt 8077.49 rmb/pcs
T5H630 PR221DS-LSI R630 FF 3P ====$gt 8427.82 rmb/pcs
T5L630 PR222DS/P-LSIG R630 FF 3P ====$gt 17753.66 rmb/pcs
T5N400 PR222DS/P-LSIG R400 PMP 4P ====$gt 10236.81 rmb/pcs
T5H400 PR221DS-LSI R400 PMP 4P ====$gt 7700.92 rmb/pcs
T5H630 PR221DS-LSI R630 WMP 3P ====$gt 10401.06 rmb/pcs
T5S630 PR221DS-I R630 FF 4P ====$gt 11102.31 rmb/pcs
T5H400 PR222DS/P-LSI R400 FF 3P ====$gt 7582.10 rmb/pcs
T5H630 TMA500/2500-5000 FF 4P N=100% ====$gt 10738.82 rmb/pcs
T5L630 PR221DS-I R630 FF 3P ====$gt 11739.48 rmb/pcs
T5H630 PR222DS/P-LSI R630 PMP 3P ====$gt 12150.67 rmb/pcs
T5L400 PR221DS-LSI R400 PMP 3P ====$gt 8235.60 rmb/pcs
T5S630 PR222DS/P-LSI R630 FF 3P ====$gt 10044.61 rmb/pcs
T5L630 PR221DS-LSI R630 FF 3P ====$gt 12849.60 rmb/pcs
T5H400 PR222DS/P-LSIG R400 PMP 3P ====$gt 9310.74 rmb/pcs
T5H630 PR221DS-LSI R630 PMP 3P ====$gt 9526.23 rmb/pcs
T5L400 PR221DS-LSI R320 PMP 3P ====$gt 8235.60 rmb/pcs
T5H400 PR222DS/P-LSI R400 PMP 3P ====$gt 8314.79 rmb/pcs
T5H400 PR222DS/P-LSI R400 FF 4P ====$gt 9368.99 rmb/pcs
T5N630 PR222DS/P-LSIG R630 FF 3P ====$gt 10317.20 rmb/pcs
T5N630 TMA500/2500-5000 FF 4P N=100% ====$gt 9100.34 rmb/pcs
T5N630 PR221DS-LSI R630 FF 4P ====$gt 9717.26 rmb/pcs
T5S630 PR221DS-I R630 PMP 3P ====$gt 8470.89 rmb/pcs
T5H630 PR221DS-I R630 FF 3P ====$gt 8438.28 rmb/pcs
T5S630 PR221DS-LSI R630 WMP 3P ====$gt 9399.29 rmb/pcs
T4V250 PR222DS/P-LSI R250 FF 3P 1150Vac ====$gt 9461.83 rmb/pcs
T6H800 PR222DS/P-LSI R800 FF 3P ====$gt 15596.32 rmb/pcs
T7S1000M PR231/P-LSI R1000 FF 4P ====$gt 29509.40 rmb/pcs
T5H400 PR221DS-LSI R320 FF 3P ====$gt 4958.82 rmb/pcs
T5H400 PR221DS-LSI R400 WMP 3P ====$gt 6489.48 rmb/pcs
T5N630 TMA500/2500-5000 FF 3P ====$gt 6877.68 rmb/pcs
T5H400 PR221DS-I R400 FF 3P ====$gt 4743.34 rmb/pcs
T5N630 PR222DS/P-LSIG R630 FF 4P ====$gt 14093.67 rmb/pcs`;

const parseData = (raw) =>
  raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [left, right] = line.split('====$gt');
      const tokens = left.trim().split(/\s+/);
      const model = tokens[0];
      const spec = tokens.slice(1).join(' ');
      const price = parseFloat(right.replace('rmb/pcs', '').trim());
      const series = model.match(/^T\d+/)?.[0] ?? 'Other';
      return { model, spec, price, series };
    });

const formatPrice = (value) =>
  value.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Tmax = () => {
  const items = useMemo(() => parseData(RAW_DATA), []);
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

  const sortIndicator = (key) => {
    if (sortBy !== key) return <span className="opacity-30 ml-1">↕</span>;
    return <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ABB Tmax Molded Case Circuit Breaker
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Reference price list · Unit: RMB / pcs
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="text-xs md:text-sm text-gray-500">Total Items</div>
            <div className="text-xl md:text-2xl font-bold text-sky-700 mt-1">
              {filtered.length}
              <span className="text-sm text-gray-400 font-normal"> / {items.length}</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="text-xs md:text-sm text-gray-500">Min Price</div>
            <div className="text-xl md:text-2xl font-bold text-emerald-600 mt-1">
              ¥{formatPrice(stats.min)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="text-xs md:text-sm text-gray-500">Avg Price</div>
            <div className="text-xl md:text-2xl font-bold text-amber-600 mt-1">
              ¥{formatPrice(stats.avg)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <div className="text-xs md:text-sm text-gray-500">Max Price</div>
            <div className="text-xl md:text-2xl font-bold text-rose-600 mt-1">
              ¥{formatPrice(stats.max)}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Search</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by model or specification..."
                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Series</label>
              <div className="flex flex-wrap gap-1.5">
                {seriesList.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeries(s)}
                    className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded transition-all duration-200 ${
                      series === s
                        ? 'bg-sky-700 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th
                  className="px-4 py-3 text-left text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none"
                  onClick={() => toggleSort('model')}
                >
                  Model {sortIndicator('model')}
                </th>
                <th
                  className="px-4 py-3 text-left text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none"
                  onClick={() => toggleSort('spec')}
                >
                  Specification {sortIndicator('spec')}
                </th>
                <th
                  className="px-4 py-3 text-right text-sm md:text-base font-semibold cursor-pointer hover:bg-sky-800 transition-colors select-none whitespace-nowrap"
                  onClick={() => toggleSort('price')}
                >
                  Price (RMB) {sortIndicator('price')}
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
                      <span className="inline-block px-2 py-0.5 bg-sky-100 text-sky-800 rounded text-xs font-mono mr-2">
                        {item.series}
                      </span>
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
