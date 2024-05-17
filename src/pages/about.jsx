import React from 'react';
import Faq from '../components/faq';

export default function About() {
    return (
        <>
            <div className='container px-4 mx-auto'>
                <h1 className='text-4xl font-bold lg:text-5xl text-white' style={{margin:'16px'}}>À propos</h1>
                <p>
                    Le Havre est une ville portuaire du nord-ouest de la France, située sur la rive droite de l'estuaire de la Seine. Sa population est d'environ 170 000 habitants, ce qui en fait la deuxième plus grande ville de Normandie après Rouen. Le Havre est également la plus grande ville de la région du Havre, qui comprend 17 communes et compte environ 250 000 habitants.
                    <br />
                    Le Havre Events est un endroit idéal pour accueillir des événements de toutes sortes. Avec ses installations modernes et son emplacement central, c'est l'endroit parfait pour organiser des conférences, des expositions, des mariages et bien plus encore.
                </p>
                <br />
                <h2 className='text-4xl font-bold lg:text-5xl text-white' style={{textAlign:'center',margin:'16px'}}>Information</h2>
                <div style={{ display: 'flex', flexDirection: 'row', width:'100%',justifyContent:'space-between' }} id="offline">
                    <div style={{width:'50%'}}>
                        <div style={{ width: '100%', height: '400px' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://maps.google.com/maps?q=Le%20Havre,%20France&z=15&output=embed`}
                            ></iframe>
                        </div>
                    </div>
                    <div style={{textAlign:'center', width:'50%', marginTop:'15%'}}>
                        <p>
                            Pour toute information supplémentaire, veuillez contacter :
                        </p>
                        <ul>
                            <li>Téléphone : +33 2 00 00 00 00</li>
                            <li>Email : contact@lehavre-events.com</li>
                        </ul>

                        <h3 class="subHeading">Address</h3>
                        <address>
                            1 Alamo Plaza<br />
                            Le Havre, 76350
                        </address>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    );
}