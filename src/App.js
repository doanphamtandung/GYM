import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PTPage from "./pages/PTPage";
import Contact from "./components/Contact";
import Address from "./components/Address";

const App = () => {
  return (
    <>
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pt" element={<PTPage />} />
      </Routes>
      <Contact />
      <Address />
      </div>
    </>
  );
};

export default App;
