import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from './pages/404';
import Connexion from './pages/Connexion';   
import Inscription from './pages/Inscription';
import NavBar from './components/Navbar';
import CreateEvent from './pages/admin/event/create';
import Tarif from './pages/Tarif';
import Event from './pages/Event';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Page404 />}/>
        <Route path="/login" element={<Connexion />}/>
        <Route path="/register" element={<Inscription />}/>
        <Route path="/connexion" element={<Connexion />}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/create" element={<ProtectedRoute element={<CreateEvent />} roles={['ROLE_ADMIN']} />}/>
        <Route path="/tarif" element={<Tarif/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/profile/:id" element={<ProtectedRoute element={<Profile />} roles={['ROLE_USER']} />}/>
      </Routes>
    </>
  )
}

export default App;
