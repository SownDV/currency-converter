import React from 'react';
import logo from '../logo.svg';
import '../App.scss';
import ratesData from '../rates.json';
import CurrencyInput from './CurrencyInput';

function tryConvert(money, code, encode = true) {
  const input = parseFloat(money);
  if (Number.isNaN(input)) {
    return '';
  }
  const currency = ratesData.rates[0].value.find(item => item.code === code);
  if (!currency) {
    return '';
  }
  const sell = parseFloat(currency.sell.replace(',', ''))
  const output = encode ? input*sell : input/sell;
  const rounded = Math.round(output * 1000)/1000;
  return rounded.toString();
  }

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currencyCode: 'USD',
      money: '',
      encode: true,
    }

    this.handleChangeCurrency = this.handleChangeCurrency.bind(this)
    this.handleChangeVNDEncode = this.handleChangeVNDEncode.bind(this)
    this.handleChangeVNDDecode = this.handleChangeVNDDecode.bind(this)
  }

  handleChangeCurrency(e) {
    this.setState({
      currencyCode: e.target.value,
      encode: true,
      money: '',
    })
  }

  handleChangeVNDEncode(money) {
    this.setState({ 
      money: money,
      encode: true,
    })
  }

  handleChangeVNDDecode(money) {
    this.setState({ 
      money: money,
      encode: false,
    })
  }

  render() {
    const money = this.state.money;
    const VND = this.state.encode ? tryConvert(money, this.state.currencyCode, true) : money;
    const notVND = this.state.encode ? money : tryConvert(money, this.state.currencyCode, false);

    return (
      <div className="Calculator">
        <header className="App-header">
          <h2>Chuyển đổi tiền</h2>

          <div>
            <select className="select-box" onChange={this.handleChangeCurrency}>
              <option value="USD">Đô la Mỹ - USD</option>
            </select>
          </div>

          <div className="form-input">
            <CurrencyInput currencyName={this.state.currencyCode} money={notVND} onMoneyChange={this.handleChangeVNDEncode}/>
            <CurrencyInput currencyName="VND" money={VND} onMoneyChange={this.handleChangeVNDDecode}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Calculator;