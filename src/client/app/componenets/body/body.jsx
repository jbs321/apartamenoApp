import React from 'react';
import BuildingCollection from "../building/building-manager.jsx";
import Search from '../search.jsx'

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="col-4 offset-4">
                        <Search />
                    </div>
                    <hr/>

                    <BuildingCollection buildings={this.props.buildings}/>
                </div>
            </div>
        );
    }
}

export default Body;