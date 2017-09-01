import React from 'react';
import axios from 'axios';
import {BuildingData} from '../../DataTypes/BuildingData';
import MapsImage from "../../Presentation/MapsImage.jsx";
import GoogleImg from "../../Presentation/GoogleImg.jsx";
import RatingSection from "../../Presentation/Rating/RatingSection.jsx";
import TopMenuContainer from "../../Containers/TopMenuContainer.jsx";


export default class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state       = new BuildingData(this.props.address);

        this.findAddress = this.findAddress.bind(this);
        this.updateRate  = this.updateRate.bind(this);
        this.isReadOnly  = this.isReadOnly.bind(this);
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

    updateRate(event) {
        if(this.props.updateRate !== undefined){
            this.props.updateRate(event);
        }
    }

    isReadOnly(event) {
        if(this.props.isReadOnly !== undefined){
            this.props.isReadOnly(event);
        }
    }

    render() {

        console.log(this);

        return (
            <div className="building container-fluid" style={{padding: 0}}>
                <TopMenuContainer/>

                <div className="container-fluid building-page" style={{padding: 0}}>
                    <div className="img-section">
                        <GoogleImg src={this.props.address}/>
                        <MapsImage address={this.props.address} width={300} height={300} zDepth={3}/>
                    </div>

                    <div className="col-12">
                        <h3 className="address">{this.props.address}</h3>
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

                <div className="col-12 ratings-wrapper">
                    {this.props.ratings}
                </div>
            </div>
        );
    }
}