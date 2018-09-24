import React, { Component } from 'react';
import logo from './telegram-logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">VoyagerGratuitement.fr</h1>
        </header>
        <Travel
          destination = "Venise"
          country = "Italie"
          photo = "https://www.marseille.aeroport.fr/var/mpaeroport/storage/images/media/images/destinations/a-photos-destinations-relift/venise/71895-1-fre-FR/venise_full_destination.jpg"
          distance = "1263 km"
        />

         <Travel
          destination = "Sensō-ji"
          country = "Tokyo"
          photo = "https://francejapon.fr/wp-content/uploads/2016/12/voyage-japon-tokyo-visiter-le-quartier-de-asakusa-senso-ji-sensoji-1.jpg"
          distance = "Environ 10 000 km"
        />         
      </div>
    );
  }
}

export default App;
