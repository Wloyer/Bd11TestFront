import React from 'react';
import '../styles/home.css'; 
import NavBar from '../components/Navbar.jsx';
import Title from '../components/home/Title';
import Button from '../components/home/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Button href="https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page" target="_blank" className="first">View Source</Button>
      <Button href="https://youtu.be/1pW_sk-2y40" target="_blank" className="sec">Découvrir Nous Event</Button>
      <Button href="/connexion" target="_blank" className="third">Se Connecter</Button>
    </div>
  );
}

export default App;
