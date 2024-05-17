import React from 'react';
import '../../styles/home.css'; 
import Title from '../../components/home/Title';
import Button from '../../components/home/Button';


function Home() {
  return (
    <>
    <div className='header-home'>
      <Title />
      <Button href="/Event"  className="first">Dérnierement à l'affiche</Button>
      <Button href="/Event"  className="sec">Découvrir Nos Events</Button>
      <Button href="/tarif"  className="third">Promos</Button>
    </div>
    </>
  );
}

export default Home; 
