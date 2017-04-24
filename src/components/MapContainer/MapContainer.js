import React, { Component } from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {

    return(
      <div className="map-holder">
        <Map google={window.google}
             zoom={14}
             initialCenter={this.props.center}
             center={this.props.center}
             containerStyle={{position: 'relative', width: '500px', height: '350px', margin: '0 auto'}} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_KEY
})(MapContainer);
