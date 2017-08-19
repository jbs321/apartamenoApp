import React  from 'react';
import './Profile.css';
import axios from 'axios';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        axios.get("/user").then(result => {
            console.log(result);
        });
    }

    render() {
        console.log(this);

        return (
            <div>dfsd</div>
        );
    }
}