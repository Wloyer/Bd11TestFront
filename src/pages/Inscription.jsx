import React, { useState } from 'react';
import axios from 'axios';
import '../styles/connexion.css';
import "../styles/navbar.scss";

const Inscription = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        birthdate: '',
        plainPassword: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', formData)
            .then(response => {
                console.log(response.data);
                alert('Inscription réussie');
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Erreur lors de l\'inscription');
            });
    };

    return (
        <div className="inscription-container">
            <h1>Formulaire d'Inscription</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">Prénom:</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastname">Nom:</label>
                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Téléphone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="birthdate">Date de naissance:</label>
                    <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="plainPassword">Mot de passe:</label>
                    <input type="password" id="plainPassword" name="plainPassword" value={formData.plainPassword} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="agreeTerms">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                        />
                        J'accepte les termes et conditions.
                    </label>
                </div>
                <br />
                <button className="btn-connexion" type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;
