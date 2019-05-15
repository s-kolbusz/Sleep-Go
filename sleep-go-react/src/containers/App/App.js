import React, {Component} from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';
import fire from '../../components/Firebase/FirebaseAuthConf';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import {Switch, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user:{}
  //   }
  // }

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

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
 
      </div>
    );
  }
}


export default App;
