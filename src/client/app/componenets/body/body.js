import React, {Component} from 'react';
import FetchDemo from '../building/building-manager';

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
                <FetchDemo/>
            </div>
        );
    }
}

export default Body;