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
                        <div className="building col-4 mx-auto p-2" key={building.id}>
                            <img src={building.imgSrc} />
                            <b>{building.address}</b>
                            <div>Has {building.comments.length} Comments</div>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FetchDemo;