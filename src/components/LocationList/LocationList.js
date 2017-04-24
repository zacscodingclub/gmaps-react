import React, { Component } from 'react';
import LocationItem from '../LocationItem/LocationItem';

class LocationList extends Component {
  render() {
    const self = this;

    const allLocations = this.props.locations.map(l => {
      let active = self.props.activeLocationAddress === l.address;

      return <LocationItem address={l.address}
                           timestamp={l.timestamp}
                           active={active}
                           onClick={self.props.onClick} />
    });

    if(!allLocations.length) {
      return null;
    }

    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        {allLocations}
      </div>
    )
  }
}

export default LocationList;
