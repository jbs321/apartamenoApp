import React from 'react';
import {Panel} from 'react-bootstrap';
import './Profile.css';
import {ProfileData} from "./Types/ProfileData";
import Auth from "../Auth/Auth.jsx";
import history from "../../History.jsx"
import Profile from "./Profile.jsx";

export default class ProfileContainer extends React.Component {
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
            this.setState(
                {
                    profile: {
                        _first_name: profile.first_name,
                        _last_name: profile.last_name,
                        _email: profile.email,
                    }
                });
        });
    }

    render() {
        return <Profile profile={this.state.profile}/>;
    }
}