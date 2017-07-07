import React from 'react';
import Rating from './rating.jsx'

class Ratings extends React.Component {
    render() {



        if(this.props.ratings != undefined) {
            return (
                <div className="container bg">
                    <div className="row">

                        {this.props.ratings.map(rating =>
                        <div key={rating.value} className="col-6 rating-block">
                            <div>{rating.description}</div>
                            <Rating ratingValue={rating.value} key={rating.value}/>
                        </div>
                        )}
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default Ratings;