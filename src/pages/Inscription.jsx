import React from 'react';
import '../styles/connexion.css';
import "../styles/navbar.scss";
const Inscription = () => {
    return (
        <div className="inscription-container">
            <h1>Formulaire d'Inscription</h1>
            <form>
                <div>
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" name="nom" />
                </div>
                <div>
                    <label htmlFor="prenom">Prenom:</label>
                    <input type="text" id="prenom" name="prenom" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="tel">Tel:</label>
                    <input type="tel" id="tel" name="tel" />
                </div>
                <div>
                    <label htmlFor="birthdate">Date de naissance:</label>
                    <input type="date" id="birthdate" name="birthdate" />
                </div>
                <button className='btn btn__login' type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;