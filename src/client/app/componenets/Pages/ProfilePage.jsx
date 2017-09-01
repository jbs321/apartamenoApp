import React from 'react';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import ProfileContainer from "../Containers/ProfileContainer.jsx";

export default class ProfilePage extends React.Component {
    render() {
        return (
            <div className="page profile-page">
                <TopMenuContainer/>
                <ProfileContainer/>
            </div>
        );
    }
}