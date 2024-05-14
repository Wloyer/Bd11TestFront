import React from 'react';
import '../styles/connexion.css';
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
            </form>
        </div>
    );
};

export default Inscription;