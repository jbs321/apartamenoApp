import React from 'react';
import '../Presentation/Profile/Profile.css';
import {ProfileData} from "../DataTypes/ProfileData";
import Auth from "../Auth/Auth.jsx";
import history from "../../History.jsx"
import Profile from "../Presentation/Profile/Profile.jsx";

export default class ProfileContainer extends React.Component {
    constructor() {
        super();
        if (!Auth.isAuth()) {
            history.replace('/');
        }

        let profileData = new ProfileData();
        profileData._email = "";
        profileData._first_name = "";
        profileData._last_name = "";
        profileData._profileImg = "/public/img/profileImg.png";

        this.state = {profile: profileData};
    }

    componentDidMount() {
        Auth.getProfile((profile) => {
            console.log(profile);
            let profileData = new ProfileData();
            profileData.email = profile.email;
            profileData.first_name = profile.first_name;
            profileData.last_name = profile.last_name;
            profileData.avatar = profile.avatar;

            this.setState(
                {
                    profile: profileData
                });
        });
    }

    render() {
        return <Profile profile={this.state.profile}/>;
    }
}