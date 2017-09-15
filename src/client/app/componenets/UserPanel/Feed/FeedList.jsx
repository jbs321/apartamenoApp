import React from 'react';
import Feed from "./Feed.jsx";
import axios from 'axios';
import FeedController from "./FeedController.jsx";

export default class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.state       = {};
        this.state.feeds = (props.feeds !== undefined) ? props.feeds : [];

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('building/51/feed').then(result => {
            this.setState({
                feeds: result.data
            });
        });
    }

    handleClick(htmlStr) {
        let stateFeeds = this.state.feeds;
        let feeds = [{content: htmlStr}];
        feeds.push(stateFeeds);

        this.setState({
            feeds: feeds,
        });
    }

    render() {
        let stateFeeds = this.state.feeds;
        let feeds = stateFeeds.map((feed, idx) => {
            return (
                <Feed value={feed.content} key={idx}/>
            );
        });

        return (
            <div className="feed-list" style={{background: "#f3f3f3"}}>
                <FeedController handleClick={this.handleClick} style={{background: "#fff"}}/>
                {feeds}
            </div>
        );
    }
}