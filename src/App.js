import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Reservation from "./routes/Reservation";
import Construction from "./routes/Construction";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/menu2" element={ <Menu /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/reservation" element={ <Reservation /> } />
        <Route path="/construction" element={ <Construction /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
