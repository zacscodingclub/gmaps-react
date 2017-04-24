import React, { Component } from 'react';
import Search from '../Search/Search';
import MapContainer from '../MapContainer/MapContainer';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import LocationList from '../LocationList/LocationList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let allFavorites = [];

    if(localStorage.favorites) {
      allFavorites = JSON.parse(localStorage.favorites);
    }

    this.state = {
      favorites: allFavorites,
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    }

    this.searchForAddress = this.searchForAddress.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.isAddressInFavorites = this.isAddressInFavorites.bind(this);
  }

  toggleFavorite(address) {
    if(this.isAddressInFavorites(address)) {
      this.removeFromFavorites(address);
    }
    else {
      this.addToFavorites(address);
    }
  }

  addToFavorites(address) {
    let allFavorites = this.state.favorites;

    allFavorites.push({
      address: address,
      timestamp: Date.now()
    });

    this.setState({
      favorites: allFavorites
    });

    localStorage.favorites = JSON.stringify(allFavorites);
  }

  removeFromFavorites(address) {
    debugger;
  }

  isAddressInFavorites(address) {
    const allFavorites = this.state.favorites;

    allFavorites.forEach(favorite => {
      if(favorite.address === address) {
        return true;
      }
    })

    return false;
  }

  searchForAddress(address) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GMAPS_KEY}`

    fetch(url).then(data => {
      return data.json();
    }).then(response => {
      const result = response.results[0];

      this.setState({
        currentAddress: result.formatted_address,
        mapCoordinates: result.geometry.location
      });
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Your Google Maps Locations</h2>
        <Search onSearch={this.searchForAddress} />
        <MapContainer center={this.state.mapCoordinates} />
        <CurrentLocation address={this.state.currentAddress}
                         favorite={this.isAddressInFavorites(this.state.currentAddress)}
                         onFavoriteToggle={this.toggleFavorite} />

        <LocationList locations={this.state.favorites}
                      activeLocationAddress={this.state.currentAddress}
                      onClick={this.searchForAddress} />
      </div>
    );
  }
}

export default App;
