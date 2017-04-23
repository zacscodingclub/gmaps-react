import React, { Component } from 'react';
// import Search from '../Search/Search';
import MapContainer from '../MapContainer/MapContainer';
// import CurrentLocation from '../CurrentLocation/CurrentLocation';
// import LocationList from '../LocationList/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Google Maps Locations</h2>
        </div>
        <MapContainer />
      </div>
    );
  }
}


export default App;
