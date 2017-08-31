import React, {Component} from 'react';
import Register from "./Register.jsx";
import axios from 'axios';

let qs = require('qs');

export default class RegisterContainer extends Component {
    constructor() {
        super();

        this.formFields = [
            'firstName',
            'lastName',
            'email',
            'address',
            'unitNumber',
            'phoneNumber',
            'password',
            'rePassword',
        ];

        this.onSubmit = this.onSubmit.bind(this);
        this.register = this.register.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        if (event === undefined) {
            throw new Error("Event doesn't exist");
        }

        let formData = {};
        this.formFields.forEach(field => {
            if (event.target[field] === undefined) {
                throw new Error(field + "doesn't exit");
            }

            formData[field] = event.target[field].value;
        });

        this.register(formData);
    }

    register(data) {
        axios.post(process.env.ENV.API_URL + "/register", qs.stringify(data))
        .then((result) => {
            console.log(result.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Register onSubmit={this.onSubmit}/>
        );
    }
}