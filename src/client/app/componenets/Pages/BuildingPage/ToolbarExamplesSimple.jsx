import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import RegisterButton from '../../Presentation/Building/RegisterButton.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

    handleChange(event, index, value) {
        this.setState({value})
    };

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={1} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text={this.props.address} />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RegisterButton label="REGISTER TO BUILDING" primary={true} addressId={this.props.buildingId}/>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}