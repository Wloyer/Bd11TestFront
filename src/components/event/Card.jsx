import React from 'react';

const Card = ({ event, onSelect }) => {
  return (
    <div
      className="max-w-sm w-64 rounded overflow-hidden shadow-lg cursor-pointer m-4 bg-white" // w-64 fixe la largeur de la carte
      onClick={() => onSelect(event)}
    >
      <div className="h-48 w-64 overflow-hidden flex items-center justify-center bg-gray-200"> {/* h-48 et w-64 fixent la taille de l'image */}
        <img className="max-h-full max-w-full object-cover" src={event.image} alt={event.name} /> {/* Assure que l'image ne dépasse pas et est centrée */}
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <div className="font-bold text-xl mb-2 text-black truncate" style={{ maxWidth: '100%' }}> {/* Utilisation de truncate pour couper le texte */}
          {event.name}
        </div>
        <p className="text-black text-base truncate" style={{ maxWidth: '100%' }}> {/* Utilisation de truncate pour couper le texte */}
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-black text-lg font-semibold truncate" style={{ maxWidth: '100%' }}> {/* Utilisation de truncate pour couper le texte */}
          {event.price} €
        </p>
      </div>
    </div>
  );
};

export default Card;
