import React from 'react';
import BuildingCollection from '../BuildingCollection.jsx';

export default class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="main main-raised">
                        Most Active
                        <hr/>
                        <BuildingCollection buildings={this.props.buildings}/>
                        <br/>
                        Top Rated
                        <hr/>
                        <BuildingCollection buildings={this.props.buildings}/>
                        <br/>

                        New Apartments
                        <hr/>
                        <BuildingCollection buildings={this.props.buildings}/>
                    </div>
                </div>
            </div>
        );
    }
}