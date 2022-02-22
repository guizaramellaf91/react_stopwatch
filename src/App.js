import React, { Component } from 'react'
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'GO!',
      limpar: 'CLEAR!'
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'GO!';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'PAUSE!';
    }

    this.setState(state);
  }

  clear() {
    if (this.timer !== null) {
      alert(`your stopped the count at ${this.state.numero.toFixed(1)} seconds`);
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'GO!';
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img alt="" src={require('./assets/cronometro.png')} className="img" />
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <a className='timerLabel'>second(s)</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.go}>{this.state.botao}</a>
          <a className='botao' onClick={this.clear}>{this.state.limpar}</a>
        </div>
      </div>
    );
  }
}

export default App;