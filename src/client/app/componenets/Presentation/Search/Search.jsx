import React from 'react';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';

import {red500, greenA200} from 'material-ui/styles/colors';

const SearchIconStyle = {
    color: {red500},
    hoverColor: {greenA200},
    marginRight: "15px",
    width: 30,
    height: 30,
};

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-container col-xs-12 col-sm-10 col-md-7 col-lg-7">
                <div className="row">
                    <div className="search-wrapper col-xs-12 col-sm-11">
                        <AutoComplete
                            hintText="Search Address"
                            dataSource={this.props.dataSource}
                            dataSourceConfig={{
                                text: 'text',
                                value: 'value',
                            }}
                            listStyle={{maxHeight: 200, overflow: 'auto'}}
                            onUpdateInput={this.props.handleUpdateInput}
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
}