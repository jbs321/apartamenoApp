import React from 'react';
import axios from 'axios';
// import ToolbarExamplesSimple from './ToolbarExamplesSimple.jsx';
import TopMenuContainer from '../../Containers/TopMenuContainer.jsx'
import {BuildingData} from "../../DataTypes/BuildingData";
import Building from "../../Presentation/Building/Building.jsx";
import {connect} from 'react-redux';

class BuildingPage extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     if (this.props.match && this.props.match.params) {
    //         const {address}  = this.props.match.params;
    //     }
    //
    //     console.log(this);
    //     this.state       = new BuildingData(this.props.search);
    //     this.findAddress = this.findAddress.bind(this);
    // }

    // componentDidMount() {
    //     // this.findAddress(this.props.search);
    // }

    // /**
    //  * find address    <div classhe API with string representing a full address.
    //  * @param addressDescription string - full address
    //  */
    // findAddress(addressDescription) {
    //     let url = process.env.ENV.API_URL + "/search/query/firstorfail/" + addressDescription;
    //
    //     axios.get(url)
    //         .then(result => {
    //             if (result.data !== undefined) {
    //                 let buildingData = BuildingData.createFromDataSet(result.data);
    //                 this.setState(buildingData);
    //             }
    //         })
    //         .catch(function (err) {
    //             console.error(err);
    //         });
    // }

    render() {
        console.log(this);
        return null;
        return (
            <div className="page building-page">
                <TopMenuContainer/>
                {/*<ToolbarExamplesSimple address={this.props.address} buildingId={this.state._id}/>*/}
                <Building address={this.props.address} building={this.state}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps, null)(BuildingPage);