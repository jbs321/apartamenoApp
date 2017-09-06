import React from 'react';
import HeaderContainer from "../Containers/HeaderContainer.jsx";
import BuildingCollection from "../BuildingCollection.jsx";

export default class HomePage extends React.Component {
    render() {
        return (
                <div className="page home-page body-container container-fluid" style={{padding:0}}>

                    <HeaderContainer />

                    <div className="main main-raised">
                        Most Active
                        <hr/>
                        <BuildingCollection/>
                    </div>
                </div>
        );
    }
}