import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from 'react-router-dom';
import { Button} from 'react-bootstrap';

import classes from './ObjectFull.css';

// Container necessary to showing full object view
class ObjectFull extends Component {
    state = {
        loadedObject: null
    }

    static contextTypes = {
        router: () => true, 
    }

    // Using HOC to check if objects is selected
    // If true axios client getting appropriate object from database
    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedObject || (this.state.loadedObject && this.state.loadedObject.id !== this.props.id)) {
                axios.get('https://sleep-go.firebaseio.com/objects/' + this.props.match.params.id + '.json/')
                    .then(response => {
                        console.log(response);
                        this.setState({ loadedObject: response.data });
                    });
            }
        }
    }

    render() {
        // Conditional showing full object view if there is object in state
        // Using ReactHtmlParser to transform html markup from description
        let object = <p></p>;
        if (this.props.id) {
            object = <p style={{ textAlign: 'center' }}>Wczytywanie...</p>;
        }
        if (this.state.loadedObject) {
            object = (
                <div className={classes.ObjectFull}>
                    <h1>{this.state.loadedObject.name}</h1>
                    <p>{this.state.loadedObject.phone}</p>
                    <p>{ReactHtmlParser(this.state.loadedObject.description)}</p>
                    <Button onClick={this.props.history.goBack} size="lg" style={{margin: '20px'}}>Powrót</Button>

                </div>

            );
        }
        return object;
    }
}

export default withRouter(ObjectFull);