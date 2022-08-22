import React from 'react';
import './Card.css';
import clearskyd from '../images/clearsky01d.jpg';
import clearskyn from '../images/clearsky01n.jpg';
import fewcloudsd from '../images/fewclouds02d.jpg';
import fewcloudsn from '../images/fewclouds02n.jpg';
import scatteredcloudsd from '../images/scatteredclouds03d.jpg';
import scatteredcloudsn from '../images/scatteredclouds03n.jpg';
import brokencloudsd from '../images/brokenclouds04d.jpg';
import brokencloudsn from '../images/brokenclouds04n.jpg';
import showerraind from '../images/showerain09d.jpg';
import showerrainn from '../images/showerain09n.jpg';
import raind from '../images/rain10d.jpg';
import rainn from '../images/rain10n.jpg';
import thunderstormd from '../images/thunderstorm11d.jpg';
import thunderstormn from '../images/thunderstorm11n.jpg';
import snowd from '../images/snow13d.jpg';
import snown from '../images/snow13n.jpg';
import mistd from '../images/mist50d.jpg';
import mistn from '../images/mist50n.jpg';


export default function Card ({min, max, name, img, onClose, id}) {

  let background = '';
  let color = 'black';
  
    switch (img) {
      case '01d':
        background = clearskyd
        break;
      case '01n':
        background = clearskyn
        color = 'white'
        break;
      case '02d':
        background = fewcloudsd
        break;
      case '02n':
        background = fewcloudsn
        color = 'white'
        break;
      case '03d':
        background = scatteredcloudsd
        break;
      case '03n':
        background = scatteredcloudsn
        color = 'white'
        break;
      case '04d':
        background = brokencloudsd
        break;
      case '04n':
        background = brokencloudsn
        color = 'white'
        break;
      case '09d':
        background = showerraind
        break;
      case '09n':
        background = showerrainn
        color = 'white'
        break;
      case '10d':
        background = raind
        break;
      case '10n':
        background = rainn
        color = 'white'
        break;
      case '11d':
        background = thunderstormd
        break;
      case '11n':
        background = thunderstormn
        color = 'white'
        break;
      case '13d':
        background = snowd
        break;
      case '13n':
        background = snown
        color = 'white'
        break;
      case '50d':
        background = mistd
        break;
      case '50n':
        background = mistn
        color = 'white'
        break;      
      default:
        break;
    }
  
    return (
      <div className="card" style={{'background-image': `url(${background})`, 'color': color}}>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="cl-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min/10}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max/10}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
