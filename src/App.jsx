import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="pricing" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
