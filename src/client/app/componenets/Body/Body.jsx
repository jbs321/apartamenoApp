import React from 'react';
import BuildingCollection from '../BuildingCollection.jsx';

export default class Body extends React.Component {
    render() {
        return (
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
        );
    }
}