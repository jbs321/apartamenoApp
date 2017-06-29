import React from 'react';
import BuildingCollection from "../building/building-manager.jsx";
import Search from '../search.jsx'
import GridListExampleSingleLine from '../GridListExampleSingleLine.jsx';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    {/*<BuildingCollection buildings={this.props.buildings}/>*/}
                    <GridListExampleSingleLine />
                </div>
            </div>
        );
    }
}

export default Body;