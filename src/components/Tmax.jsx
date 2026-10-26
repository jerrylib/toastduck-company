import { useMemo, useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import PRODUCTS from "../config/products";

const PAGE_SIZE = 20;

const formatPrice = (price, showPrice) => {
  let value = price;
  if (price !== showPrice) {
    return (
      <span className="font-bold text-rose-600">
        {showPrice.toLocaleString("zh-CN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        &nbsp;&nbsp;
        <span className="text-gray-500 line-through">
          {price.toLocaleString("zh-CN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </span>
    );
  }
  return (
    <span className="font-bold text-rose-600">
      {value.toLocaleString("zh-CN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  );
};

// 模糊匹配：在 orderId / model / specification（remark 按 | 分割）中查找关键词
const matchesKeyword = (item, keyword) => {
  if (!keyword) return true;
  const kw = keyword.toLowerCase();
  const orderId = (item.orderId || "").toLowerCase();
  const model = (item.model || "").toLowerCase();
  const spec = (item.remark || "")
    .split("|")
    .map((line) => line.trim())
    .join(" ")
    .toLowerCase();
  return (
    orderId.includes(kw) || model.includes(kw) || spec.includes(kw)
  );
};

const Tmax = () => {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // 当前放大预览的图片地址；null 表示关闭预览
  const [previewUrl, setPreviewUrl] = useState(null);
  // 搜索关键词（模糊匹配 orderId / model / specification）
  // 初始值优先取自 URL 的 keyword 参数，如 /products/NM1?keyword=xxx
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  // 打开 / 关闭图片放大预览
  const openPreview = (url) => setPreviewUrl(url);
  const closePreview = () => setPreviewUrl(null);

  const filtered = useMemo(() => PRODUCTS[type] || [], [type]);

  // 关键词变化时回到第 1 页，避免停留在超出搜索结果范围的页码；
  // 同时把 keyword 参数保留并写回 URL，方便刷新 / 分享后仍保持筛选
  useEffect(() => {
    const kw = keyword.trim();
    if (kw) {
      setSearchParams({ keyword: kw }, { replace: true });
    } else {
      // 关键词清空时，移除 keyword / page 参数回到默认状态
      setSearchParams({}, { replace: true });
    }
  }, [keyword, setSearchParams]);

  // 按关键词过滤后的完整数据集
  const searched = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    if (!kw) return filtered;
    return filtered.filter((item) => matchesKeyword(item, kw));
  }, [filtered, keyword]);

  // 从 URL 读取当前页码（?page=N），无参数或非法值时默认第 1 页
  const parsedPage = parseInt(searchParams.get("page"), 10);
  const urlPage =
    Number.isInteger(parsedPage) && parsedPage >= 1 ? parsedPage : 1;

  const totalPages = Math.max(1, Math.ceil(searched.length / PAGE_SIZE));
  // 钳制到有效范围，防止地址栏键入超出总页数的值
  const currentPage = Math.min(urlPage, totalPages);

  // 切换分页时平滑滚动回顶部
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // 计算当前页切片数据
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return searched.slice(start, start + PAGE_SIZE);
  }, [searched, currentPage]);

  // 生成分页链接地址：第 1 页不带 ?page=，其余页带 ?page=N
  const getPageUrl = (page) => {
    const p = Math.max(1, page);
    return p <= 1 ? `/products/${type}` : `/products/${type}?page=${p}`;
  };

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
        {/* Header：Back 按钮靠左，搜索框居中，同一行 */}
        <div className="relative mb-4 flex items-center justify-center">
          <Link
            to="/products"
            className="absolute left-0 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1.5 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
          <div className="relative w-full max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by OrderId / Model / Specification..."
              className="w-full pl-10 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            {keyword && (
              <button
                type="button"
                onClick={() => setKeyword("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-700 text-white">
                <th className="px-3 py-2 text-left text-xs md:text-sm font-semibold">
                  Thumbnail
                </th>
                <th className="px-3 py-2 text-left text-xs md:text-sm font-semibold">
                  OrderId
                </th>
                <th className="px-3 py-2 text-left text-xs md:text-sm font-semibold">
                  Model
                </th>
                <th className="px-3 py-2 text-left text-xs md:text-sm font-semibold">
                  Specification
                </th>
                <th className="px-3 py-2 text-right text-xs md:text-sm font-semibold whitespace-nowrap">
                  Price (CNY/pcs)
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr
                    key={`${item.model}-${item.spec}-${index}`}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-sky-50 transition-colors duration-150`}
                  >
                    <td className="px-3 py-1.5">
                      <button
                        type="button"
                        onClick={() => openPreview(item.url)}
                        className="block cursor-zoom-in focus:outline-none"
                        title="Click to enlarge"
                      >
                        <img
                          className="max-w-24 h-auto rounded border border-gray-200"
                          src={item.url}
                          alt="thumbnail"
                        />
                      </button>
                    </td>
                    <td className="px-3 py-1.5 text-xs md:text-sm text-gray-600 font-mono whitespace-nowrap">
                      {item.orderId}
                    </td>
                    <td className="px-3 py-1.5 text-xs md:text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {item.model}
                    </td>
                    <td className="px-3 py-1.5 text-xs md:text-sm text-gray-600 font-mono">
                      {item.remark?.split("|").map((line, idx) => (
                        <div key={idx} className="whitespace-nowrap">
                          {line.trim()}
                        </div>
                      ))}
                    </td>
                    <td className="px-3 py-1.5 text-xs md:text-sm text-right whitespace-nowrap">
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
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * PAGE_SIZE + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * PAGE_SIZE, searched.length)}
              </span>{" "}
              of <span className="font-medium">{searched.length}</span> results
            </div>

            {/* 右侧：页码列表控制区 */}
            <div className="flex items-center flex-wrap gap-1">
              {/* 上一页 */}
              {currentPage > 1 ? (
                <Link
                  to={getPageUrl(currentPage - 1)}
                  rel="prev"
                  className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                >
                  &lt;
                </Link>
              ) : (
                <span className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md opacity-40 cursor-not-allowed">
                  &lt;
                </span>
              )}

              {/* 如果窗口未覆盖到第 1 页，显示第 1 页和省略号 */}
              {visiblePages[0] > 1 && (
                <>
                  <Link
                    to={getPageUrl(1)}
                    className="min-w-[34px] h-[34px] p-2 text-center text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                  >
                    1
                  </Link>
                  {visiblePages[0] > 2 && (
                    <span className="px-1 text-gray-400">...</span>
                  )}
                </>
              )}

              {/* 前3页 ~ 当前页 ~ 后8页 */}
              {visiblePages.map((page) => {
                const isActive = page === currentPage;
                return (
                  <Link
                    key={page}
                    to={getPageUrl(page)}
                    aria-current={isActive ? "page" : undefined}
                    className={`min-w-[34px] h-[34px] p-2 text-center text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-sky-700 text-white shadow-sm"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}

              {/* 如果窗口未覆盖到最后一页，显示省略号和最后一页 */}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                    <span className="px-1 text-gray-400">...</span>
                  )}
                  <Link
                    to={getPageUrl(totalPages)}
                    className="min-w-[34px] h-[34px] p-2 text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                  >
                    {totalPages}
                  </Link>
                </>
              )}

              {/* 下一页 */}
              {currentPage < totalPages ? (
                <Link
                  to={getPageUrl(currentPage + 1)}
                  rel="next"
                  className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100"
                >
                  &gt;
                </Link>
              ) : (
                <span className="px-2.5 py-1 text-sm font-medium border border-gray-300 rounded-md opacity-40 cursor-not-allowed">
                  &gt;
                </span>
              )}
            </div>
          </div>
        )}

        <p className="text-center text-gray-500 text-xs md:text-sm mt-6">
          Prices are for reference only. For actual quotes, please contact us.
        </p>
      </div>

      {/* 图片放大预览 Lightbox */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closePreview}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white text-2xl leading-none hover:bg-white/40 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={previewUrl}
            alt="preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Tmax;
