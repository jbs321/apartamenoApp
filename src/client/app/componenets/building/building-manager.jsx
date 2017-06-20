import React from 'react';
import { Link } from 'react-router-dom';

class BuildingCollection extends React.Component {
    //TODO::add a Building Component inside instead using a list
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.buildings.map(building =>
                        <div key={building.id} className="building col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto">
                            <div className="building-row">
                                <img src={building.imgSrc}/>
                                <div className="building-body">
                                    <Link to={{pathname: '/building/' + building.id, props: {name:"safas"}}}  className="building-play"></Link>
                                    <p className="address">{building.address}</p>
                                    <div className="comment">
                                        <b>{building.comments[0].user.first_name} {building.comments[0].user.last_name} wrote:</b>
                                        <blockquote>{building.comments[0].description}</blockquote>
                                    </div>
                                </div>
                                <div className="building-footer"><a href="#">{building.comments.length} Comments</a></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BuildingCollection;