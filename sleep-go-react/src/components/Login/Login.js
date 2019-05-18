import React from 'react';
import {Form, Button} from 'react-bootstrap';
import classes from './Login.module.css';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const login = (props) => {
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          props.googleAuth,
          props.fbAuth,
          props.gitHubAuth,
          props.emailAuth,
        ],
        callbacks:{
            signInSuccess: () => false
        }
    }
    return (
    
    <div className={classes.Login} >
        {props.signedIn ? "you are signed in" :
        <React.Fragment>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={props.firebaseAuth} /> 
        </React.Fragment>
        }
    </div>
    );
};
export default login;