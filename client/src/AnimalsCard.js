import React, { Component } from 'react';
import './ParkCard.css';

export default class AnimalsCard extends Component {
  render() {
    const park = this.props.park;
    return (
      <div>
        {park.fauna.map((f,i) => (
          <div key={i}>
            <div>{f.name}</div>
            <div>{f.description}</div>
            <div>
            <img className="park-image" src={f.images[0]} role="presentation"/>
            </div>
          </div>)
        )}
      </div>
    )
  }
}