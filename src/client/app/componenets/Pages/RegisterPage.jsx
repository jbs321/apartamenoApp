import React, {Component} from 'react';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import RegisterContainer from "../Containers/RegisterContainer.jsx";


export default class RegisterPage extends Component {
    render() {
        return (
            <div className="page register-page" style={{padding: 0}}>
                <TopMenuContainer/>
                <RegisterContainer/>
            </div>

        );
    }
}