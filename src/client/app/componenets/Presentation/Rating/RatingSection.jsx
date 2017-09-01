import React from 'react';
import RatingStarGroup from "./RatingStarGroup.jsx";

export default class RatingSection extends React.Component {
    handleClick(index) {
        if (this.props.readOnly) {
            return;
        }

        this.props.handleClick(this.state, index);
    }

    render() {
        if (this.props.ratings === undefined) {
            return (
                <div itemID="rating-section" className="rating-section container">
                    No Ratings
                </div>
            );
        }

        return (
            <div itemID="rating-section" className="rating-section container" style={this.props.style}>
                {this.props.ratings.map((rate, key) =>
                    <div key={key}> {rate.label}: <RatingStarGroup handleClick={this.props.handleClick} readOnly={this.props.readOnly} index={rate.value}/>
                    </div>)}
            </div>
        );
    }
}