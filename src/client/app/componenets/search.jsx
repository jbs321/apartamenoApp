import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {red500, greenA200} from 'material-ui/styles/colors';

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
            dataSource: [
                {
                    text: "a",
                    value: "asdasds"
                }
            ]
        };

        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput(searchText) {

        this.setState({
            dataSource: [
                {
                    text: "a",
                    value: (
                        <Card><img src="https://maps.googleapis.com/maps/api/streetview?key=AIzaSyDG5btrxQfiJvOXQ-dVIrUiVjCD0JCPekk&size=300x300&location=starbucks, vancouver, bc" />) </Card>
                    )
                }
            ]
        });

        // axios.get(`http://apartamento.com/public/address.json`)
        //     .then(res => {
        //         console.log(res.data.results);
        //
        //         let google = "https://maps.googleapis.com/maps/api/streetview?key=AIzaSyDG5btrxQfiJvOXQ-dVIrUiVjCD0JCPekk&size=300x300&location="
        //
        //         // const buildings = res.formatted_address;
        //         this.setState({
        //             dataSource: [
        //                 {
        //                     id: 1,
        //                     address: (
        //                         <MenuItem
        //                             primaryText="a"
        //                             secondaryText="&#9786;"
        //                         />
        //                     )
        //                 }
        //             ]
        //         });
        //     });
    }

    render() {
        return (
            <div className="search-container col-xs-12 col-sm-10 col-md-7 col-lg-7">
                <div className="row">
                    <div className="search-wrapper col-xs-12 col-sm-11">
                        <AutoComplete
                            hintText="Search Address"
                            dataSource={this.state.dataSource}

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