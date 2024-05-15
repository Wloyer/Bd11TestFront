import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from './pages/404';
import Connexion from './pages/Connexion';   
import Inscription from './pages/Inscription';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/register" element={<Inscription />} />
      </Routes>

    </>
  )
}

export default App
