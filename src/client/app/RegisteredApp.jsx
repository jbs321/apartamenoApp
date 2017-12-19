import React from 'react';
import PanelPage from "./componenets/Pages/PanelPage.jsx";

const appStyle = {height: "100%"};

export default class RegisteredApp extends React.Component {
    render() {
        return (
            <div className="app registered-app" style={appStyle}>
                <div className="page-container">
                    <PanelPage/>
                </div>
            </div>
        )
    }
}