import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from './pages/404';
import Connexion from './pages/Connexion';   
import Inscription from './pages/Inscription';
import NavBar from './components/Navbar';
import CreateEvent from './pages/admin/event/create';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

    </>
  )
}

export default App
