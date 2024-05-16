import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const userData = Cookies.get('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    axios.get('http://localhost:8000/event/profile', { withCredentials: true })
      .then(response => {
        setUser(response.data.user);
        setEvents(response.data.events);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du profil:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Profil Utilisateur</h1>
      {user && (
        <div className="mb-6">
          <h2 className="text-2xl mb-2">Informations</h2>
          <p>Nom: {user.firstname}</p>
          <p>Prénom: {user.lastname}</p>    
          <p>Email: {user.email}</p>
          <p>Téléphone: {user.phone}</p>
          <p>Date de naissance: {user.birthdate}</p>
        </div>
      )}
      <div>
        <h2 className="text-2xl mb-2">Événements Réservés</h2>
        <div className="flex flex-wrap">
          {events.map((event) => (
            <div key={event.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={event.imageEvent} alt={event.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.name}</div>
                <p className="text-gray-700 text-base">Date: {event.eventDate}</p>
                <p className="text-gray-700 text-base">Prix: {event.price} €</p>
                <p className="text-gray-700 text-base">Lieu: {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
