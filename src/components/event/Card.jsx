import React from 'react';

const Card = ({ event, onSelect }) => {
  return (
    <div
      className="max-w-sm w-64 rounded overflow-hidden shadow-lg cursor-pointer m-4 bg-white z-9999"
      onClick={() => onSelect(event)}
    >
      <div className="h-48 w-64 overflow-hidden flex items-center justify-center bg-gray-200"> 
        <img className="max-h-full max-w-full object-cover" src={event.image} alt={event.name} /> 
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <div className="font-bold text-xl mb-2 text-black truncate" style={{ maxWidth: '100%' }}> 
          {event.name}
        </div>
        <p className="text-black text-base truncate" style={{ maxWidth: '100%' }}> 
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-black text-lg font-semibold truncate" style={{ maxWidth: '100%' }}> 
          {event.price} €
        </p>
      </div>
    </div>
  );
};

export default Card;
