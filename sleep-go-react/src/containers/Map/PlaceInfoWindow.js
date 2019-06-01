import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';
import { Link } from 'react-router-dom';

import './Map.module.css';

export class PlaceInfoWindow extends Component {
  render() {
    const {name, price, id} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
            <Link to={'/objects/' + id} key={id}>
              <div>
                <h2>{name}</h2>
                <span>Cena od: {price} zł</span>
              </div>
            </Link>
      </InfoWindow>
    );
  }
}

export default PlaceInfoWindow;