import React, {Component} from 'react';
import Toggle from "../form/toggle/toggle";

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
                <Toggle val/>
            </div>
        );
    }
}

export default Body;