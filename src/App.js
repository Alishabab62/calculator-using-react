import React, { Component } from "react";
import Td from "./Components/Td";
import Textarea from "./Components/Textarea";
import "../src/App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      current: "",
      previous: "",
      total: 0,
      symbol: "",
    };
  }
  handleInput = (text) => {
    const tempInput = this.state.input + text;
    this.setState({
      input: tempInput,
    });
    let regex = /[0-9]/;
    if (!regex.test(text)) {
      let total;
      switch (text) {
        case "AC":
          this.setState({
            input: "",
            previous: "",
          });
          break;

        case "+":
          this.setState({
            symbol: text,
            previous: this.state.input,
            input: "",
          });
          break;

        case "-":
          this.setState({
            symbol: text,
            previous: this.state.input,
            input: "",
          });
          break;

        case "X":
          this.setState({
            symbol: text,
            previous: this.state.input,
            input: "",
          });
          break;

        case "/":
          this.setState({
            symbol: text,
            previous: this.state.input,
            input: "",
          });
          break;

        case "%":
          this.setState({
            symbol: text,
            previous: this.state.input,
            input: "",
          });
          break;

        case ".":
          break;

        case "=":
          switch (this.state.symbol) {
            case "+":
              total =
                parseInt(this.state.previous) + parseInt(this.state.input);
              break;
            case "-":
              total =
                parseInt(this.state.previous) - parseInt(this.state.input);
              break;
            case "X":
              total =
                parseInt(this.state.previous) * parseInt(this.state.input);
              break;
            case "/":
              total =
                parseInt(this.state.previous) / parseInt(this.state.input);
              break;
            case "%":
              total =
                (parseInt(this.state.previous) % parseInt(this.state.input)) *
                100;
              break;
            default:
              break;
          }

          this.setState({
            input: total,
            previous: "",
            symbol: "",
          });
          break;

        default:
          break;
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator-container">
        <Textarea className="previous" input={this.state.previous} /> 
        <Textarea input={this.state.input} />
        <table className="table">
          <tbody>
            <tr>
              <Td output={"AC"} colSpan={2} fun={this.handleInput} />
              <Td output={"%"} fun={this.handleInput} />
              <Td output={"/"} fun={this.handleInput} />
            </tr>
            <tr>
              <Td output={7} fun={this.handleInput} />
              <Td output={8} fun={this.handleInput} />
              <Td output={9} fun={this.handleInput} />
              <Td output={"X"} fun={this.handleInput} />
            </tr>
            <tr>
              <Td output={4} fun={this.handleInput} />
              <Td output={5} fun={this.handleInput} />
              <Td output={6} fun={this.handleInput} />
              <Td output={"-"} fun={this.handleInput} />
            </tr>
            <tr>
              <Td output={1} fun={this.handleInput} />
              <Td output={2} fun={this.handleInput} />
              <Td output={3} fun={this.handleInput} />
              <Td output={"+"} fun={this.handleInput} />
            </tr>
            <tr>
              <Td output={0} colSpan={2} fun={this.handleInput} />
              <Td output={"."} fun={this.handleInput} />
              <Td output={"="} fun={this.handleInput} />
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}
