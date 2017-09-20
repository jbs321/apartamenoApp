import React from 'react';
import MenuContainer from "./Menu/MenuContainer.jsx";
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import FeedList from "./Feed/FeedList.jsx";
import Auth from "../Auth/Auth.jsx";

export default class UserPanelPage extends React.Component {

    render() {
        return (
            <div className="page user-panel-page">
                <TopMenuContainer/>

                <div className="menu-container container">
                    <div className="row">
                        <div className="col-lg-3">
                            <MenuContainer/>
                        </div>
                        <div className="col-lg-9">
                            <div className="feed-container">
                                <FeedList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}