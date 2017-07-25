import React from 'react';
import Header from "../Header/header.jsx";
import BuildingCollection from '../BuildingCollection.jsx';

export default class Body extends React.Component {
    render() {
        console.log(this);
        return (
            <div className="body">
                <Header {...this.props} auth={this.props.auth}/>
                <div className="container">
                    <div className="main main-raised">
                        Most Active
                        <hr/>
                        <BuildingCollection/>
                        <br/>
                        Top Rated
                        <hr/>
                        <BuildingCollection/>
                        <br/>

                        New Apartments
                        <hr/>
                        <BuildingCollection/>
                    </div>
                </div>
            </div>
        );
    }
}