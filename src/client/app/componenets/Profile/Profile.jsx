import React  from 'react';
import {Panel} from 'react-bootstrap';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{this.props._first_name} {this.props._last_name}</h1>
                    <Panel header="Profile">
                        <img src={this.props._profileImg} style={{height:"100px", width:"100px"}}/>
                        <pre>{JSON.stringify(this.props, null, 2)}</pre>
                    </Panel>
                </div>
            </div>
        );
    }
}