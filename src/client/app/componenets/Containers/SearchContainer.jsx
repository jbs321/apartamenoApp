import React from 'react';
import Search from "../Presentation/Search/Search.jsx";
import {SearchResultKeys} from "../../componenets/Variables/SearchVariables";
import MenuItem from 'material-ui/MenuItem';
import history from "../../../app/History.jsx"
import axios from 'axios';


export default class SearchContainer extends React.Component {

    constructor() {
        super();

        this.state = {};
        this.state.dataSource = [];
        this.state.isAxiosOn = false;
        this.state.axiosRequest = null;

        this.getAddress = this.getAddress.bind(this);
        this.syncRequests = this.syncRequests.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }


    /**
     * Event handler for the Search object
     * @param searchText
     * @returns {string}
     */
    handleUpdateInput(searchText) {
        if (searchText === "" || searchText === undefined) {
            return "Not Found";
        }

        this.getAddress(result => {
            this.setState({
                dataSource: this.mapToMenuItems(result)
            });
        }, searchText);
    }

    /**
     * Return MenuItem Object for each address object from api
     * @param addressArr
     * @returns {Array}
     */
    mapToMenuItems(addressArr) {
        if (!addressArr || addressArr === undefined) {
            return [];
        }

        return addressArr.map(address => {
            //Textual representation for address object
            let formattedAddress = address[SearchResultKeys.ADDRESS_KEY];

            return {
                text: formattedAddress,
                value: (<MenuItem primaryText={formattedAddress}
                                  onTouchTap={this.onTouchTapMenuItem.bind(address)}/>)
            };
        });
    }

    /**
     * Return Address Objects from api
     * @param callback
     * @param searchText
     */
    getAddress(callback, searchText) {
        //handle sync for previous requests
        this.syncRequests();

        this.state.axiosRequest =
            axios.get(process.env.ENV.API_URL + "/places/search/" + searchText)
                .then(result => {
                    callback(result.data);
                });
    }

    /**
     * Navigate to address page when menu item is selected
     * @param address
     */
    onTouchTapMenuItem() {
        //Textual representation for address object
        let address = this[SearchResultKeys.ADDRESS_KEY];

        history.push({
            pathname: '/building/' + address,
            state: {address: address}
        });
    }

    /**
     * Make sure to abort previous requests when new one starts
     */
    syncRequests() {
        if (this.state.isAxiosOn) {
            this.state.axiosRequest.abort();
            this.state.isAxiosOn = false;
        }
    }

    render() {
        return <Search handleUpdateInput={this.handleUpdateInput} dataSource={this.state.dataSource}/>
    }
}