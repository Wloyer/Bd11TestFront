import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Connexion from '../components/Connexion';

describe('Connexion Component', () => {
    test('renders Connexion component and interacts with form elements', () => {
        render(<Connexion />);
        
        expect(screen.getByText('Connexion')).toBeInTheDocument();
        
        const emailInput = screen.getByLabelText('Email:');
        expect(emailInput).toBeInTheDocument();
        
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(emailInput.value).toBe('test@example.com');
        
        const passwordInput = screen.getByLabelText('Mot de passe:');
        expect(passwordInput).toBeInTheDocument();
        
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
        

        const submitButton = screen.getByRole('button', { name: /se connecter/i });
        expect(submitButton).toBeInTheDocument();
        
        fireEvent.click(submitButton);
        
    });
});
