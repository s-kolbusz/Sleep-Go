import React, {Component} from 'react';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';

import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}


export default App;
