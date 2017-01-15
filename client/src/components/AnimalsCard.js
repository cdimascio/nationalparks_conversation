import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const AnimalCard = ({
  animal
}) => {
  return (
    <div>
      <div>{animal.name}</div>
      <div>{animal.description}</div>
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
