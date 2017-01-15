import React from 'react';
import './ParkCard.css';

const ParkCard = ({
  park
}) => {
  return (
    <div>
      <div><h3><a href="{park.website}">{park.name}</a></h3></div>
      <div><p>{park.established.description}</p></div>
      <div>
        <img className="park-image" src={park.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

export default ParkCard;