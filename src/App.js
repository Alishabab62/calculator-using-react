import React, { Component } from "react";
import Td from "./Components/Td";
import Textarea from "./Components/Textarea";
import '../src/App.css'
export default class App extends Component {
  constructor(){
    super();
    this.state ={
      input: 0,
      current:0,
      previous:0,
      total:0
    }
  }
  handleInput = (e) =>{
    const tempInput = this.state.input + e.target.innerText;
    this.setState({
      input:tempInput,
    })
    const buttonClicked = e.target.innerText;
    switch (buttonClicked){
      case 'AC':
      this.setState({
        input:"0",
        previous:0,
      });
      break;
      case '+':
        this.setState({
          previous:parseInt(this.state.input),
          input:"0"
        }) 
        break;
      case '=':
        const temp = parseInt(this.state.input)
       const total = this.state.previous + temp;
        this.setState({
          input:total,
          previous:"0"
        });
        break;
      default:
    }
  }
  handleButton = (e) =>{
    
  }
  render() {
    return (
      <div className="App">
        <table>
          <tr rowspan = "2">
            <Td output={<Textarea input={this.state.previous} />} colSpan={4} />
          </tr>
          <tr>
            <Td output={<Textarea input={this.state.input} />} colSpan={4} />
          </tr>
          <tr>
            <Td output={"AC"} colSpan={2} fun = {this.handleInput} />
            <Td output={"%"}  fun = {this.handleInput}  />
            <Td output={"/"}  fun = {this.handleInput}  />
          </tr>
          <tr>
            <Td output={7}  fun = {this.handleInput}  />
            <Td output={8}  fun = {this.handleInput}  />
            <Td output={9}  fun = {this.handleInput}  />
            <Td output={"X"}  fun = {this.handleInput}  />
          </tr>
          <tr>
            <Td output={4}  fun = {this.handleInput}  />
            <Td output={5}  fun = {this.handleInput}  />
            <Td output={6}  fun = {this.handleInput}   />
            <Td output={"-"}  fun = {this.handleInput}  />
          </tr>
          <tr>
            <Td output={1}  fun = {this.handleInput}  />
            <Td output={2}  fun = {this.handleInput}  />
            <Td output={3}  fun = {this.handleInput}  />
            <Td output={"+"}  fun = {this.handleInput}  />
          </tr>
          <tr>
            <Td output={0} colSpan={2}  fun = {this.handleInput}  />
            <Td output={"."}  fun = {this.handleInput}  />
            <Td output={"="}  fun = {this.handleInput}  />
          </tr>
        </table>
      </div>
    );
  }
}
