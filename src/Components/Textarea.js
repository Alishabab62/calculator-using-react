import React, { Component } from 'react'
import "../App.css"
export default class Textarea extends Component {
  render() {
    return (
      <>
       <div className='output'>{this.props.input}</div>
      </>
    )
  }
}
