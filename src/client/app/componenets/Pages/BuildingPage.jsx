import React from 'react';
import BuildingContainer from "../Containers/BuildingContainer.jsx";

export default class BuildingPage extends React.Component {

    render() {
        return (
            <div className="page building-page">
                <BuildingContainer address={this.props.address}/>
            </div>
        );
    }
}