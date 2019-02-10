import React, { Component } from 'react';
import './App.css';
import OperatorsPriceList from './components/OperatorsPriceList/OperatorsPriceList';
import NetworkSelectionDialer from './components/NetworkSelectionDialer/NetworkSelectionDialer';
import HomeLogo from './assets/home-logo.png'; 
class App extends Component {
  render() {
    return (
      <div>
        <div className="logo-container">
          <img className="logo-image" src={HomeLogo} alt="Network Selector"></img>
        </div>
        <div className="equel-component">
          <OperatorsPriceList />
        </div>
        <div className="equel-component">
          <NetworkSelectionDialer />
        </div>
      </div>
    );
  }
}

export default App;
