import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import axios from 'axios';
import Cookies from 'js-cookie';
import Connexion from '../pages/Connexion';


jest.mock('axios');
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

describe('Connexion Component', () => {
  it('handles successful login', async () => {
    
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

    const { getByLabelText, getByText } = render(<Connexion />);

    
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@gmail.com' } });
    fireEvent.change(getByLabelText(/mot de passe/i), { target: { value: 'azertyuiop' } });

    fireEvent.click(getByText(/se connecter/i));

    
    await waitFor(() => {
      
      expect(Cookies.set).toHaveBeenCalledWith('user', JSON.stringify({
        email: 'test@gmail.com',
        roles: ['ROLE_USER'],
        id: 3,
        firstname: 'test',
        lastname: 'test',
        phone: '0123456789',
        birthdate: '2002-06-10',
      }));

      
      expect(window.location.href).toMatch(/\/$/);
    });
  });
});
