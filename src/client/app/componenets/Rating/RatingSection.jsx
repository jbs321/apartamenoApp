import React from 'react';
import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/toggle/star';
import StarEmpty from 'material-ui/svg-icons/toggle/star-border';
import {Rate} from './Rate';
import axios from 'axios';
import Auth from '../Auth/Auth.jsx';
import {
    TOOLTIP_CONVERSION,
    STAR_COLOR,
    AMOUNT_OF_STARS,
    ICON_STYLE,
    TOOLTIP_POSITION
} from './Variables';
import RatingStarGroup from "./RatingStarGroup.jsx";

export default class RatingSection extends React.Component {
    handleClick(index) {
        if (this.props.readOnly) {
            return;
        }

        this.props.handleClick(this.state, index);
    }

    render() {
        let ratingGroups = [];

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