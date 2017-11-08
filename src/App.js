import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props);
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.initialValue = [1, 2, 3];
    const initSum = this.initialValue.reduce((a, b) => a + b, 0);
    this.state = {
      sum: initSum
    };
  }

  onCounterUpdate(newVal, oldVal) {
    const valueChange = newVal - oldVal;
    this.setState({sum: this.state.sum + valueChange});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Counter caption="First" initialValue={this.initialValue[0]} onUpdate={this.onCounterUpdate}/>
          <Counter caption="Second" initialValue={this.initialValue[1]} onUpdate={this.onCounterUpdate}/>
          <Counter caption="Third" initialValue={this.initialValue[2]} onUpdate={this.onCounterUpdate}/>
        </div>
        <div>
          Total sum: {this.state.sum}
        </div>
      </div>
    );
  }
}

export default App;
