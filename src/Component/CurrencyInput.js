import React, { Component } from 'react'

export class CurrencyInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onMoneyChange(event.target.value)
  }

  render() {
    return (
      <fieldset>
        <legend>{ this.props.currencyName }</legend>
        <input value={this.props.money} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

export default CurrencyInput