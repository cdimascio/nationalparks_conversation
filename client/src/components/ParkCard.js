import React from 'react';
import './ParkCard.css';

const ParkCard = ({
  park
}) => {
  return (
    <div>
      <div>{park.name}</div>
      <div>{park.website}</div>
      <div>
        <img className="park-image" src={park.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

export default ParkCard;