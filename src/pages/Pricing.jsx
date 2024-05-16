import React from 'react';
import '../styles/pricing.css';
import NavBar from '../components/Navbar.jsx';
import devanture from '../../public/devanture.jpg'
import drancy from '../../public/drancy.jpeg'
import activitesenfamille from '../../public/activitesenfamille.jpeg'
import programmation from '../../public/programmation.jpeg'


const Pricing = () => {
    return (
        <>
        <div className="Pricing">
            <div className="container">
                <div className='tickets'>
                    <div className="split">
                        <h1>Billets Eventmer</h1>
                        <p>Le billet Eventmer donne accès à toutes les expositions ouvertes le jour de votre visite. Pas de réservation par créneau horaire. L'accès aux espaces extérieurs est gratuit aux heures d'ouverture du site.</p>
                        <br />
                        <br />
                        <button>Achetez votre billet</button>
                    </div>
                    <div className='img'>
                        <img src={devanture} alt="devanture" className='devanture' />
                    </div></div>
                <div className='tickets'>
                    <div className="split">
                        <h1>Activités au sein de Eventmer</h1>
                        <br />
                        <p>Découvrez la nouvelle saison des visites et ateliers à Eventmer.</p>
                        <br />
                        <button>Achetez votre billet</button>
                    </div>
                    <div className="img">
                        <img src={drancy} alt="drancy" className='drancy' />
                    </div></div>
                <div className='tickets'>
                    <div className="split">
                        <h1>Activités en Famille</h1>
                        <p>Venir au Eventmer en famille c’est un partage extraordinaire entre petits et grands, une première rencontre avec les œuvres et les cultures de la Méditerranée, un souvenir inoubliable de visite ou de balade au musée pour tous  !</p>
                        <br />
                        <button>Achetez votre billet</button>
                    </div>
                    <div className="img">
                        <img src={activitesenfamille} alt="activites" className='activitesenfamille' />
                    </div></div>
                <div className='tickets'>
                    <div className="split">
                        <h1>Programmation</h1>
                        <p>Programmation
                            La programmation artistique et culturelle est rythmée par des événements, des spectacles et des concerts tout au long de l'année.

                            Pour vous accueillir dans les meilleures conditions, le Mucem met en place toutes les mesures nécessaires afin de garantir votre sécurité.
                        </p>
                        <br />
                        <button>Achetez votre billet</button>
                    </div>
                    <div className="img">
                        <img src={programmation} alt="pgm" className='pgm' />
                    </div></div>
            </div>
        </div>
    </>
    );
};

export default Pricing;