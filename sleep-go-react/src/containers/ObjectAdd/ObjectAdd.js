import React, { Component } from 'react';
import axios from 'axios';
import classes from './ObjectAdd.module.css';
import { Form, Button } from 'react-bootstrap';
//import Objects from '../Objects/Objects';
//import {Link} from 'react-router-dom';


class ObjectAdd extends Component {
    state = {
        objects: [],
        city: '',
        city_rw: '',
        cost_max: '',
        cost_min: '',
        description: '',
        id: '',
        lat: '',
        lng: '',
        name: '',
        phone: '',
        postcode: '',
        street: ''
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://sleep-go.firebaseio.com/objects.json/')
            .then(response => {
                const objects = response.data;
                console.log(objects);
                const updatedObjects = Object.keys(objects).map(key => {
                   return objects[key];
                });
                this.setState({ objects: updatedObjects });
                console.log(objects)
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
                
    }

    objectAddHandler = (e) => {
        e.preventDefault();
        const object = {
            city: this.state.city,
            city_rw: this.state.city_rw,
            cost_max: this.state.cost_max,
            cost_min: this.state.cost_min,
            description: this.state.description,
            id: this.state.objects.length,
            lat: this.state.lat,
            lng: this.state.lng,
            name: this.state.name,
            phone: this.state.phone,
            postcode: this.state.postcode,
            street: this.state.street
        };
        console.log(object);
        axios.post('https://sleep-go.firebaseio.com/objects.json', object)
            .then(response => {
                this.setState({
                    city: '',
                    city_rw: '',
                    cost_max: '',
                    cost_min: '',
                    description: '',
                    id: '',
                    lat: '',
                    lng: '',
                    name: '',
                    phone: '',
                    postcode: '',
                    street: ''
                })
                console.log(response)})
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className={classes.CenterForm}>

                <Form>
                    <h1>Formularz dodawania obiektu</h1>
                    <Form.Group controlId="setCity">
                        <Form.Label>Miejscowość - pełna nazwa</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź nazwę miejscowości" value={this.state.city} onChange={(event) => this.setState({ city: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setCityRw">
                        <Form.Label>Miejscowość - nazwa bez polskich znaków i spacji</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź nazwę miejscowości bez polskich znaków np. 'bialka-tatrzanska'" value={this.state.city_rw} onChange={(event) => this.setState({ city_rw: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setCostMax">
                        <Form.Label>Maksymalna cena za osobę</Form.Label>
                        <Form.Control type="number" placeholder="Wprowadź maksymalną cenę za osobę" value={this.state.cost_max} onChange={(event) => this.setState({ cost_max: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setCostMin">
                        <Form.Label>Minimalna cena za osobę</Form.Label>
                        <Form.Control type="number" placeholder="Wprowadź minimalną cenę za osobę" value={this.state.cost_min} onChange={(event) => this.setState({ cost_min: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setDescription">
                        <Form.Label>Opis obiektu</Form.Label>
                        <Form.Control as="textarea" row="4" placeholder="Wprowadź opis swojego obiektu, możliwe jest używanie znaczników HTML np '<h1>Mój obiekt</h1>'" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setLatitude">
                        <Form.Label>Długość geograficzna obiektu</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź długość geograficzną obiektu np. 41.4211" value={this.state.lat} onChange={(event) => this.setState({ lat: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setLongitude">
                        <Form.Label>Szerokość geograficzna obiektu</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź szerokość geograficzną obiektu np. 41.4211" value={this.state.lng} onChange={(event) => this.setState({ lng: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setName">
                        <Form.Label>Nazwa obiektu</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź nazwę obiektu" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setPhone">
                        <Form.Label>Numer telefonu</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź numer telefonu" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setPostcode">
                        <Form.Label>Kod pocztowy</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź kod pocztowy w formacie 'XX-XXX'" value={this.state.postcode} onChange={(event) => this.setState({ postcode: event.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="setStreet">
                        <Form.Label>Ulica z numerem</Form.Label>
                        <Form.Control type="text" placeholder="Wprowadź nazwę ulicy wraz z nr np. 'Kasprowicza 1'" value={this.state.street} onChange={(event) => this.setState({ street: event.target.value })} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.objectAddHandler}> Dodaj obiekt </Button>

                </Form>
            </div>
        );
    }
}

export default ObjectAdd;