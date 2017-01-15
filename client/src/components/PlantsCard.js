import React from 'react';
import './ParkCard.css';
import Carousel from './Carousel';

export const PlantCard = ({
  plant
}) => {
  return (
    <div>
      <div><h3>{plant.name}</h3></div>
      <div><p>{plant.description}</p></div>
      <div>
        <img className="park-image" src={plant.images[0]} role="presentation"/>
      </div>
    </div>
  );
};

const PlantsCard = ({
  park
  }) => {
  return (
    <Carousel>
      {park.flora.map((f, i) => (
        <PlantCard key={i} plant={f} />
      ))}
    </Carousel>
  );
};

export default PlantsCard;
