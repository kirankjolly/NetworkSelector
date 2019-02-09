import React, { Component } from 'react';
import './NetworkSelectionDialer.css';
import jsonData from '../../assets/operators.json'; 

class NetworkSelectionDialer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      cheapestNetwork: "No Operators Found",
      cost:""
    };
  }
    
  /**
   * @description Button press event for dialer buttons.
   * @param value Value of respective buttons.
   *
   * @author Kiran K J
   */  
  onButtonPress(value) {
    const re = /^[0-9\b]+$/;
    if (value === "+" && this.state.mobileNumber === "") {
      this.setState({ mobileNumber: "+" });
    } else if (value === "del" && this.state.mobileNumber !== "") {
      this.setState(
        { mobileNumber: this.state.mobileNumber.slice(0, -1) },
        () => {
          this.findCheapestOperator(jsonData, this.state.mobileNumber);
        }
      );
    } else if (re.test(value) && this.state.mobileNumber.length > 0) {
      this.setState({ mobileNumber: this.state.mobileNumber + value }, () => {
        this.findCheapestOperator(jsonData, this.state.mobileNumber);
      });
    }
  }
  
  /**
   * @description Sort prefix array in reverse(descending) order. (eg. 46,456,455,3456).
   * @param arr Array to be sort.
   *
   * @author Kiran K J
   */
  sortReverseByPrefix(arr) {
    arr.sort(function(a, b) {
      return a.prefix > b.prefix ? -1 : a.prefix < b.prefix ? 1 : 0;
    });
  }
  
  /**
   * @description Find cost from a longest matching number.
   * @param arr Array from where the cost to be found.
   * @param number Mobile number input.
   * @return Array element containing a longest matching number.
   *
   * @author Kiran K J
   */
  findCostForNumber(arr, number) {
    return arr.find(x => number.startsWith(x.prefix));
  }
  
  /**
   * @description Sort array by cost.
   * @param arr Array to be sort.
   *
   * @author Kiran K J
   */
  sortByCost(arr) {
    arr.sort(function(a, b) {
      return a.cost < b.cost ? -1 : a.cost > b.cost ? 1 : 0;
    });
  }
    
  /**
   * @description Find the cheapest operator by matching the longest prefix with the mobile number from the operator list.
   * @param operators Operator details array.
   * @param number Phone number enterd.
   *
   * @author Kiran K J
   */
  findCheapestOperator(operators, number) {
    let numberClean = ("" + number).replace(/\D/g, "");
    let result = [];
    for (var operator in operators) {
      this.sortReverseByPrefix(operators[operator]);
      let match = this.findCostForNumber(operators[operator], numberClean);
      if (match) {
        result.push({ operator, number, ...match });
      }
    }
    this.sortByCost(result);
    this.setState({
      cheapestNetwork:
        !result || result[0] === undefined
          ? "No Operators Found"
                : result[0].operator,
        cost:!result || result[0] === undefined
        ? ""
              : '$' + result[0].cost,
    });
  }

  render() {
    return (
      <div className="nw-selection-container">
        <div className="button-container">
          <div className="wrap0">
            Cheapest Operator : {this.state.cheapestNetwork}<br/>
            Cost : {this.state.cost}
          </div>
          <div className="wrap1">
            <input
              readOnly={true}
              type="text"
              defaultValue={this.state.mobileNumber}
            />
          </div>
          <div className="wrap2 ">
            <section>
              <input
                className="active"
                type="button"
                value="1"
                onClick={this.onButtonPress.bind(this, "1")}
              />
              <input
                className="active"
                type="button"
                value="2"
                onClick={this.onButtonPress.bind(this, "2")}
              />
              <input
                className="active"
                type="button"
                value="3"
                onClick={this.onButtonPress.bind(this, "3")}
              />
              <br />
              <input
                className="active"
                type="button"
                value="4"
                onClick={this.onButtonPress.bind(this, "4")}
              />
              <input
                className="active"
                type="button"
                value="5"
                onClick={this.onButtonPress.bind(this, "5")}
              />
              <input
                className="active"
                type="button"
                value="6"
                onClick={this.onButtonPress.bind(this, "6")}
              />
              <br />
              <input
                className="active"
                type="button"
                value="7"
                onClick={this.onButtonPress.bind(this, "7")}
              />
              <input
                className="active"
                type="button"
                value="8"
                onClick={this.onButtonPress.bind(this, "8")}
              />
              <input
                className="active"
                type="button"
                value="9"
                onClick={this.onButtonPress.bind(this, "9")}
              />
              <br />
              <input
                className="active"
                type="button"
                value="+"
                onClick={this.onButtonPress.bind(this, "+")}
              />
              <input
                className="active"
                type="button"
                value="0"
                onClick={this.onButtonPress.bind(this, "0")}
              />
              <input
                className="active"
                type="button"
                value="&#8656;"
                onClick={this.onButtonPress.bind(this, "del")}
              />
              <br />
            </section>
            <div className="bottom-note-container">
              * Note : Enter a '+' followed by phone number to find the cheapest
              operator.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NetworkSelectionDialer;