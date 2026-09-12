import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {
  Preloader,
  Header,
  Home,
  NewsList,
  NewsDetail,
  Footer,
  Modal,
  ProductList,
  Tmax
} from './components';
import './App.css';

function ProductsButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/products')}
      className="ui-to-top-products"
      aria-label="Go to Products"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function WhatsappButton() {
  const WHATSAPP_NUMBER = "8613459831691"
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
  return (
    <button
      onClick={() => window.open(WHATSAPP_URL, '_blank')}
      className="ui-to-top-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16.5 14.5s-1.5 1-2.5 0-3-2-3-3 1-2.5 1-2.5-.5-1.5-1.5-1.5c-1.2 0-2 .8-2 2 0 2.5 4 6.5 6.5 6.5 1.2 0 2-.8 2-2 0-1-1.5-1.5-1.5-1.5z" fill="currentColor" stroke="none" />
      </svg>
    </button>
    
  );
}

function App() {
  return (
    <Router>
      <Preloader />
      <div className="page w-full m-0 p-0 pt-[70px] md:pt-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:type" element={<Tmax />} />
        </Routes>
        <Footer />
      </div>
      <Modal />
      <div className="snackbars" id="form-output-global"></div>
      <WhatsappButton />
      <ProductsButton />
    </Router>
  );
}

export default App;
