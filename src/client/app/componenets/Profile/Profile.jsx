import React  from 'react';
import {Panel} from 'react-bootstrap';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{this.props.profile._first_name} {this.props.profile._last_name}</h1>
                    <Panel header="Profile">
                        <img src={this.props.profile.profileImg} style={{height:"100px", width:"100px"}}/>
                        <pre>{JSON.stringify(this.props, null, 2)}</pre>
                    </Panel>
                </div>
            </div>
        );
    }
}