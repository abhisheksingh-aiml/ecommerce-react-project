import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";

import "./App.css";

function App() {
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
setCartItems([...cartItems, product]);
};

return (
<> <Navbar cartCount={cartItems.length} />


  <Routes>
    <Route
      path="/"
      element={<Home addToCart={addToCart} />}
    />

    <Route
      path="/products"
      element={<Products addToCart={addToCart} />}
    />

    <Route
      path="/cart"
      element={<Cart cartItems={cartItems} />}
    />

    <Route
      path="/about"
      element={<About />}
    />
  </Routes>
</>


);
}

export default App;
