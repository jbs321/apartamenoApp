import React from 'react';
import {connect} from 'react-redux';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";

class UserPanelPage extends React.Component {
    render() {
        const {isAuthenticated} = this.props;

        if(!isAuthenticated) {
            return <div>Please Log in</div>
        }

        return (
            <div className="page user-panel-page">
                <TopMenuContainer/>

                <div className="menu-container container">
                    <div className="row">

                        <div className="col-lg-9">
                            sdasdas
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({isAuthenticated}) {
    return {isAuthenticated};
}

export default connect(mapStateToProps, null)(UserPanelPage);