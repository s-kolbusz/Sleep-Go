import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import classes from './Register.module.css';
import firebase from '../Firebase/FirebaseAuthConf';


class Register extends Component{
    constructor(props){
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

  // componentDidMount(){
  //   this.authListener();
  // }

  // authListener(){
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if(user){
  //       this.setState({user});
  //       // localStorage.setItem('user',user.uid);
  //     }else{
  //       this.setState({user: null});
  //       // localStorage.removeItem('user');
  //     }
  //   })
  // }

    handleCreateUser = () =>{
        const email = this.email.current.value;
        const password = this.password.current.value;
        console.log(this.email);
        console.log(this.password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // ...
        });
        alert(email, password);
      }
    

    render(){
        
        return(
                <React.Fragment>
                    <div className={classes.Register}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" _ref={this.email}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" _ref={this.password} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleCreateUser}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    
                </React.Fragment>
            );
        }
};
export default Register;