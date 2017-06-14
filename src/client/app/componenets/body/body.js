import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import FetchDemo from "../building/building-manager";

class Body extends Component {
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
        const tempature = this.state.temperature;
        return (
            <div className="body">
                <div className="container">
                    <div className="col-4 offset-4"><Autocomplete/></div>
                    <hr/>
                    <FetchDemo/>
                </div>
            </div>
        );
    }
}

export default Body;