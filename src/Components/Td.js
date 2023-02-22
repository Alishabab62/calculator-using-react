import React, { Component } from 'react'
import "../App.css"
export default class Td extends Component {
  render() {
    return (
      <>
        <td colSpan={this.props.colSpan} style={this.props.style} onClick={(e) => {this.props.fun(e.target.innerText)}}>{this.props.output}</td>
      </>
    )
  }
}
