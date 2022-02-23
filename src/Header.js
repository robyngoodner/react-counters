import React from 'react';

function Header(props) {
    return(
        <div className = "App-header">
            <h1 className="App-title">React Counters</h1>
            <button className="inc-dec-button" onClick = {props.increaseCounter}>+</button>
            <button className="inc-dec-button" onClick = {props.decreaseCounter}>-</button>
        </div>
    )
}

export default Header;