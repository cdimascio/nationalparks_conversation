import {RxHttpRequest} from 'rx-http-request';

export class Weather {
  byGeo(lat,lon) {
    const uri = `https://${process.env.WEATHER_USERNAME}:${process.env.WEATHER_PASSWORD}@twcservice.mybluemix.net:443/api/weather/v1/geocode/${lat}/${lon}/observations.json`;
    return RxHttpRequest.get(uri, {
      qs: {
        units: 'e',
        language: 'en-US'
      },
      json: true
    })
    .map(r => r.body);
  }
}

export default new Weather();