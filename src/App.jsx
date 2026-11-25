import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  Preloader,
  Header,
  Home,
  NewsList,
  NewsDetail,
  Footer,
  Modal,
  ProductList,
  PcPartsList,
  Tmax,
} from "./components";
import SeoSync from "./components/SeoSync";
import "./App.css";

import { HashRedirect } from "./HashRedirect";

// Main site home page. This project is served from company.toastduck.com,
// while the marketing home lives on www.toastduck.com — so the Products
// button jumps to the external page instead of an in-app route.
const MAIN_SITE_HOME_URL = "https://www.toastduck.com/products";

function ProductsButton() {
  const navigate = useNavigate();
  return (
    <button
      // onClick={() => {
      //   window.location.href = MAIN_SITE_HOME_URL;
      // }}
      onClick={() => navigate("/products")}
      className="ui-to-top-products"
      aria-label="Go to Products"
      title="Products"
    >
      {/* Miniature circuit breaker (MCB): body + angled toggle + terminal stubs */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6.5" y="3" width="11" height="18" rx="2" />
        <path d="M9.2 14.2l5.6-5.6" strokeWidth="2.5" />
        <path d="M6.5 16.8h11" />
        <path d="M9 1v2M15 1v2M9 21v2M15 21v2" />
      </svg>
    </button>
  );
}

// PC parts shortcut: in-app route /pc-parts, using a RAM module icon so it is
// visually distinct from the circuit-breaker Products button above it.
function PcPartsButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/pc-parts")}
      className="ui-to-top-pcparts"
      aria-label="Go to PC Parts"
      title="PC Parts"
    >
      {/* Memory module (DIMM): PCB bar + chips + contact pins */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6.5" width="20" height="9" rx="1.5" />
        <rect x="5.5" y="9" width="3" height="3" rx="0" />
        <rect x="10.5" y="9" width="3" height="3" rx="0" />
        <rect x="15.5" y="9" width="3" height="3" rx="0" />
        <path d="M5 15.5v3M8.5 15.5v3M12 15.5v3M15.5 15.5v3M19 15.5v3" />
      </svg>
    </button>
  );
}

// Floating WhatsApp shortcut. The wrapper carries the fixed position so the
// contact name can sit in a label to the left of the icon; leave `name` empty
// to show the icon alone.
function WhatsappButton(props) {
  const WHATSAPP_NUMBER = props.number;
  const WHATSAPP_NAME = props.name || "";

  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <div className={`ui-whatsapp ${props.passClassName || ""}`}>
      {WHATSAPP_NAME ? (
        <span className="ui-whatsapp-name" aria-hidden="true">
          {WHATSAPP_NAME}
        </span>
      ) : null}
      <button
        title={`Chat on WhatsApp${WHATSAPP_NAME ? ` – ${WHATSAPP_NAME}` : ""}: ${WHATSAPP_NUMBER}`}
        onClick={() => window.open(WHATSAPP_URL, "_blank")}
        className="ui-to-top-whatsapp"
        aria-label={`Chat on WhatsApp${WHATSAPP_NAME ? ` with ${WHATSAPP_NAME}` : ""}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path
            d="M16.5 14.5s-1.5 1-2.5 0-3-2-3-3 1-2.5 1-2.5-.5-1.5-1.5-1.5c-1.2 0-2 .8-2 2 0 2.5 4 6.5 6.5 6.5 1.2 0 2-.8 2-2 0-1-1.5-1.5-1.5-1.5z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SeoSync />
      <Preloader />
      <div className="page w-full m-0 p-0 pt-[70px] md:pt-0">
        <Header />
        <HashRedirect />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:type" element={<Tmax />} />
          <Route path="/pc-parts" element={<PcPartsList />} />
        </Routes>
        <Footer />
      </div>
      <Modal />
      <div className="snackbars" id="form-output-global"></div>
      {/* `name` renders on the label left of the icon; empty = icon only.
          WhatsApp 8613859190905 belongs to Cassie (Marketing Manager). */}
      <WhatsappButton
        number="8613459831691"
        name="Doris"
        passClassName="bottom-[260px]"
      />
      <WhatsappButton number="8613859190905" name="Cassie" />
      <ProductsButton />
      <PcPartsButton />
    </Router>
  );
}

export default App;
