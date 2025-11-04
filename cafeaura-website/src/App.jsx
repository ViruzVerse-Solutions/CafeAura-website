<<<<<<< HEAD
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
=======
import React from "react";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Contact />
    </>
  );
>>>>>>> d1e7ba7376f0ef41d79a1a8a5ef7a6ba258682a8
}

export default App;
