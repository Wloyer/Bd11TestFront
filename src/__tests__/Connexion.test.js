import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Cookies from 'js-cookie';
import Connexion from '../pages/Connexion';

// Configurer le mock pour axios
const mock = new MockAdapter(axios);

describe('Connexion Component', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('renders the login form', () => {
        render(<Connexion />);
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mot de passe/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Se connecter/i })).toBeInTheDocument();
    });

    it('handles successful login', async () => {
        // Configurer le mock pour la requête POST
        mock.onPost('http://localhost:8000/api/login').reply(200, {
            token: 'fake-token'
        });
    
        render(<Connexion />);
    
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@gmail.com' } });
        fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'azertyuiop' } });
        fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));
    
        await waitFor(() => {
            expect(Cookies.get('user')).toEqual(JSON.stringify({
                email: 'test@gmail.com',
                token: 'fake-token'
            }));
        });
    
        expect(window.location.pathname).toBe('/');
    });

    it('handles login error', async () => {
        // Configurer le mock pour la requête POST
        mock.onPost('http://localhost:8000/api/login').reply(500);
    
        render(<Connexion />);
    
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@gmail.com' } });
        fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: 'azertyuiop' } });
        fireEvent.click(screen.getByRole('button', { name: /Se connecter/i }));
    
        await waitFor(() => {
            expect(screen.getByText(/Erreur lors de la connexion/i)).toBeInTheDocument();
        });
    });
    
});
