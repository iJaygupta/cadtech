import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserProvider from "./context/provider/userProvider";
import Notification from "./components/notification/Notification";


function App() {

  return (
    <Router>
      <UserProvider >
        <Header />
        <Routes />
        <Footer />
        <Notification />
      </UserProvider>
    </Router>
  );
}

export default App;
