import React from 'react';
import axios from 'axios';
import RatingSection from "../Rating/RatingSection.jsx";
import GoogleImg from "../GoogleImg.jsx";
import {BuildingData} from "./Types/BuildingData";
import Auth from '../Auth/Auth.jsx';

export default class Building extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _address: "",
            _ratings: [],
        };

        this.updateRate = this.updateRate.bind(this);
        this.findAddress = this.findAddress.bind(this);
    }

    componentWillMount() {
        this.findAddress(this.props.match.params.address);
    }

    isReadOnly() {
        let flag = true;

        if (this.state.readOnly !== undefined) {
            flag = this.state._readOnly;
        } else {
            flag = !Auth.isAuth();
        }

        return flag;
    }

    render() {
        return (
            <div className="container-fluid">
                {/*<GoogleImg src={this.state.address}/>*/}

                <div className="col-12">
                    <h3 className="address">{this.state._address}</h3>
                </div>

                <div className="col-12 ratings-wrapper">
                    <RatingSection readOnly={this.isReadOnly} handleClick={this.updateRate}
                                   ratings={this.state._ratings} style={{
                        margin: 0,
                        padding: "20px",
                        background: "#efefef",
                    }}/>
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
        let that = this;

        axios.get(url)
            .then(result => {
                if (result.data !== undefined) {
                    let buildingData = BuildingData.createFromDataSet(result.data);
                    that.setState(buildingData);
                }
            }).catch(function (err) {
            console.error(err);
        });
    }

    updateRate(rate, newValue) {
        console.log(this);
        let buildingId = this.state._id;

        axios.put('/building/' + buildingId + '/rating/' + rate._id, {
            building_id: buildingId,
            rating_id: rate._id,
            user_id: 2,
            rate: newValue
        }, {
            baseURL: process.env.ENV.API_URL,
            responseType: 'json'
        }).then(((result) => {
            console.log(result);
        })).catch((err) => {
            if (err.response) {
                alert(err.response.data, err.response.status);
            }
        });

    }
}