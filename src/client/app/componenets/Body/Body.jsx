import React from 'react';
import BuildingCollection from '../BuildingCollection.jsx';
import HeaderContainer from '../Header/HeaderContainer.jsx';

export default class Body extends React.Component {
    render() {
        return (
                <div className="container-fluid" style={{padding:0}}>
                    <HeaderContainer {...this.props} auth={this.props.auth}/>
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