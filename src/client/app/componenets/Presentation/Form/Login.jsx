import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.formFields = [
            'email',
            'password',
        ];

        //initialize form fields
        this.formFields.forEach(field => {
            this.state[field] = "";
        });

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        console.log(event);

        if(this.props.onSubmit !== undefined) {
            this.props.onSubmit(event);
        }
    }

    onChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });

        if (this.props.onChange !== undefined) {
            this.props.onChange(event);
        }
    }

    render() {
        const style = {
            margin: 12,
        };

        const fieldStyle = {
            display: "block",
        };

        const className = (this.props.className !== undefined) ? this.props.className : "";

        return (
            <div className={"login-container " + className} style={this.props.style}>
                <div className={"login-form " + className} style={this.props.style}>
                    <form role="form" className="htmlForm-horizontal" onSubmit={this.onSubmit}>
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            style={fieldStyle}
                            hintText="Email"
                            onChange={this.onChange}
                            className="field login-field"
                            floatingLabelText="Email Address"/>


                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            style={fieldStyle}
                            hintText="Password"
                            onChange={this.onChange}
                            className="field login-field"
                            floatingLabelText="Password"/>

                        <RaisedButton type="submit" label="Login" primary={true} style={style}/>
                        <RaisedButton label="Register" secondary={true} style={style}/>

                        <div>
                            <a href="#">Forgot your password?</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}