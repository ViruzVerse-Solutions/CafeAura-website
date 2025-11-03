import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          {/* <Route path="/features" element={<FeaturesPage />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;

