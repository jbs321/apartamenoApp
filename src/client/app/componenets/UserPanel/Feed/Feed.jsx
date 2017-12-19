import React from 'react';
import Placeholder from "../../Presentation/Placeholder/Placeholder.jsx";
import Avatar from 'material-ui/Avatar';
import {deepOrange300, purple500} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class Feed extends React.Component {

    renderPlaceHolder() {
        return (
            <div className="feed-frame">
                <div className="feed">
                    <Placeholder/>
                </div>
            </div>
        );
    }

    renderAvatar() {
        return <Avatar color={deepOrange300} backgroundColor={purple500} size={30} style={style}>A</Avatar>;
    }

    render() {
        const {user, content, created_at} = this.props.feed;

        if (content === undefined) {
            return this.renderPlaceHolder();
        }

        return (
            <div className="feed-frame">
                <div className="feed-inner-frame">
                    <header>
                        {this.renderAvatar()}
                        <i>{user.first_name} {user.last_name}</i>
                        <div className="mark">{created_at}</div>
                    </header>
                    <div className="feed" dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </div>
        );
    }
}