import React from 'react';
import Ratings from '../rating/ratings.jsx'
import Comment from '../comment/comment.jsx'

class Building extends React.Component {
    render() {

        let building = this.props.buildings.filter((obj) => obj.id == this.props.match.params.id)[0];

        return (
            <div className="container-fluid no-pad building-page">
                <div className="row">
                    <div className="col-12">
                        <img src={building.imgSrc} className="img-responsive"/>
                    </div>
                    <div className="col-12">
                        <h3 className="address">{building.address}</h3>
                    </div>

                    <div className="col-12 ratings-wrapper">
                        <Ratings ratings={building.ratings}/>
                    </div>

                    <div className="col-12 comments-wrapper">
                        <Comment comments={building.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Building;