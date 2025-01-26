import React from 'react';

function Card({ card, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {card.tourner ? (
        <div className="card-face">
          <img src={card.imageUrl} alt="Cardted" className="card-image" />
        </div>
      ) : (
        <div className="card-back">?</div>
      )}
    </div>
  );
}

export default Card;
