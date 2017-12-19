import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Trumbowyg from 'react-trumbowyg';
import 'react-trumbowyg/dist/trumbowyg.css';
import RaisedButton from 'material-ui/RaisedButton';
import {createFeed} from '../../../actions/feeds';

class FeedController extends React.Component {
    constructor() {
        super();

        this.data = "";
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleClick() {
        const {id} = this.props.building;
        this.props.createFeed(this.data, id).then(result => console.log(result.data));
        // this.props.handleClick(this.data);
    }

    handleChange(event) {
        this.data = event.target.innerHTML;
    }

    render() {
        if (this.props.building === undefined) {
            return <div className="feed-controller">Loading...</div>
        }

        return (
            <div className="feed-controller">
                <Trumbowyg id='react-trumbowyg' data={this.data} onChange={this.handleChange}/>
                <RaisedButton onTouchTap={this.handleClick}>Post</RaisedButton>
            </div>
        );
    }
}

export default connect(null, {createFeed})(FeedController);
