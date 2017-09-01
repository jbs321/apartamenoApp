import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {LEGGED_MENU_ITEMS} from './Variables.jsx';
import Auth from '../Auth/Auth.jsx'
import history from "../../History.jsx";

const MenuItemStyle = {horizontal: 'left', vertical: 'top'};

const NotLoggedButton = (props) => (
    <IconMenu
        onItemTouchTap={props.handleClick}
        iconButtonElement={<IconButton> <MoreVertIcon /></IconButton>}
        anchorOrigin={MenuItemStyle}
        targetOrigin={MenuItemStyle}>
        <MenuItem key={LEGGED_MENU_ITEMS.HOME} primaryText="Home"/>
        <MenuItem key={LEGGED_MENU_ITEMS.LOGIN} primaryText="Log in"/>
        <MenuItem key={LEGGED_MENU_ITEMS.REGISTER} primaryText="Register"/>
        <MenuItem key={LEGGED_MENU_ITEMS.HELP} primaryText="Help"/>
    </IconMenu>
);

const LoggedButton = (props) => (
    <IconMenu
        onItemTouchTap={props.handleClick}
        iconButtonElement={<IconButton style={{width:"100px"}}><Avatar src="/public/img/profileImg.png" size={30}/></IconButton>}
        anchorOrigin={MenuItemStyle}
        targetOrigin={MenuItemStyle}>
        <MenuItem key={LEGGED_MENU_ITEMS.HOME} primaryText="Home"/>
        <MenuItem key={LEGGED_MENU_ITEMS.PROFILE} primaryText="Profile"/>
        <MenuItem key={LEGGED_MENU_ITEMS.LOGOUT} primaryText="Log Out"/>
        <MenuItem key={LEGGED_MENU_ITEMS.HELP} primaryText="Help"/>
    </IconMenu>
);

export default class TopMenuContainer extends React.Component {
    constructor() {
        super();

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(event, child) {
        let key = parseInt(child.key);

        switch (key) {
            case LEGGED_MENU_ITEMS.HOME:
                history.replace('/body');
                break;
            case LEGGED_MENU_ITEMS.LOGIN:
                Auth.login();
                break;
            case LEGGED_MENU_ITEMS.LOGOUT:
                Auth.logout();
                break;
            case LEGGED_MENU_ITEMS.PROFILE:
                history.replace('/profile');
                break;
            case LEGGED_MENU_ITEMS.REGISTER:
                history.replace('/register');
                break;
            case LEGGED_MENU_ITEMS.HELP:
                console.log('hahaha');
                break;
            default:
                console.log(key);
                break;
        }
    }

    render() {
        return (
            <AppBar showMenuIconButton={false}
                    style={{background: 'inherit'}}
                    iconElementRight={
                        Auth.isAuth()
                            ? <LoggedButton handleClick={this.handleNavigation}/>
                            : <NotLoggedButton handleClick={this.handleNavigation}/>
                    }
            />);
    }
}