import React from 'react';
import Feed from "./Feed.jsx";
import axios from 'axios';
import FeedController from "./FeedController.jsx";
import Auth from "../../Auth/Auth.jsx";

export default class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.building = [];
        this.state.feeds = (props.feeds !== undefined) ? props.feeds : [];

        this.fetchFeeds = this.fetchFeeds.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        Auth.getRegisteredBuilding(building => {
            this.fetchFeeds(building, feeds => {
                this.setState({
                    feeds: feeds,
                })
            });
        });
    }

    fetchFeeds(building, cb) {
        axios.get('building/' + building.id + '/feeds').then(result => {
            cb(result.data);
        });
    }

    handleClick(htmlStr) {
        let result = [{content: htmlStr}].concat(this.state.feeds);

        this.setState({
            feeds: result,
        });
    }

    render() {
        let stateFeeds = this.state.feeds;
        let feeds = stateFeeds.map((feed, idx) => {
            return (
                <Feed feed={feed} key={idx}/>
            );
        });

        return (
            <div className="feed-list" style={{background: "#f3f3f3"}}>
                <FeedController building={this.state.building} handleClick={this.handleClick}
                                style={{background: "#fff"}}/>
                {feeds}
            </div>
        );
    }
}