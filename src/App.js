import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scrollTotop/ScrollToTop";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
