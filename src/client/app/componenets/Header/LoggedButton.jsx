import React from 'react';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {LEGGED_MENU_ITEMS} from "./Variables.jsx";

export default class LoggedButton extends React.Component {
    render() {
        let profileLocal = {
            picture: "https://png.icons8.com/material/1600/00897B/cat-profile"
        };

        return (
            <IconMenu targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      onItemTouchTap={this.props.itemHandle}
                      iconButtonElement={
                          <IconButton className="loginButton" style={{width: 80}}>
                              <Avatar src={profileLocal.picture} size={30}/>
                              <MoreVertIcon style={{float: 'right'}}/>
                          </IconButton>
                      }>
                <MenuItem key={LEGGED_MENU_ITEMS.PROFILE} primaryText="Profile"/>
                <MenuItem key={LEGGED_MENU_ITEMS.LOGOUT} primaryText="Sign out"/>
            </IconMenu>);
    }
};