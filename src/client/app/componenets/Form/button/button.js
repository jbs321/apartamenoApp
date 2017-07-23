import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(stroing) {
        console.log(stroing);
    }

    render() {
        return (
            <button onClick={() => this.handleClick("shit")}>
                Print this
            </button>
        );
    }
}

export default Button;