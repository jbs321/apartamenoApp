import React  from 'react';
import {Panel} from 'react-bootstrap';
import './Profile.css';
import {ProfileData} from "./Types/ProfileData";
import Auth from "../Auth/Auth.jsx";
import history from "../../History.jsx"

export default class Profile extends React.Component {
    constructor() {
        super();

        if(!Auth.isAuth()) {
            history.replace('/');
        }

        let profileData = new ProfileData();
        profileData._email ="";
        profileData._first_name ="";
        profileData._last_name ="";

        this.state = profileData;
    }

    componentDidMount() {
        Auth.getProfile((profile) => {
            this.setState({
                _first_name: profile.first_name,
                _last_name: profile.last_name,
                _email: profile.email,
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{this.state._first_name} {this.state._last_name}</h1>
                    <Panel header="Profile">
                        <img src={this.state._profileImg} style={{height:"100px", width:"100px"}}/>
                        <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    </Panel>
                </div>
            </div>
        );
    }
}