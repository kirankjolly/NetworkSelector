import React, { Component } from 'react';
import './App.css';
import OperatorsPriceList from './components/OperatorsPriceList/OperatorsPriceList';
import NetworkSelectionDialer from './components/NetworkSelectionDialer/NetworkSelectionDialer';

class App extends Component {
  render() {
    return (
      <div>
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
