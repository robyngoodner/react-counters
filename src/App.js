import React, {Component} from 'react';
import Header from './Header';
import CounterList from './CounterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: 0
    };
  };

  increaseCounter = () => {

    let plusCounter = this.state.counters + 1;

    this.setState({
      counters: plusCounter
    })
  };

  decreaseCounter = () => {
    let minusCounter = this.state.counters - 1;

    this.setState({
      counters: minusCounter
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <Header increaseCounter = {this.increaseCounter} decreaseCounter = {this.decreaseCounter} />
        <CounterList counters={this.state.counters}/>
      </div>
    )
  }
}

export default App;
