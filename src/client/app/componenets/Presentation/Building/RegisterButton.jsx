import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

export default class RegisterButton extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.state.isRegistered = false;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let isReg = this.state.isRegistered;
        this.setState({
            isRegistered: !isReg
        });
    }

    render() {
        console.log(this.props);
        if(this.props.building === undefined) {
            return null;
        }

        return <RaisedButton primary={this.state.isRegistered} label={this.props.label} onClick={this.handleClick}/>;
    }
}