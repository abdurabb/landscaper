import React from "react";
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layout/Main'

// pages
import Home from './pages/home/Home'
import ProductDetail from "./pages/home/ProductDetail";


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        limit={1}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<ProductDetail />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
