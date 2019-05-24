import React, {Component} from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import * as firebase from 'firebase';
import 'firebase/auth'
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import {Switch, Route} from 'react-router-dom';
import Content from '../../components/Content/Content';
import fireBaseAuthConf from '../../components/Firebase/FirebaseAuthConf';
import './App.css';


firebase.initializeApp(fireBaseAuthConf);


class App extends Component {
  state = {
    error: false,
    signedIn: false,
    name: '',
    password: ''
  }
  componentDidMount(){
    this.autListener();
  }

  onChangeMail = event => {
    this.setState({name: event.target.value});
  }

  onChangePassword = event => {
    this.setState({password: event.target.value});
  }

  onRegisterUser = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.name, this.state.password)
    .then(this.setState({name: '', password: ''}))
    .catch(error => {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    })

  }

  autListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({signedIn: !!user});
    });
  }

  onSignInWithEmailAndPassword = (e) =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.name, this.state.password)
    .then(this.setState({name: '', password: ''}))
    .catch(error => {

      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      this.setState({error: true})
      // ...
    })
    
  }

  onSignOut = () =>{
    let signedIn = this.state.signedIn;
    firebase.auth().signOut();
    this.setState({signedIn: !signedIn});
  }

  wrongEmailAndPassword = () =>{
    return(
    <p style={{color: 'red'}}>Wrong email or password</p>
    )
  }

  render() {

    return (
      <div className="App">
        <Header onSignIn={this.onSignIn} onSignOut={this.onSignOut} signedIn={this.state.signedIn}/>
        <Switch>
          <Route path="/register" render={(props) => <Register
          onChangeMail={this.onChangeMail}
          onChangePassword={this.onChangePassword}
          userName={this.state.name} 
          userPassword={this.state.password} 
          handleRegister={this.onRegisterUser} />} />

          <Route path='/login' render={(props) => <Login
          wrongEmailAndPassword={this.wrongEmailAndPassword}
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
          twitterAuth={firebase.auth.TwitterAuthProvider.PROVIDER_ID} />} />

          <Route path='/' exact component={Content}/>
          <Route render={() => <h1>Error 404 page not found</h1>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
