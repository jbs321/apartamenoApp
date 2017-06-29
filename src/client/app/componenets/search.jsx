import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
    color: {red500},
    hoverColor: {greenA200},
    marginRight: "15px",
    width: 30,
    height: 30,
};

const dataSource1 = [
    {
        text: 'text-value1',
        value: (
            <MenuItem
                primaryText="text-value1"
                secondaryText="&#9786;"
            />
        ),
    },
    {
        text: 'text-value2',
        value: (
            <MenuItem
                primaryText="text-value2"
                secondaryText="&#9786;"
            />
        ),
    },
];

const dataSourceConfig = {
    text: 'text',
    value: 'value',
};

class Search extends React.Component {

    handleUpdateInput(searchText) {
        console.log(searchText);
    }

    render() {
        return (
            <div className="search-container col-xs-12 col-sm-10 col-md-7 col-lg-7">
                <div className="row">
                    <div className="search-wrapper col-xs-12 col-sm-11">
                        <AutoComplete
                            hintText="Search Address"
                            dataSource={dataSource1}
                            dataSourceConfig={dataSourceConfig}
                            onUpdateInput={this.handleUpdateInput}
                            animated={false}
                            fullWidth={true}
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