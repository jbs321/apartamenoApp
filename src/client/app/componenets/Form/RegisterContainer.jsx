import React, {Component} from 'react';
import Register from "./Register.jsx";

export default class RegisterContainer extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(val, somethign) {
        console.log(val, somethign);
        // e.preventDefault();
        // console.log(this.toJSONString(e.target));
    }

    toJSONString( form ) {
        let obj = {};
        let elements = form.querySelectorAll("input, select, textarea");

        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify( obj );
    }

    render() {
        return (
            <Register onSubmit={(val) => this.onSubmit(val)} />
        );
    }
}