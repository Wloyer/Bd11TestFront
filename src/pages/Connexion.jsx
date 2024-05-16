import React, { useState } from 'react';
import axios from 'axios';
import '../styles/connexion.css';
import "../styles/navbar.scss";

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', { email: email, password: password })
            .then(response => {
                console.log(response.data);
                alert('Connexion réussie');
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Erreur lors de la connexion');
            });
    };

    return (
        <div className="connexion-container">
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <br />
                <button className='btn-connexion' type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Connexion;
