import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
