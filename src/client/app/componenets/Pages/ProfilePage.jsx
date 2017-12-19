import React from 'react';
import {connect} from 'react-redux';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import {fetchUserProfile} from '../../actions/UserProfileAction';
import Profile from "../Presentation/Profile/Profile.jsx";

class ProfilePage extends React.Component {
    componentDidMount() {
        this.props.fetchUserProfile();
    }

    render() {
        console.log(this.props);
        const {user} = this.props;

        if (user == null) {
            return <div>Loading...</div>
        }

        return (
            <div className="page profile-page">
                <TopMenuContainer/>
                <Profile profile={user}/>
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {user};
}

export default connect(mapStateToProps, {fetchUserProfile})(ProfilePage);