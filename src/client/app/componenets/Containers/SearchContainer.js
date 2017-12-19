import React from 'react';
import Search from "../Presentation/Search/Search.jsx";
import {SearchResultKeys} from "../../componenets/Variables/SearchVariables";
import MenuItem from 'material-ui/MenuItem';
import history from "../../../app/History.jsx"
import {fetchSearchResults} from '../../actions/searchAction';
import {connect} from 'react-redux';
import _ from 'lodash';

class SearchContainer extends React.Component {
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
                value: (<MenuItem
                            primaryText={formattedAddress}
                            onTouchTap={() => {
                                history.push('/building/' + formattedAddress);
                            }}/>)
            };
        });
    }

    render() {
        const {search, fetchSearchResults} = this.props;
        //throttle every 300 ms
        const searchResults = _.debounce((searchTerm) => {
            fetchSearchResults(searchTerm)
        }, 300);
        return <Search handleUpdateInput={searchResults} dataSource={this.mapToMenuItems(search)}/>;
    }
}

function mapStateToProps({search}) {
    return {search};
}

export default connect(mapStateToProps, {fetchSearchResults})(SearchContainer);