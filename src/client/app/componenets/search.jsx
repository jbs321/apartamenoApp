import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {red500, greenA200} from 'material-ui/styles/colors';
import RestaurantIcon from 'material-ui/svg-icons/maps/restaurant';
import HomeIcon from 'material-ui/svg-icons/action/home';
import StoreIcon from 'material-ui/svg-icons/maps/store-mall-directory';
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

        let icon = this.getIcon(address.types[0]);

        return (
            <div className="list-item">
               <img src={'https://maps.googleapis.com/maps/api/streetview?key=AIzaSyDG5btrxQfiJvOXQ-dVIrUiVjCD0JCPekk&size=50x50&location=' + address.address} height="200px" />

                <Link to={{pathname: '/building/' + address.id.slice(1), props: {name:"safas"}}}  className="building-play">{address.formatted_address}</Link>


                <span className="icons">{icon}</span>
            </div>
        )
    }

    getIcon(description) {

        switch (description) {
            case "home":
                return (<HomeIcon />);
            case "restaurant":
                return (<RestaurantIcon />);
            case "cafe":
                return (<RestaurantIcon />);
            case "store":
                return (<StoreIcon />);
            default:
                return (<HomeIcon />);
                break;
        }
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