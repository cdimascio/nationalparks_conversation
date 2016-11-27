import React, { Component } from 'react';
import './ParkCard.css';

export default class ParkCard extends Component {
  render() {
    const park = this.props.park;
    return (
      <div>
        <div>{park.name}</div>
        <div>{park.website}</div>
        <div>
          <img className="park-image" src={park.images[0]} role="presentation"/>
        </div>
      </div>
    )
  }
}