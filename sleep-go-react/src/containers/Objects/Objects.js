import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Objectt from '../../components/Object/Object';
import classes from './Objects.module.css';

class Objects extends Component {

    state = {
        objects: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://sleep-go.firebaseio.com/objects.json/')
            .then(response => {
                const objects = response.data;
                let objs = null;
                console.log(typeof objects);
                const updatedObjects = Object.keys(objects).map(key => {
                   return objects[key];
                });
                this.setState({ objects: updatedObjects });
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    objectSelectedHandler = (id) => {
        this.setState({ selectedObjectId: id });
    }

    render() {
        let objects = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            objects = this.state.objects.map(object => {
                return (
                    <Link to={'/objects/' + object.id} key={object.id}>
                        <Objectt
                            name={object.name}
                            city={object.city}
                            phone={object.phone}
                            description={object.description}
                            match={this.props.match}
                            clicked={() => this.objectSelectedHandler(object.id)} />
                    </Link>);
            });
        }

        return (
            <section className={classes.Objects}>
                {objects}
            </section>
        );
    }
}

export default Objects;