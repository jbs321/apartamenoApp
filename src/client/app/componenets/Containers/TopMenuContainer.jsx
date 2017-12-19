import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {LEGGED_MENU_ITEMS} from '../Variables/HeaderVariables';
import Auth from '../Auth/Auth.jsx'
import history from "../../History.jsx";
import {connect} from 'react-redux';
import {fetchUserProfile} from '../../actions/UserProfileAction';

const MenuItemStyle = {horizontal: 'left', vertical: 'top'};

const NotLoggedButton = (props) => (
    <IconMenu
        onItemTouchTap={props.handleClick}
        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
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
        iconButtonElement={<IconButton style={{width: "100px"}}><Avatar src={props.avatar}
                                                                        size={30}/></IconButton>}
        anchorOrigin={MenuItemStyle}
        targetOrigin={MenuItemStyle}>
        <MenuItem key={LEGGED_MENU_ITEMS.HOME} primaryText="Home"/>
        <MenuItem key={LEGGED_MENU_ITEMS.PANEL} primaryText="Panel"/>
        <MenuItem key={LEGGED_MENU_ITEMS.PROFILE} primaryText="Profile"/>
        <MenuItem key={LEGGED_MENU_ITEMS.LOGOUT} primaryText="Log Out"/>
        <MenuItem key={LEGGED_MENU_ITEMS.HELP} primaryText="Help"/>
    </IconMenu>
);

function handleNavigation(event, child) {
    let key = parseInt(child.key);

    switch (key) {
        case LEGGED_MENU_ITEMS.HOME:
            history.replace('/');
            break;
        case LEGGED_MENU_ITEMS.LOGIN:
            history.replace('/login');
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
        case LEGGED_MENU_ITEMS.PANEL:
            history.replace('/panel');
            break;
        default:
            console.log(key);
            break;
    }
}

class TopMenuContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUserProfile();
    }


    render() {
        const avatar = "/public/img/profileImg.png";
        const {user} = this.props;
        const loggedBtn = <LoggedButton handleClick={handleNavigation} avatar={avatar}/>;
        const notLoggedBtn = <NotLoggedButton handleClick={handleNavigation}/>;

        console.log(user);

        const menuButton = user ? loggedBtn : notLoggedBtn;
        const style = {background: 'inherit'};

        return (<AppBar showMenuIconButton={false} style={style} iconElementRight={menuButton}/>);
    }
}

function mapStateToProps({user}) {
    return {user};
}

export default connect(mapStateToProps, {fetchUserProfile})(TopMenuContainer);