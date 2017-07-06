import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {red500, greenA200} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const iconStyles = {
    color: {red500},
    hoverColor: {greenA200},
    marginRight: "15px",
    width: 30,
    height: 30,
};

const dataSourceConfig = {
    text: 'text',
    value: 'value',
};

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        };

        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    getImage(address) {
        return (
            <Link to={{pathname: '/building/' + this.getRandomInt(1, 40), props: {name:"safas"}}}>
                <div className="list-item">
                    <img src={address.icon} height="200px" />
                    <span>{address.formatted_address}</span>
                </div>
            </Link>
        )
    }

    handleUpdateInput(searchText) {
        axios.get(`http://apartamento.ca/public/address.json`)
            .then(res => {
                let google = "https://maps.googleapis.com/maps/api/streetview?key=AIzaSyDG5btrxQfiJvOXQ-dVIrUiVjCD0JCPekk&size=300x300&location="

                this.setState({
                    dataSource: res.data.results
                        .filter(address => address.formatted_address.includes(searchText))
                        .map(address => {
                        return {
                            text: address.formatted_address,
                            value:  (<MenuItem children={this.getImage(address)} />)
                        }
                    })
                });
            });
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    render() {
        return (
            <div className="search-container col-xs-12 col-sm-10 col-md-7 col-lg-7">
                <div className="row">
                    <div className="search-wrapper col-xs-12 col-sm-11">
                        <AutoComplete
                            hintText="Search Address"
                            dataSource={this.state.dataSource}
                            dataSourceConfig={this.dataSourceConfig}
                            listStyle={{ maxHeight: 200, overflow: 'auto' }}
                            onUpdateInput={this.handleUpdateInput}
                            animated={false}
                            fullWidth={true}
                            filter={AutoComplete.noFilter}
                        />
                    </div>
                    <div className="search-icon-wrapper col-1 d-flex align-items-center justify-content-end">
                        <SearchIcon style={iconStyles}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;