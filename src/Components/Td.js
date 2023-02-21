import React, { Component } from 'react'
import "../App.css"
export default class Td extends Component {
  render() {
    return (
      <>
        <td colSpan={this.props.colSpan} onClick={this.props.fun}>{this.props.output}</td>
      </>
    )
  }
}
