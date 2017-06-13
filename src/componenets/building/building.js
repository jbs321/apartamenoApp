import React, {Component} from 'react';

class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Building;