import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import About from "./components/About";
import Footer from "./components/Footer";
// pages
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  // const [user, setUser] = useState(localStorage.getItem("user"));
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   // console.log(storedUser);
  //   if (!storedUser) {
  //     navigate("/login");
  //   } else {
  //     setUser(storedUser);
  //   }
  // }, []);

  const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    return user ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <Nav cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/headphones"
          element={
            <ProtectedRoute>
              <Headphones />
            </ProtectedRoute>
          }
        />
        <Route
          path="/speakers"
          element={
            <ProtectedRoute>
              <Speakers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/earphones"
          element={
            <ProtectedRoute>
              <Earphones />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:slug"
          element={<ProductDetails setCartItemCount={setCartItemCount} />}
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
