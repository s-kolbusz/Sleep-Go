import React, { Component } from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import * as firebase from 'firebase';
import 'firebase/auth'
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import Objects from '../../containers/Objects/Objects';
import { Switch, Route } from 'react-router-dom';
import Content from '../../components/Content/Content';
import fireBaseAuthConf from '../../components/Firebase/FirebaseAuthConf';
import './App.css';
import ObjectFull from '../../containers/ObjectFull/ObjectFull';
import ObjectAdd from '../ObjectAdd/ObjectAdd';



firebase.initializeApp(fireBaseAuthConf);


class App extends Component {
  state = {
    error: false,
    signedIn: false,
    name: '',
    password: '',
    registerName: '',
    registerPassword: ''
  }
  // we are checking the state of firebase user evertime we render an element on page
  componentDidMount() {
    this.autListener();
  }

  // handlers that are used for register forms
  onChangeRegisterMail = event => {
    this.setState({ registerName: event.target.value });
  }

  onChangeRegisterPassword = event => {
    this.setState({ registerPassword: event.target.value });
  }
  // handlers that are used for login via form
  onChangeMail = event => {
    this.setState({ name: event.target.value });
  }

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  //handler that is used when we click signing up a new user to our firebase database, we use preventDefault for stopping the page from reloading and cancelling the request do firebase
  onRegisterUser = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.registerName, this.state.registerPassword)
      .then(this.setState({ registerName: '', registerPassword: '' }))
      .catch(error => {
        if (error.code === 'auth/weak-password') {
          alert('Hasło jest zbyt słabe');
        } else {
          alert(error.message);
        }
      })

  }
  // listens to current user state in firebase(sign in or sign out) and changes the signedIn property in our react state
  autListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ signedIn: !!user });
    });
  }
  //handler that is used when we click signing in, we use preventDefault for stopping the page from reloading and cancelling the request do firebase
  onSignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.name, this.state.password)
      .then(this.setState({ name: '', password: '' }))
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          alert('Złe hasło');
        } else {
          alert(error.message);
        }
      }
      )
  }
  //sign out handler
  onSignOut = () => {
    let signedIn = this.state.signedIn;
    firebase.auth().signOut();
    this.setState({ signedIn: !signedIn });
  }

  render() {

    return (
      <div className="App">
        <Header onSignIn={this.onSignIn} onSignOut={this.onSignOut} signedIn={this.state.signedIn} />
        <Switch>

          {/*Routing to objects component, first one to specific object,
          second to full list of objects*/}
          <Route path="/objects/:id" exact component={ObjectFull} />
          <Route path="/objects" render={(props) => <Objects
          />} />

          {/*Routing to adding object form*/}
          <Route path="/add" render={(props) => <ObjectAdd
          />} />


          <Route path="/register" render={(props) => <Register
            onChangeMail={this.onChangeRegisterMail}
            onChangePassword={this.onChangeRegisterPassword}
            userName={this.state.registerName}
            userPassword={this.state.registerPassword}
            handleRegister={this.onRegisterUser} />} />

          <Route path='/login' render={(props) => (
            <Login
              onSignInWithEmailAndPassword={this.onSignInWithEmailAndPassword}
              onChangeMail={this.onChangeMail}
              onChangePassword={this.onChangePassword}
              userName={this.state.name}
              userPassword={this.state.password}
              signedIn={this.state.signedIn}
              firebaseAuth={firebase.auth()}
              googleAuth={firebase.auth.GoogleAuthProvider.PROVIDER_ID}
              fbAuth={firebase.auth.FacebookAuthProvider.PROVIDER_ID}
              gitHubAuth={firebase.auth.GithubAuthProvider.PROVIDER_ID}
              emailAuth={firebase.auth.EmailAuthProvider.PROVIDER_ID}
          twitterAuth={firebase.auth.TwitterAuthProvider.PROVIDER_ID} />)} />

          <Route path='/' exact render={(props) => <Content signedIn={this.state.signedIn} />} />
          <Route render={() => <h1>Błąd 404 nie znaleziony strony</h1>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
