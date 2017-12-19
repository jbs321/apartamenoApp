import React  from 'react';
import {Panel} from 'react-bootstrap';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{padding: 0}}>
                <div className="profile-area row">
                    <div
                        className="col-lg-6 col-md-7 col-sm-7 col-xs-11 offset-lg-3 offset-md-3 offset-sm-3 offset-xs-1"
                        style={{padding: 30}}>
                        <h1 >{this.props.profile._first_name} {this.props.profile._last_name}</h1>
                        <Panel header="Profile">
                            <img src={this.props.profile.avatar} style={{height: "100px", width: "100px"}}/>
                            <pre>{JSON.stringify(this.props, null, 2)}</pre>
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}