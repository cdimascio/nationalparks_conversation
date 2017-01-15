import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const AnimalCard = ({
  animal
}) => {
  return (
    <div>
      <div><h3>{animal.name}</h3></div>
      <div><p>{animal.description}</p></div>
      <div>
        <img className="park-image" src={animal.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

const AnimalsCard = ({
  park
  }) => {
  return (
    <Carousel>
      {park.fauna.map((f, i) => (
        <AnimalCard key={i} animal={f} />
      ))}
    </Carousel>
  );
};

export default AnimalsCard;
