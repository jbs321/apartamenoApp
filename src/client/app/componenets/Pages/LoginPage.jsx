import React from 'react';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import LoginContainer from "../Containers/LoginContainer.jsx";

export default class LoginPage extends React.Component {

    render() {
        return (
            <div className="page login-page">
                <TopMenuContainer/>
                <LoginContainer/>
            </div>
        );
    }
}