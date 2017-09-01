import React from 'react';
import axios from 'axios';
import Login from "../Presentation/Form/Login.jsx";

let qs = require('qs');

export default class LoginContainer extends React.Component {
    constructor() {
        super();

        this.formFields = [
            'email',
            'password',
        ];
    }

    onSubmit(event) {
        let data = {};
        this.formFields.forEach(field => {
            data[event.target[field].name] = event.target[field].value;
        });

        this.login(data);
    }

    login(data) {
        axios.post(process.env.ENV.API_URL + "/login", qs.stringify(data))
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
        return (<Login/>);
    }
}