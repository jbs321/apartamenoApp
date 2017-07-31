import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import {red500, greenA200} from 'material-ui/styles/colors';
import {SearchResultKeys} from "./Variables.jsx";
import history from "../../History.jsx"

const SearchIconStyle = {
    color: {red500},
    hoverColor: {greenA200},
    marginRight: "15px",
    width: 30,
    height: 30,
};

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            isAxiosOn: false,
            axiosRequest: null,
        };

        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    getImage(address) {

        let addressDescription = address[SearchResultKeys.ADDRESS_KEY];

        return (
            <Link to={{
                pathname: '/building/' + addressDescription,
                props: {address: address}
            }}>
                <span>{addressDescription}</span>
            </Link>
        )
    }

    handleUpdateInput(searchText = "") {

        this.syncRequests();

        if (searchText !== "" && searchText !== undefined) {
            this.state.axiosRequest = axios.get(process.env.ENV.API_URL + "/google-places/" + searchText)
                .then(res => {
                    if (res.data.length > 0) {
                        this.setState({
                            dataSource: res.data
                                .map(address => {
                                    return {
                                        text: address[SearchResultKeys.ADDRESS_KEY],
                                        value: (<MenuItem primaryText={address[SearchResultKeys.ADDRESS_KEY]}
                                                          onTouchTap={() => {
                                                              history.push({
                                                                  pathname: '/building/' + address[SearchResultKeys.ADDRESS_KEY],
                                                                  state: {address: address}
                                                              })
                                                          }
                                        }/>)
                                    }
                                })
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <div className="search-container col-xs-12 col-sm-10 col-md-7 col-lg-7">
                <div className="row">
                    <div className="search-wrapper col-xs-12 col-sm-11">
                        <AutoComplete
                            hintText="Search Address"
                            dataSource={this.state.dataSource}
                            dataSourceConfig={{
                                text: 'text',
                                value: 'value',
                            }}
                            listStyle={{maxHeight: 200, overflow: 'auto'}}
                            onUpdateInput={this.handleUpdateInput}
                            animated={true}
                            fullWidth={true}
                            filter={AutoComplete.noFilter}
                        />
                    </div>
                    <div className="search-icon-wrapper col-1 d-flex align-items-center justify-content-end">
                        <SearchIcon style={SearchIconStyle}/>
                    </div>
                </div>
            </div>
        );
    }

    syncRequests() {
        if (this.state.isAxiosOn) {
            this.state.axiosRequest.abort();
            this.state.isAxiosOn = false;
        }
    }
}