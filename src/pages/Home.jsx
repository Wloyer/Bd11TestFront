import React from 'react';
import '../styles/home.css'; 
import Title from '../components/home/Title';
import Button from '../components/home/Button';
import Card from '../components/event/Card.jsx';
import HeaderHome from '../components/home/header.jsx';
import FAQ from '../components/faq.jsx';

function Home() {
  return (
    <>
      <HeaderHome/>
      <FAQ/>
    </>
  );
}

export default Home; 
