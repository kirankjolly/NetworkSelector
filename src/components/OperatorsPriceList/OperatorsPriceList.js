import React, { Component } from 'react';
import './OperatorsPriceList.css';
import image from '../../assets/operator-price-list.png'; 

class OperatorsPriceList extends Component {
    render() {
        return (
            <div className="price-list-container">
                <img className="price-list-image" src={image} alt="Price List"></img>
            </div>
        );
    }
}

export default OperatorsPriceList;