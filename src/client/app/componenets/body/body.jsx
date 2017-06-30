import React from 'react';
import BuildingCollection from '../BuildingCollection.jsx';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="main main-raised">
                        <BuildingCollection buildings={this.props.buildings}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;