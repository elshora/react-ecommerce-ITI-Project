import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Home from "./pages/Home";
import MyNav from "./components/MyNav";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calulateTotals, getCart } from "./store/reducers/cart/cartSlice";
import Product from "./pages/Product";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calulateTotals());
  }, [dispatch, cartItems]);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
