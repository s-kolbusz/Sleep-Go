import React, {Component} from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import * as firebase from 'firebase';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import {Switch, Route, withRouter} from 'react-router-dom';
import Content from '../../components/Content/Content';
import fireBaseAuthConf from '../../components/Firebase/FirebaseAuthConf';
import './App.css';


firebase.initializeApp(fireBaseAuthConf);


class App extends Component {
  constructor(props){
    super(props);
    this.userPassword = React.createRef();
    this.userName = React.createRef();
  }
  state = {
    signedIn: false
  }
  componentDidMount(){
    this.onSignIn();
  }

  handleRegisterUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
      setTimeout(10000);
    })
    
  }

  onSignIn = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({signedIn: !!user}) ;
      
    });

     
  }
  onSignOut = () =>{
    let signedIn = this.state.signedIn;
    firebase.auth().signOut();
    this.setState({signedIn: !signedIn});
  }



  render() {

    return (
      <div className="App">
        <Header onSignIn={this.onSignIn} onSignOut={this.onSignOut} signedIn={this.state.signedIn}/>
        <Switch>
          <Route path="/register" render={(props) => <Register
          userName={this.userName} 
          userPassword={this.userPassword} 
          handleRegister={this.handleRegisterUser} />} />
          <Route path='/login' render={(props) => <Login 
          signedIn={this.state.signedIn}
          firebaseAuth={firebase.auth()}
          googleAuth={firebase.auth.GoogleAuthProvider.PROVIDER_ID} 
          fbAuth={firebase.auth.FacebookAuthProvider.PROVIDER_ID}
          gitHubAuth={firebase.auth.GithubAuthProvider.PROVIDER_ID}
          emailAuth={firebase.auth.EmailAuthProvider.PROVIDER_ID} />} />
          <Route path='/' exact component={Content}/>
          <Route render={() => <h1>Error 404 page not found</h1>} />
        </Switch>
        <Footer />
 
      </div>
    );
  }
}


export default App;
