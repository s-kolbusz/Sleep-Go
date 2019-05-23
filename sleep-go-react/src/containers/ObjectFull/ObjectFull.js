import React, { Component } from 'react';
import axios from 'axios';

import classes from './ObjectFull.css';

class ObjectFull extends Component {
    state = {
        loadedObject: null
    }

    componentDidMount () {
        if ( this.props.match.params.id) {
            if ( !this.state.loadedObject || (this.state.loadedObject && this.state.loadedObject.id !== this.props.id) ) {
                axios.get( 'https://sleep-go.firebaseio.com/objects.json/' + this.props.match.params.id )
                    .then( response => {
                         console.log(response);
                        this.setState( { loadedObject: response.data } );
                    } );
            }
        }
    }

    deleteObjectHandler = () => {
        axios.delete('https://sleep-go.firebaseio.com/objects.json/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let object = <p style={{ textAlign: 'center' }}>Wybierz obiekt</p>;
        if ( this.props.id ) {
            object = <p style={{ textAlign: 'center' }}>Wczytywanie</p>;
        }
        if ( this.state.loadedObject ) {
            object = (
                <div className={classes.ObjectFull}>
                    <h1>{this.state.loadedObject.title}</h1>
                    <p>{this.state.loadedObject.body}</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deleteObjectHandler} className={classes.Delete}>Usuń</button>
                    </div>
                </div>

            );
        }
        return object;
    }
}

export default ObjectFull;