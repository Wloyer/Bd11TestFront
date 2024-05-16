import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        name: '',
        price: 0,
        eventHour: '',
        bookingDate: '',
        eventDate: '',
        type: '',
        description: '',
        cancel: false,
        nbTicket: 0,
        isSoldOut: false,
        isAdult: false,
        isGuestAdult: false,
        location: '',
        imageEvent: '',
        soldTickets: 0
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEventData({
            ...eventData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullEventHour = `${eventData.eventHour}:00`;

        const dataToSend = {
            ...eventData,
            eventHour: fullEventHour,
        };

        console.log( dataToSend);
        try {
            const response = await axios.post('http://localhost:8000/api/event/new', dataToSend);
            console.log('Événement créé avec succès:', response.data);
            setEventData({
                name: '',
                price: 0,
                eventHour: '',
                bookingDate: '',
                eventDate: '',
                type: '',
                description: '',
                cancel: false,
                nbTicket: 0,
                isSoldOut: false,
                isAdult: false,
                isGuestAdult: false,
                location: '',
                imageEvent: '',
                soldTickets: 0
            });
            setErrorMessage('');
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de l\'événement:', error.response?.data || error.message);
            setErrorMessage('Échec de la création de l\'événement. Veuillez vérifier les données et réessayer.');
        }
    };

    return (
        <div>
            <h1>Créer un événement</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom de l'événement :</label>
                    <input
                        type="text"
                        name="name"
                        value={eventData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Prix :</label>
                    <input
                        type="number"
                        name="price"
                        value={eventData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Heure de l'événement :</label>
                    <input
                        type="time"
                        name="eventHour"
                        value={eventData.eventHour}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Date de réservation :</label>
                    <input
                        type="date"
                        name="bookingDate"
                        value={eventData.bookingDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Date de l'événement :</label>
                    <input
                        type="date"
                        name="eventDate"
                        value={eventData.eventDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Type :</label>
                    <input
                        type="text"
                        name="type"
                        value={eventData.type}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description :</label>
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Annuler :</label>
                    <input
                        type="checkbox"
                        name="cancel"
                        checked={eventData.cancel}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Nombre de billets :</label>
                    <input
                        type="number"
                        name="nbTicket"
                        value={eventData.nbTicket}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Complet :</label>
                    <input
                        type="checkbox"
                        name="isSoldOut"
                        checked={eventData.isSoldOut}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Événement pour adultes :</label>
                    <input
                        type="checkbox"
                        name="isAdult"
                        checked={eventData.isAdult}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Invités adultes :</label>
                    <input
                        type="checkbox"
                        name="isGuestAdult"
                        checked={eventData.isGuestAdult}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Lieu :</label>
                    <input
                        type="text"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image de l'événement :</label>
                    <input
                        type="text"
                        name="imageEvent"
                        value={eventData.imageEvent}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Billets vendus :</label>
                    <input
                        type="number"
                        name="soldTickets"
                        value={eventData.soldTickets}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Créer l'événement</button>
            </form>
        </div>
    );
};

export default CreateEvent;