import React from 'react';
import Login from "../Presentation/Form/Login.jsx";
import Auth from "../Auth/Auth.jsx";

let qs = require('qs');

export default class LoginContainer extends React.Component {
    constructor() {
        super();

        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <Login onSubmit={this.onSubmit}/>;
    }

    onSubmit(data) {
        let formData = data.target;

        try {
            if (this.validate(formData)) {
                let email    = formData['email'].value;
                let password = formData['password'].value;

                Auth.authenticate(email, password);
            }
        } catch (e) {
            alert(e.message);
            console.log(e);
        }
    }

    validate(formData) {
        let email    = formData['email'].value;
        let password = formData['password'].value;

        if(!email) {
            throw Error('Missing Email');
        }

        if(!password) {
            throw Error('Missing Password');
        }

        if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            throw new Error('Please provide a correct email format user@example.com');
        }

        return true;
    }
}
