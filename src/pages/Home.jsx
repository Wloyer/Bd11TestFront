import React from 'react';
import '../styles/home.css'; 
import Title from '../components/home/Title';
import Button from '../components/home/Button';
import Card from '../components/event/Card.jsx';

function Home() {
  return (
    <>
      <Title />
      <Button href="e" target="_blank" className="first">Dérniere Event</Button>
      <Button href="" target="_blank" className="sec">Découvrir Nous Event</Button>
      <Button href="" target="_blank" className="third">Promos</Button>
      <Card />
    </>
  );
}

export default Home; // Ensure the component is named correctly and exported
