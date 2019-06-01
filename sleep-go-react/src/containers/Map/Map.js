import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import { PlaceMarker } from './PlaceMaker';
import axios from 'axios';

import './Map.module.css';

const ShowMap = withScriptjs(withGoogleMap((props) => (

    <GoogleMap
      ref={props.onMapMounted}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      {props.places.map(place => (
          <PlaceMarker key={`place${place.id}`}
                       id={place.id}
                       lat={place.lat}
                       lng={place.lng}
                       name={place.name}
                       price={place.price} />
        ))
      }
    </GoogleMap>
  )));

class Map extends Component {

    constructor(props) {
        super(props)

        this.xMapBounds = { min: null, max: null }
        this.yMapBounds = { min: null, max: null }

        this.mapFullyLoaded = false
        this.zoom = 14

        this.state = {
            places: [],
            lat: 49.2989900,
            lng: 19.9488500
        };
    }

    handleMapMounted(map) {
        this.map = map
    }

    setMapCenterPoint() {
        this.setState({
            lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng()
        })
    }

    componentDidMount() {
        this.setState({ places: [] })
        let newState = [];

        axios.get('https://sleep-go.firebaseio.com/objects.json/')
        .then(response => {
            const objects = Object.entries(response.data);

            objects.map( o => {
                newState.push({
                    id: o[0],
                    name: o[1].name,
                    price: o[1].cost_min,
                    lat: o[1].lat,
                    lng: o[1].lng
                });
            });
            this.setState({ places: newState })
        });
        
    }


    render() {
       const {lat, lng, places} = this.state

        return (
            <div style={{width: `100%`, height: `600px`}}>
                <ShowMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiNujxjqIv0XRsAKuLqySLTDaxBQxnxVU&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    onMapMounted={this.handleMapMounted.bind(this)}
                    center={{
                    lat: lat,
                    lng: lng
                    }}
                    places={places}
                    zoom={this.zoom}
                    containerElement={
                    <div style={{ height: `100%` }} />
                    }
                    mapElement={
                    <div style={{ height: `100%` }} />
                    }
                    />
            </div>
        );
    }


}

export default Map;