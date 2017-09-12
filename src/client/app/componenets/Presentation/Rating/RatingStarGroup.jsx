import React from 'react';
import RatingStar from "./RatingStar.jsx";
import axios from 'axios';

export default class RatingStarGroup extends React.Component {
    constructor(props) {
        super(props);

        let index = 0;
        let readOnly = false;
        let numOfStars = 5;

        if (this.props.index !== undefined) {
            index = this.props.index;
        }

        if (this.props.readOnly !== undefined) {
            readOnly = this.props.readOnly;
        }

        if (this.props.numOfStars !== undefined) {
            numOfStars = this.props.numOfStars;
        }

        if (this.props.numOfStars - 1 < this.props.index) {
            throw new Error("index can't be larger then num of stars");
        }

        this.state = {
            index: index,
            readOnly: readOnly,
            numOfStars: numOfStars,
        };
    }

    handleClick(element) {
        this.setState({
            index: element.props.index,
            numOfStars: this.state.numOfStars
        });
        let newValue = element.props.index;

        axios.put('/building/' + this.props.building_id + '/rating/' + this.props.rating_id, {
            rate: newValue
        }).then(((result) => {
            console.log(result);
        })).catch((err) => {
            if (err.response) {
                alert(err.response.data, err.response.status);
            }
        });
    }

    render() {
        let stars = [];

        for (let i = 1; i <= this.state.numOfStars; i++) {
            let isActive = (this.state.index >= i);
            stars.push(<RatingStar
                key={i}
                index={i}
                active={isActive}
                readOnly={this.state.readOnly}
                handleClick={this.handleClick.bind(this)}/>)
        }

        return <div itemID="star-group" className="star-group" style={this.props.style}>{stars}</div>;
    }
}