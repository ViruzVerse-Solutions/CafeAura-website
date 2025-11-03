import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>

        <section id="features">
          <Features />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
