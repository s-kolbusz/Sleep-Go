import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Objectt from '../../components/Object/Object';
import classes from './Objects.module.css';

class Objects extends Component {

    state = {
        objects: []
    }

    // Using HOC to call axios client
    // Using axios client to download current objects data
    componentDidMount() {
        axios.get('https://sleep-go.firebaseio.com/objects.json/')
            .then(response => {
                const objects = Object.entries(response.data);
                /* const updatedObjects = Object.keys(objects).map(key => {
                     return objects[key];
                 });*/
                this.setState({ objects: objects });
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }


    // Using downloaded state of objects,
    // Using map to get every element of objects
    // Assigning props from objects data to single object
    render() {
        let objects = <p style={{ textAlign: 'center' }}>Coś poszło nie tak!</p>;
        if (!this.state.error) {
            objects = this.state.objects.map(object => {
                return (
                    <Link to={'/objects/' + object[0]} key={object[0]}>
                        <Objectt
                            name={object[1].name}
                            city={object[1].city}
                            phone={object[1].phone}
                            description={object[1].description}
                            match={this.props.match} />
                    </Link>);
            });
        }


        // Displaying all objects from database using above variable objects
        return (
            <section className={classes.Objects}>
                {objects}
            </section>
        );
    }
}

export default Objects;