import React from 'react';
import axios from 'axios';
import {BuildingData} from "../../componenets/DataTypes/BuildingData";
import Auth from "../Auth/Auth.jsx";
import Building from "../Presentation/Building/Building.jsx";

export default class BuildingContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state          = {};
        this.state.building = new BuildingData(this.props.address);
        this.findAddress = this.findAddress.bind(this);
    }

    componentDidMount() {
        this.findAddress(this.props.address);
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
                    this.setState({
                        building: buildingData
                    });
                }
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    render() {
        return (<Building address={this.props.address} building={this.state.building}/>);
    }
}