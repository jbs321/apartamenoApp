import React from 'react';
import axios from 'axios';
import Trumbowyg from 'react-trumbowyg';
import 'react-trumbowyg/dist/trumbowyg.css';
import RaisedButton from 'material-ui/RaisedButton';

export default class FeedController extends React.Component {

    constructor() {
        super();
        this.data = "";
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.data = event.target.innerHTML;
    }

    handleClick() {
        axios.post('building/51/feed', {
            content: this.data,
        }).then(result => console.log(result.data));

        this.props.handleClick(this.data);
    }

    render() {
        if(this.props.building === undefined) {
            return <div className="feed-controller">Loading</div>
        }

        return (
            <div className="feed-controller">
                <Trumbowyg id='react-trumbowyg' data={this.data} onChange={this.handleChange} style={{height: 200}}/>
                <RaisedButton primary={true} label={"POST"} onTouchTap={this.handleClick}/>
            </div>
        );
    }
}