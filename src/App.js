import "./App.css";
import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
