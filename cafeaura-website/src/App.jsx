import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="features">
          <Features />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
