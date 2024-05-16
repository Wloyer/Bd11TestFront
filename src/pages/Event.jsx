import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr'; // Import French locale for moment
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Card from '../components/event/Card';
import '../styles/event/calendar.css'; // Import your custom CSS

// Set the locale to French
moment.locale('fr');
const localizer = momentLocalizer(moment);

// Localization for react-big-calendar
const messages = {
  allDay: 'Toute la journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  noEventsInRange: 'Aucun événement prévu',
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`
};

Modal.setAppElement('#root');

const Event = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [viewMode, setViewMode] = useState('calendar'); // State for view mode
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/event/event-informations', { withCredentials: true })
      .then(response => {
        const eventsData = response.data.resultat.map(event => ({
          ...event,
          start: new Date(event.date),
          end: new Date(event.date),
        }));
        setEvents(eventsData);
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

  const EventComponent = ({ event }) => (
    <div className="event-container" onClick={() => handleSelectEvent(event)}>
      <h3 className="event-title">{event.name}</h3>
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-date">{new Date(event.date).toLocaleDateString()}</div>
      <div className="event-price">{event.price} €</div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Liste des événements</h1>
      <div className="mb-4">
        <button onClick={() => setViewMode('calendar')} className={`btn ${viewMode === 'calendar' ? 'btn-primary' : 'btn-secondary'}`}>
          Vue Calendrier
        </button>
        <button onClick={() => setViewMode('card')} className={`btn ml-2 ${viewMode === 'card' ? 'btn-primary' : 'btn-secondary'}`}>
          Vue Carte
        </button>
      </div>
      {viewMode === 'calendar' ? (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          components={{
            event: EventComponent
          }}
          onSelectEvent={handleSelectEvent}
          views={['month']} // Ensure only month view is available
          messages={messages} // Set the French messages
        />
      ) : (
        <div className="flex flex-wrap">
          {events.map(event => (
            <Card key={event.name} event={event} onSelect={handleSelectEvent} />
          ))}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détails de l'événement"
        className="fixed inset-0 flex items-center justify-center p-4 z-9999"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedEvent && (
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-black">
            <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-gray-600">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
            <img className="w-full mb-4" src={selectedEvent.image} alt={selectedEvent.name} />
            <div>Date: {new Date(selectedEvent.date).toLocaleDateString()}</div>
            <div>Prix: {selectedEvent.price} €</div>
            <button onClick={handleReserve} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Réserver
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Event;
