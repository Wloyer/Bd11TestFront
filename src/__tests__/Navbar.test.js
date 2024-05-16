import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar';

jest.mock('js-cookie', () => ({
    get: jest.fn(),
    remove: jest.fn(),
}));

describe('Navbar Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders login and registration buttons when user is not logged in', () => {
        Cookies.get.mockReturnValue(undefined);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        expect(screen.getByText(/Se connecter/i)).toBeInTheDocument();
        expect(screen.getByText(/Inscription/i)).toBeInTheDocument();
        expect(screen.queryByText(/Déconnexion/i)).not.toBeInTheDocument();
    });

    it('renders logout button when user is logged in', () => {
        Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@gmail.com' }));

        render(
            <Router>
                <Navbar />
            </Router>
        );

        expect(screen.queryByText(/Se connecter/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Inscription/i)).not.toBeInTheDocument();
        expect(screen.getByText(/Déconnexion/i)).toBeInTheDocument();
    });

    it('handles logout correctly', () => {
        Cookies.get.mockReturnValue(JSON.stringify({ email: 'test@gmail.com' }));

        render(
            <Router>
                <Navbar />
            </Router>
        );

        fireEvent.click(screen.getByText(/Déconnexion/i));
        expect(Cookies.remove).toHaveBeenCalledWith('user');
        // Vérifiez que la redirection a eu lieu en vérifiant le pathname
        expect(window.location.pathname).toBe('/');
    });
});
