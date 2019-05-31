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
          props.twitterAuth
        ],
        callbacks:{
            signInSuccessWithAuthResult: () => false
        }
    }
    return (
    //creating a div, that is a container for another container(react.fragment), we render the form and the styled firebaseUI if we are not signed in otherwise we show a confirmation message, that you are already signed in, Form and all subitems belong to react package react-bootstrap
    <div className={classes.Login} >
        {props.signedIn ? "Zostałeś pomyślnie zalogowany" :
        <React.Fragment>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    {/* we pass here handlers from App.js file, we do this via props of this component */}
                    <Form.Control type="email" placeholder="Enter email" value={props.userName} onChange={props.onChangeMail}/>
                    <Form.Text className="text-muted">
                    Nigdy nie udostępnimy Twojego hasła na zewnątrz
                    {props.error ? "wrong mail or password" : null }
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={props.userPassword} onChange={props.onChangePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.onSignInWithEmailAndPassword}>
                    Zatwierdź
                </Button>
            </Form>
            {/* we are passing here firebaseUI configuration and firebase.auth() function that is needed for proper StylledFireBaseAuth initialization */}
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={props.firebaseAuth} /> 
        </React.Fragment>
        }
    </div>
    );
};
export default login;