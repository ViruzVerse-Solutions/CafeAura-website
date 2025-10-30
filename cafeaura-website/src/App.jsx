import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(){
  return (
    <>
      <Header />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
