import React from 'react';
import './ParkCard.css';

export const WeatherCard = ({
  weather
}) => {
  return (
      <div>
        { weather 
          ? <div><p>It's {weather.temp} and {weather.wx_phrase}</p></div>
          : <p>I don't know</p>
        }
      </div>
  );
};

export default WeatherCard;
