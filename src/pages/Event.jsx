import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Card from '../components/event/Card';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Event = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/event/event-informations', { withCredentials: true })
      .then(response => {
        setEvents(response.data.resultat);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des événements:', error);
      });

    const userData = Cookies.get('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const handleReserve = () => {
    if (!user || !user.roles || !user.roles.includes('ROLE_USER')) {
      navigate('/login');
      return;
    }

    if (!selectedEvent || !selectedEvent.id) {
      console.error('ID de l\'événement non défini');
      return;
    }

    axios.post(`http://localhost:8000/api/event/${selectedEvent.id}/reserve`, {}, {
      withCredentials: true
    })
    .then(response => {
      alert('Réservation réussie !');
      closeModal();
    })
    .catch(error => {
      console.error('Erreur lors de la réservation:', error);
      alert('Erreur lors de la réservation.');
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Liste des événements</h1>
      <div className="flex flex-wrap">
        {events.map(event => (
          <Card key={event.name} event={event} onSelect={handleSelectEvent} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détails de l'événement"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedEvent && (
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-black">
            <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-gray-600">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
            <img className="w-full mb-4" src={selectedEvent.image} alt={selectedEvent.name} />
            <div>Date: {new Date(selectedEvent.date).toLocaleDateString()}</div>
            <div>Prix: {selectedEvent.price} €</div>
            {user && user.roles && user.roles.includes('ROLE_USER') && (
              <button onClick={handleReserve} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Réserver
              </button>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Event;
