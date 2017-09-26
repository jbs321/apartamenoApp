import React from 'react';
import axios from 'axios';
import ToolBar from './ToolBar.jsx';
import TopMenuContainer from '../../Containers/TopMenuContainer.jsx'
import {BuildingData} from "../../DataTypes/BuildingData";
import Building from "../../Presentation/Building/Building.jsx";

export default class BuildingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state          = {};
        this.state.building = new BuildingData(props.address);
        this.findAddress    = this.findAddress.bind(this);
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
                    this.setState(buildingData);
                }
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="page building-page">
                <TopMenuContainer/>
                <ToolBar address={this.props.address} building={this.state}/>
                <Building address={this.props.address} building={this.state}/>
            </div>
        );
    }
}