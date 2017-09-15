import React from 'react';
import Placeholder from "../../Presentation/Placeholder/Placeholder.jsx";
import Avatar from 'material-ui/Avatar';
import {deepOrange300, purple500} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class Feed extends React.Component {
    render() {
        console.log(this);
        if (this.props.feed.content === undefined || this.props.feed === undefined) {
            return (
                <div className="feed-frame">
                    <div className="feed">
                        <Placeholder/>
                    </div>
                </div>
            );
        }

        return (
            <div className="feed-frame">
                <header>
                    <Avatar color={deepOrange300} backgroundColor={purple500} size={30} style={style}>A</Avatar>
                    <i>{this.props.feed.user.first_name + " " + this.props.feed.user.last_name}</i>
                    <mark>{this.props.feed.created_at}</mark>
                </header>
                <div className="feed"
                     dangerouslySetInnerHTML={{__html: this.props.feed.content}}></div>
            </div>
        );
    }
}