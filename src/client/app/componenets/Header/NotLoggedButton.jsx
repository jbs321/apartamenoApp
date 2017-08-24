import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class NotLoggedButton extends React.Component {
    render() {
        return (
            <IconMenu targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      iconButtonElement={
                          <IconButton><MoreVertIcon/></IconButton>
                      }
                      onItemTouchTap={this.props.auth.login.bind(this)}>
                <MenuItem primaryText="Log In/Sign Up"/>
            </IconMenu>);
    }
}