import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/UserAction';
import axios from 'axios';
import _ from 'lodash';
import history from '../../History.jsx';
import {authenticate} from '../../actions/Auth';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
let qs = require('qs');


const style = {
    margin: 12,
};

class RegisterContainer extends Component {

    onSubmit(data) {
        const {registerUser, authenticate} = this.props;

        registerUser(data, (result) => {
            authenticate(data.email, data.password, (result) => {
                let expiresIn = JSON.stringify((result.expires_in * 1000) + new Date().getTime());
                localStorage.setItem('token_type', result.token_type);
                localStorage.setItem('expires_in', expiresIn);
                localStorage.setItem('access_token', result.access_token);
                localStorage.setItem('refresh_token', result.refresh_token);
                axios.defaults.headers.common['Authorization'] = result.token_type + " " + result.access_token;
                history.push('/');
            });
        });
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ""}`;

        return (
            <div className={className}>
                <TextField hintText={field.label} {...field.input} className="field login-field"
                           floatingLabelText={field.label}/>
                <div className="text-help" style={{color: "red"}}>{touched ? error : ""}</div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;
        const className = (this.props.className !== undefined) ? this.props.className : "";

        return (
            <div className={"login-container " + className} style={this.props.style}>
                <div className={"login-form " + className} style={this.props.style}>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="first_name" label="First Name" component={this.renderField}/>
                        <Field name="last_name" label="Last Name" component={this.renderField}/>
                        <Field name="email" label="Email" component={this.renderField}/>
                        <Field name="address" label="Address" component={this.renderField}/>
                        <Field name="unit_number" label="Unit Number" component={this.renderField}/>
                        <Field name="phone_number" label="Phone Number" component={this.renderField}/>
                        <Field name="password" label="Password" component={this.renderField}/>
                        <Field name="password_confirmation" label="Password Confirmation" component={this.renderField}/>

                        <RaisedButton label="Login" primary={true} style={style}/>
                        <RaisedButton type="submit" label="Register" secondary={true} style={style}/>
                    </form>
                </div>
            </div>

        );
    }
}

function asyncValidate(values) {
    const {API_URL} = process.env.ENV;
    return axios.post(`${API_URL}/register/validate`, qs.stringify(values))
        .then(() => {
            console.log('success');
        })
        .catch(result => {
            const {errors} = result.response.data;
            throw _.mapValues(errors, arr => arr.join(" "));
        });

}

function validate(values) {
    const errors = {};

    if (!values.first_name) {
        errors.first_name = 'Missing First Name';
    }

    if (!values.last_name) {
        errors.last_name = 'Missing Last Name';
    }

    if (!values.unit_number) {
        errors.unit_number = 'Missing Unit Number';
    }

    if (!values.phone_number) {
        errors.address = 'Missing Address';
    }

    if (!values.address) {
        errors.phone_number = 'Missing Phone Number';
    }

    if (!values.email || values.email == "") {
        errors.email = 'Missing Email';
    } else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))) {
        errors.email = 'Please provide a correct email format user@example.com';
    }

    if (!values.password || values.password == "") {
        errors.password = 'Missing Password';
    } else if (values.password != values.password_confirmation) {
        errors.password_confirmation = 'Password Confirmation do not match';
    }

    if (!values.password_confirmation) {
        errors.password_confirmation = 'Missing Password Confirmation';
    }

    return errors;
}

export default reduxForm({
    validate,
    asyncValidate,
    form: 'RegisterForm'
})(
    connect(null, {registerUser, authenticate})(RegisterContainer)
);