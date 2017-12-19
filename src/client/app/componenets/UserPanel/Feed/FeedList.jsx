import React from 'react';
import {connect} from 'react-redux';
import Feed from "./Feed.jsx";
import FeedController from "./FeedController.jsx";
import {fetchFeeds} from '../../../actions/feeds';
// import {fetchUserProfile} from '../../../actions/userProfile';
import {fetchUserBuilding} from '../../../actions/userBuilding';

class FeedList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.fetchFeeds();
        // this.props.fetchUserProfile();
        this.props.fetchUserBuilding();
        // document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        //     console.log(event.currentTarget.scrollingElement.scrollTop , window.outerHeight);
        //     if(event.currentTarget.scrollingElement.scrollTop > window.outerHeight) {
        //         axios.post(this.state.next_page_url).then(result => console.log(result.data));
        //     }
    }

    handleClick(htmlStr) {
        // let result = [new FeedData({
        //     id: 99999999,
        //     content: htmlStr,
        //     user: Auth.getUser(),
        //     created_at: "20/23/23 23:23:23",
        // })].concat(this.state.feeds);
        //
        // this.setState({feeds: result,});
    }


    renderFeeds(feeds) {
        return null;
        // return feeds.map((feed, idx) => <Feed feed={feed} key={idx}/>);
    }

    render() {
        const {feeds, building} = this.props;

        if (feeds == undefined) {
            return <div>Loading...</div>
        }

        return (
            <div className="feed-list">
                {/*TODO::Remove this when finnish testing*/}
                {/*<pre>{this.state.next_page_url}</pre>*/}
                <FeedController building={building} handleClick={this.handleClick}/>
                {this.renderFeeds(feeds.data)}
            </div>
        );
    }
}


function mapStateToProps({feeds, userProfile, userBuilding}) {
    return {feeds, user: userProfile, building: userBuilding};
}

export default connect(mapStateToProps, {fetchFeeds, fetchUserBuilding})(FeedList);