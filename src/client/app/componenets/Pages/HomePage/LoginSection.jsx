import React from 'react';
import LoginContainer from '../../Containers/LoginContainer.jsx';
import RegisterContainer from '../../Containers/RegisterContainer.jsx';

export default class LoginSection extends React.Component {

    render() {
        return (
            <div className="login-section">
                <div style={{float:'left'}}><LoginContainer /></div>
                <div style={{float:'right'}}><RegisterContainer /></div>
            </div>
        );
    }
}