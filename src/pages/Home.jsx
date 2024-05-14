import React from 'react';
import '../styles/home.css'; 
import Title from '../components/home/Title';
import Button from '../components/home/Button';
import Card from '../components/event/Card.jsx';

function Home() {
  return (
    <>
      <Title />
      <Button href="https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page" target="_blank" className="first">View Source</Button>
      <Button href="https://youtu.be/1pW_sk-2y40" target="_blank" className="sec">Découvrir Nous Event</Button>
      <Button href="https://x.com/juxtopposed" target="_blank" className="third">Se Connecter</Button>
      <Card />
    </>
  );
}

export default Home; // Ensure the component is named correctly and exported
