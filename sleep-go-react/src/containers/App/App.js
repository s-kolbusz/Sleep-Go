import React, {Component} from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import * as firebase from 'firebase';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import {Switch, Route} from 'react-router-dom';
import Content from '../../components/Content/Content';
import fireBaseAuthConf from '../../components/Firebase/FirebaseAuthConf';
import './App.css';


firebase.initializeApp(fireBaseAuthConf);
class App extends Component {
  state = {
    signedIn: false
  }

  handleSignIn = () =>{
    let signedIn = this.state.signedIn;
    this.setState({signedIn: !signedIn});
  }

  render() {

    return (
      <div className="App">
        <Header onClick={this.handleSignIn} signedIn={this.state.signedIn}/>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path='/login' render={(props) => <Login 
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
