import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    increaseCount = () => {
        let count = this.state.count + 1;

        this.setState({
            count
        });
    }

    decreaseCount = () => {
        let count = this.state.count - 1;

        this.setState({
            count
        })
    }

    render() {
        return(
            <div className="counter">
                <h4>Counter: {this.state.count}</h4>
                <button className="inc-dec-button" onClick = {this.decreaseCount}>Decrease</button>
                <button className="inc-dec-button" onClick = {this.increaseCount}>Increase</button>
            </div>
        )
    }
}

export default Counter;