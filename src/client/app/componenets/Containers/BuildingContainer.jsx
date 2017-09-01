import React from 'react';
import axios from 'axios';
import {BuildingData} from "../../componenets/DataTypes/BuildingData";
import Auth from "../Auth/Auth.jsx";
import Building from "../Presentation/Building/Building.jsx";

export default class BuildingContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state       = new BuildingData(this.props.address);
        this.updateRate  = this.updateRate.bind(this);
        this.isReadOnly  = this.isReadOnly.bind(this);
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
        return (<Building ratings={this.state._ratings}
                          address={this.props.address}
                          updateRate={this.updateRate}
                          isReadOnly={this.isReadOnly}/>);
    }

    updateRate(rate, newValue) {
        console.log(rate, newValue);
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