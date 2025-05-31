import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
