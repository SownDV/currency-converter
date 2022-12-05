import React, { Component } from 'react'

export class TemInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value)
  }

  render() {
    return (
      <fieldset>
        <legend>rates</legend>
        <input value={this.props.temp} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

export default TemInput