import React from 'react';
import Rating from './rating.jsx'

class Ratings extends React.Component {
    render() {
        if(this.props.ratings == undefined) {
            return null;
        }

        return (
            <div className="container bg">
                <div className="row">
                    {this.props.ratings.map(rating =>
                        <div key={rating.id} className="col-6 rating-block">
                            <div>{rating.description}</div>
                            <Rating ratingValue={rating.value}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Ratings;