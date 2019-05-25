import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 

import classes from './ObjectFull.css';

class ObjectFull extends Component {
    state = {
        loadedObject: null
    }

    componentDidMount () {
        if ( this.props.match.params.id) {
            if ( !this.state.loadedObject || (this.state.loadedObject && this.state.loadedObject.id !== this.props.id) ) {
                axios.get( 'https://sleep-go.firebaseio.com/objects/' + this.props.match.params.id + '.json/' )
                    .then( response => {
                         console.log(response);
                        this.setState( { loadedObject: response.data } );
                    } );
            }
        }
    }

    /*  deleteObjectHandler = () => {
        axios.delete('https://sleep-go.firebaseio.com/objects/' + this.props.id + '.json/' )
            .then(response => {
                console.log(response);
            });
    } */

    render () {
        let object = <p></p>;
        if ( this.props.id ) {
            object = <p style={{ textAlign: 'center' }}>Wczytywanie...</p>;
        }
        if ( this.state.loadedObject ) {
            object = (
                <div className={classes.ObjectFull}>
                    <h1>{this.state.loadedObject.name}</h1>
                    <p>{this.state.loadedObject.phone}</p>
                    <p>{ ReactHtmlParser (this.state.loadedObject.description) }</p>
                  {/*<div className={classes.Edit}>
                        <button onClick={this.deleteObjectHandler} className={classes.Delete}>Usuń</button>
            </div> */} 
                </div>

            );
        }
        return object;
    }
}

export default ObjectFull;