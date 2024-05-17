import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import axios from 'axios';
import Cookies from 'js-cookie';
import Connexion from '../pages/Connexion';

// Mock axios and js-cookie
jest.mock('axios');
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

describe('Connexion Component', () => {
  it('handles successful login', async () => {
    // Mock the axios post response
    axios.post.mockResolvedValue({
      data: {
        user: {
          email: 'test@gmail.com',
          roles: ['ROLE_USER'],
          id: 3,
          firstname: 'test',
          lastname: 'test',
          phone: '0123456789',
          birthdate: '2002-06-10',
        },
        token: 'fake-token',
      },
    });

    // Render the component
    const { getByLabelText, getByText } = render(<Connexion />);

    // Fill out the form
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@gmail.com' } });
    fireEvent.change(getByLabelText(/mot de passe/i), { target: { value: 'azertyuiop' } });

    // Submit the form
    fireEvent.click(getByText(/se connecter/i));

    // Wait for the login process to complete
    await waitFor(() => {
      // Check if the cookie has been set
      expect(Cookies.set).toHaveBeenCalledWith('user', JSON.stringify({
        email: 'test@gmail.com',
        roles: ['ROLE_USER'],
        id: 3,
        firstname: 'test',
        lastname: 'test',
        phone: '0123456789',
        birthdate: '2002-06-10',
      }));

      // Check if the page redirects to the home page
      expect(window.location.href).toMatch(/\/$/);
    });
  });
});
