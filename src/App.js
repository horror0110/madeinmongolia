import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";
import { GlobalProvider } from "./context/GlobalContext";
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage";
import DeliveryPage from "./pages/DeliveryPage";
import LoginPage from "./pages/LoginPage";
import SellersPage from "./pages/SellersPage";
import EmeelPage from "./pages/EmeelPage";
import ShopDetailPage from "./pages/ShopDetailPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:name" element={<ProductDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/delivery_info" element={<DeliveryPage />} />
            <Route path="/users/login" element={<LoginPage />} />
            <Route path="/sellers" element={<SellersPage />} />
            <Route path="/page/emeel" element={<EmeelPage />} />
            <Route path="/shops/visit/:name" element={<ShopDetailPage />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
