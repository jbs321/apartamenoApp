import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import BuildingCollection from "../building/building-manager.jsx";

class Body extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="body">
                <div className="container">
                    <div className="col-4 offset-4">
                        <Autocomplete/>
                    </div>
                    <hr/>

                    <BuildingCollection buildings={this.props.buildings}/>
                </div>
            </div>
        );
    }
}

export default Body;