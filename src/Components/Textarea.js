import React, { Component } from 'react'
import "../App.css"
export default class Textarea extends Component {
  render() {
    return (
      <>
       <input type="text" value={this.props.input} placeholder="0"></input>
      </>
    )
  }
}
