import React from 'react';

export default class Rating extends React.Component {
    render() {

        let ratingArr = [];
        let unRatingArr = [];

        for (var i = 0; i < this.props.ratingValue; i++) {
            ratingArr.push(<i className="fa fa-star" key={i}></i>);
        }

        for(let i = 0; i < 5 - this.props.ratingValue; i++) {
            unRatingArr.push(<i className="fa fa-star-o" key={i}></i>);
        }

        return (
            <div className="rating" key={this.props.ratingValue + Math.random(0, 99999)}>
                {ratingArr}
                {unRatingArr}
            </div>
        );
    }
}