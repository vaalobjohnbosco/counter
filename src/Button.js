import React, { Component } from 'react';

class Button extends Component {
    incrementValue = () => {
    this.props.incrementCount (this.props.value)
    };
    render() {
        return(
            <button className="ui button green" onClick={this.incrementValue}>+{this.props.value} </ button>
        );
    };
};

export default Button;