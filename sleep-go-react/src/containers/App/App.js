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
  componentDidMount() {
    this.autListener();
  }

  onChangeRegisterMail = event => {
    this.setState({ registerName: event.target.value });
  }

  onChangeRegisterPassword = event => {
    this.setState({ registerPassword: event.target.value });
  }

  onChangeMail = event => {
    this.setState({ name: event.target.value });
  }

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  }

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

  autListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ signedIn: !!user });
    });
  }

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

  onClickAfterSelect = (e) => {
    e.preventDefault();
  }

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
          <Route path="/objects/:id" exact component={ObjectFull} />
          <Route path="/objects" render={(props) => <Objects
          />} />

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
