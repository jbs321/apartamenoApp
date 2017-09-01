import React, {Component} from 'react';
import Register from "./Register.jsx";
import axios from 'axios';
import isAuth from '../Auth/Auth.jsx';
import TopMenuContainer from '../Header/TopMenuContainer.jsx';

let qs = require('qs');

export default class RegisterContainer extends Component {
    constructor() {
        super();

        this.formFields = [
            'first_name',
            'last_name',
            'email',
            'address',
            'unit_number',
            'phone_number',
            'password',
            'password_confirmation',
        ];

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.register = this.register.bind(this);
    }

    onChange(event) {
        console.log(event.target.value);
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
            let isSaved = result.data;

            if(isSaved) {
                isAuth.login();
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container-fluid" style={{padding:0}}>
                <TopMenuContainer/>
                <Register onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>

        );
    }
}