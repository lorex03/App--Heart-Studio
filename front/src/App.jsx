import React from "react";
import "./App.css";
import { Tranquiluxe } from "uvcanvas"
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Ofertas from "./components/Ofertas.jsx";
import About2 from "./components/About2.jsx";


function App() {

  return (
    <div className="App">
      <div className="background">
        <Tranquiluxe className="Velustro" />
      </div>
      <div className="content">
        <Navbar />

        <div id="about">
          <About />
        </div>

        <div id="about2">
          <About2/>
        </div>

        <div id="ofertas">
          <Ofertas />
        </div>


        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;