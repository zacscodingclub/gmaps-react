import React, { Component } from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return(
      <Map google={window.google}
           zoom={14} />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_KEY
})(MapContainer)
