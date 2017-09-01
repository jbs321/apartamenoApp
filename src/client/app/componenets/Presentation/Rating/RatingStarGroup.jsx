import React from 'react';
import RatingStar from "./RatingStar.jsx";


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

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(element) {
        if (this.props.handleClick !== undefined) {
            this.props.handleClick(element);
        } else {
            this.setState({
                index: element.props.index,
                numOfStars: this.state.numOfStars
            });
        }
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
               handleClick={this.handleClick}/>)}

        return <div itemID="star-group" className="star-group" style={this.props.style}>{stars}</div>;
    }
}