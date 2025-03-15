import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";
import { useState } from "react";
import Header from "./Components/Header";
import CartPage from "./Pages/CartPage";
import { myContext } from "./Context/ThemeContext";

const App = () => {

  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) => (item.id === product.id) ? { ...item, quantity: item.quantity + 1 } : item)
      }
      else return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  console.log(cart);

  const removeProduct = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id))
  }

  const updateCart = (product, quantityUpdate) => {
    setCart((prevCart) => prevCart.map((item) => (product.id === item.id ? { ...product, quantity: item.quantity + quantityUpdate } : item)))

  }


  return (
    <myContext.Provider value={{ cart, addToCart, removeProduct, updateCart }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </myContext.Provider>


  );
};

export default App;
