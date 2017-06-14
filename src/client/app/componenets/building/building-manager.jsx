import React, {Component} from 'react';
import axios from 'axios';

class FetchDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buildings: []
        };
    }

    componentDidMount() {
        axios.get(`http://dev.api.apartamento.webtosuccess.ca/api/buildings`)
            .then(res => {
                const buildings = res.data;
                this.setState({buildings});
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.buildings.map(building =>
                        <div key={building.id} className="building col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto">
                            <div className="building-row">
                                <img src={building.imgSrc}/>
                                <div className="building-body">
                                    <a href="#" className="building-play"></a>
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

export default FetchDemo;