import React from 'react';
import Feed from "./Feed.jsx";
import axios from 'axios';
import FeedController from "./FeedController.jsx";
import Auth from "../../Auth/Auth.jsx";
import {BuildingData} from "../../DataTypes/BuildingData";
import FeedData from "../../DataTypes/FeedData";
import BuildingDat from "../../DataTypes/BuildingDat";

export default class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.building = [];
        this.state.feeds = (props.feeds !== undefined) ? props.feeds : [];
        this.state.next_page_url = "";
        this.state.current_page = 1;
        this.state.total = 1;

        this.getFeeds = this.getFeeds.bind(this);
        this.fetchFeeds = this.fetchFeeds.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.getFeeds();
        window.addEventListener('scroll', this.handleScroll);
    }

    getFeeds() {
        Auth.getRegisteredBuilding(building => {
            this.setState({
                building: building
            });

            this.fetchFeeds(building, result => {
                let feeds    = result.data;
                let feedsMap = feeds.map(feed => new FeedData(feed));

                this.setState({
                    feeds: feedsMap,
                    total: parseInt(result.total),
                    current_page: parseInt(result.current_page),
                    next_page_url: result.next_page_url,
                });

            });
        });
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;

        if (scrollTop > window.outerHeight * this.state.current_page) {
            axios.get(this.state.next_page_url).then(result => {
                let feeds    = result.data;
                let feedsMap = feeds.map(feed => new FeedData(feed));

                this.setState({
                    feeds: this.state.feeds.concat(feedsMap),
                    total: parseInt(result.total),
                    current_page: parseInt(result.current_page),
                    next_page_url: result.next_page_url,
                });
            });
        }
    }

    fetchFeeds(building, cb) {
        axios.get('building/' + building.id + '/feeds/3').then(result => {
            let feedPagination = result.data;
            cb(feedPagination);
        });
    }

    handleClick(htmlStr) {
        let result = [new FeedData({
            id: 99999999,
            content: htmlStr,
            user: Auth.getUser(),
            created_at: "20/23/23 23:23:23",
        })].concat(this.state.feeds);

        this.setState({feeds: result,});
    }

    render() {
        let stateFeeds = this.state.feeds;
        let feeds = stateFeeds.map((feed, idx) => {
            return (
                <Feed feed={feed} key={idx}/>
            );
        });

        return (
            <div className="feed-list">
                {/*TODO::Remove this when finnish testing*/}
                <pre>{this.state.next_page_url}</pre>
                <FeedController building={this.state.building} handleClick={this.handleClick}/>
                {feeds}
            </div>
        );
    }
}