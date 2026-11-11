// Shared notice shown on top of the /products pages, pointing visitors to
// the new product pages on the main site (www.toastduck.com).
const NEW_PRODUCTS_URL = "https://www.toastduck.com/products";

const ProductPageNotice = () => (
  <div
    role="status"
    className="mb-8 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-center text-sm md:text-base text-sky-900"
  >
    <span className="font-medium">A new product page is now live.</span>{" "}
    <span>
      Please visit{" "}
      <a
        href={NEW_PRODUCTS_URL}
        className="font-semibold text-sky-700 underline break-all hover:text-sky-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {NEW_PRODUCTS_URL}
      </a>
    </span>
  </div>
);

export default ProductPageNotice;
