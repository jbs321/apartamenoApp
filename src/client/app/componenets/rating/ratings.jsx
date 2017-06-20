import React from 'react';
import Rating from './rating.jsx'

class Ratings extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    {this.props.ratings.map(rating =>
                        <div key={rating.id} className="col-6 rating-block">
                            <Rating/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Ratings;