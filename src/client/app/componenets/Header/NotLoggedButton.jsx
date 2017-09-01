import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {LEGGED_MENU_ITEMS} from "./Variables.jsx";


export default class NotLoggedButton extends React.Component {
    render() {
        return (
            <IconMenu targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      iconButtonElement={
                          <IconButton><MoreVertIcon/></IconButton>
                      }
                      onItemTouchTap={this.props.itemHandle}>
                <MenuItem key={LEGGED_MENU_ITEMS.LOGIN} primaryText="Login"/>
                <MenuItem key={LEGGED_MENU_ITEMS.REGISTER} primaryText="Register"/>
            </IconMenu>);
    }
}