import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import { PlaceInfoWindow } from './PlaceInfoWindow';

import './Map.module.css';

export class PlaceMarker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTooltip: false
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const {showTooltip} = this.state
    const {lat, lng, name, price, id} = this.props

    return(
      <Marker
        markerWithLabel={window.MarkerWithLabel}
        onClick={this.clickTooltip.bind(this)}
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        opacity={1}
        labelClass='map-price-container'
        labelContent={`<div class="map-price-marker"><span>$${price}</span></div>`}
        key={`marker${id}`}>
        {showTooltip && (
          <PlaceInfoWindow key={`info${id}`}
                           id={id}
                           name={name}
                           price={price}
                           closeWindow={this.closeWindow.bind(this)}/>
        )}
      </Marker>
    );
  }
}

export default PlaceMarker;