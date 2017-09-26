import React from 'react';
import TopMenuContainer from "../Containers/TopMenuContainer.jsx";
import MenuContainer from "../UserPanel/Menu/MenuContainer.jsx";
import FeedList from "../UserPanel/Feed/FeedList.jsx";

export default class PanelPage extends React.Component {
    render() {
        return (
            <div className="page building-page">
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