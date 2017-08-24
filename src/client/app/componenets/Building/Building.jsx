import React from 'react';
import axios from 'axios';
import Rating from "../Rating/Rating.jsx";
import {Rate} from "../Rating/Rate";
import GoogleImg from "../GoogleImg.jsx";
import {BuildingData} from "./Types/BuildingData";
import Auth from '../Auth/Auth.jsx';

export default class Building extends React.Component {

    constructor(props) {
        super(props);

        this.state = new BuildingData(this.props.match.params.address);
    }

    componentDidMount() {
        this.findAddress(this.props.match.params.address);
    }


    render() {
        let ratings = [];

        if (this.state._ratings !== undefined) {
            let building_id = this.state._id;

            ratings = this.state._ratings.map((rate, index) =>
                <Rating key={index}
                        rating_id={rate.id}
                        rating={rate.value}
                        label={rate.label}
                        readOnly={Auth.isAuth()}
                        building_id={building_id}/>);
        }

        return (
                <div className="container-fluid">
                    {/*<GoogleImg src={this.state.address}/>*/}

                    <div className="col-12">
                        <h3 className="address">{this.state._address}</h3>
                    </div>

                    <div className="col-12 ratings-wrapper">
                        {ratings}
                    </div>
                </div>
        );
    }

    /**
     * find address    <div classhe API with string representing a full address.
     * @param addressDescription string - full address
     */
    findAddress(addressDescription) {
        let url = process.env.ENV.API_URL + "/search/query/firstorfail/" + addressDescription;

        axios.get(url)
            .then(result => {
                if (result.data !== undefined) {
                    let buildingData = BuildingData.createFromDataSet(result.data);
                    this.setState(buildingData);
                }
            })
            .catch(function (err) {
                console.error(err);
            });
    }
}