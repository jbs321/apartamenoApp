import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

export default class RegisterButton extends React.Component {

    constructor(props) {
        super(props);

        this.state           = {};
        this.state.primary   = props.primary;
        this.state.secondary = !props.primary;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.validate();

        if(this.state.primary) {
            axios.post("/building/register/" + this.props.addressId);
            this.setState({
                primary: false,
                secondary: true,
            });
        } else {
            axios.post("/building/register/" + this.props.addressId + "/false");
            this.setState({
                primary: true,
                secondary: false,
            });
        }
    }

    validate() {
        if(this.props.addressId === undefined) {
            throw new Error("Address Id is missing");
        }
    }

    render() {
        return (
            <RaisedButton primary={this.state.primary}
                          label={this.props.label}
                          onClick={this.handleClick}/>
        );
    }
}