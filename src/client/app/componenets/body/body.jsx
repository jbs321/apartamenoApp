import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import BuildingCollection from "../building/building-manager.jsx";

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="col-4 offset-4">
                        <Autocomplete/>
                    </div>
                    <hr/>
                    <BuildingCollection/>
                </div>
            </div>
        );
    }
}

export default Body;