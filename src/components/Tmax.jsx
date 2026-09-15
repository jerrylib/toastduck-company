import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PRODUCTS from '../config/products';

const PAGE_SIZE = 20;

const formatPrice = (price, showPrice) => {
  let value = price;
  if (price !== showPrice) {
    return (
      <span className="font-bold text-rose-600">
        {showPrice.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}&nbsp;&nbsp;
        <span className="text-gray-500 line-through">
          {price.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </span>
    );
  }
  return (
    <span className="font-bold text-rose-600">
      {value.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </span>
  );
};

const Tmax = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => PRODUCTS[type] || [], [type]);

  // 1. 切换分类或路由参数时重置回第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  // 2. 切换分页时平滑滚动回顶部
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  // 计算总页数和当前页切片数据
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  // 计算可选页码：前 3 页，后 8 页
  const visiblePages = useMemo(() => {
    if (totalPages <= 1) return [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 8);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <section className="section-lg bg-default mt-[30px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-8">
          <button
            className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => navigate('/products')}
          >
            <svg
              className="w-4 h-4 mr-1.5 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Thumbnail</th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">OrderId</th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Model</th>
                <th className="px-4 py-3 text-left text-sm md:text-base font-semibold">Specification</th>
                <th className="px-4 py-3 text-right text-sm md:text-base font-semibold whitespace-nowrap">
                  Price (RMB/pcs)
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr
                    key={`${item.model}-${item.spec}-${index}`}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-sky-50 transition-colors duration-150`}
                  >
                    <td className="px-4 py-3 text-sm md:text-base text-gray-600 font-mono">
                      <img className="max-w-80" src={item.url} alt="thumbnail" />
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base text-gray-600 font-mono">{item.orderId}</td>
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
                      {formatPrice(item.price, item.showPrice)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 可点击选择的分页栏 */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 bg-white px-4 py-3 mt-4 rounded-lg shadow-sm">
            {/* 左侧：数量信息 */}
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
              <span className="font-medium">{Math.min(currentPage * PAGE_SIZE, filtered.length)}</span> of{' '}
              <span className="font-medium">{filtered.length}</span> results
            </div>

            {/* 右侧：页码列表控制区 */}
            <div className="flex items-center flex-wrap gap-1">
              {/* 上一页 */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                &lt;
              </button>

              {/* 如果窗口未覆盖到第 1 页，显示第 1 页和省略号 */}
              {visiblePages[0] > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="min-w-[34px] h-[34px] px-2 text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                  >
                    1
                  </button>
                  {visiblePages[0] > 2 && <span className="px-1 text-gray-400">...</span>}
                </>
              )}

              {/* 前3页 ~ 当前页 ~ 后8页 */}
              {visiblePages.map((page) => {
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[34px] h-[34px] px-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-sky-700 text-white shadow-sm'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* 如果窗口未覆盖到最后一页，显示省略号和最后一页 */}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                    <span className="px-1 text-gray-400">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="min-w-[34px] h-[34px] px-2 text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* 下一页 */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-gray-500 text-xs md:text-sm mt-6">
          Prices are for reference only. For actual quotes, please contact us.
        </p>
      </div>
    </section>
  );
};

export default Tmax;