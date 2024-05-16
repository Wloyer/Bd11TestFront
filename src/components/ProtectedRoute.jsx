import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element, roles }) => {
  const userCookie = Cookies.get('user');
  const user = userCookie ? JSON.parse(userCookie) : null;

  if (!user || !roles.some(role => user.roles.includes(role))) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
