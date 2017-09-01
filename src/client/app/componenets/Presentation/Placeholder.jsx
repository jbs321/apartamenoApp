import React from 'react';

export default class Placeholder extends React.Component {

    render() {
        return (
            <div className="placeholder-container">
                <div className="header-top animated-background  header-top"></div>
                <div className="animated-background header-top-right"></div>
                <div className="animated-background header-top-right-2"></div>
                <div style={{clear: "both", marginBottom: 30}}></div>
                <div className="animated-background header-large"></div>
                <div className="animated-background header-small"></div>
                <div className="animated-background header-medium"></div>
            </div>
        );
    }
}