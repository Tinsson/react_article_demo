import React, { Component } from 'react'

export default class ClassTest extends Component {
  state = {
    message: 'class component info'
  }

  render() {
    return (
      <span>{this.state.message}</span>
    )
  }
}