import React, { Component } from 'react';
import './OperatorsPriceList.css';
import jsonData from '../../assets/operators.json'; 

class OperatorsPriceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operators: jsonData
        }
    }
    render() {
        return (
            <div className="price-list-container">
                <h2>Operator Costs</h2><br/>
                {
                    Object.keys(this.state.operators).map((item) => {
                        return (<div key={item}>
                            <h3>{item}:</h3><table border="1"><thead><tr><th>Number Prefix</th><th>Cost</th></tr></thead><tbody>
                                {this.state.operators[item].map((item) => {
                                    return (
                                        <tr key={item.prefix}><td>{item.prefix}</td><td>{item.cost}</td></tr>
                                    );
                                })}
                                </tbody></table><br/></div>);
                    })
                }
            </div>
        );
    }
}

export default OperatorsPriceList;