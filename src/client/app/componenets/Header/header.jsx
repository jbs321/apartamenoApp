import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Search from "../search.jsx";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Logged = (props) => (
    <IconMenu {...props}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
              }>
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

const NotLogged = (props) => (
    <IconMenu {...props}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
              }>
        <MenuItem primaryText="Log In"/>
    </IconMenu>
);

export default class Header extends Component {
    constructor(props) {
        super(props);

        const { isAuthenticated } = this.props.auth;


        this.state = {
            open: false,
            logged: isAuthenticated(),
        };
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <header className="header">
                <AppBar style={{"background": "inherit", color: "green"}}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        iconElementRight={this.state.logged ?  <Logged/>: <NotLogged/>}/>

                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}>
                    <AppBar title="AppBar" showMenuIconButton={false}/>
                    <MenuItem>Home</MenuItem>
                </Drawer>

                <div className="header-banner"></div>

                <div className="header-spacer container">
                    <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Apartamento</h1>
                    <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Find all you need about Apartments, Buildings
                        and more.</h2>
                    <Search buildings={this.props.buildings}/>
                </div>
            </header>
        );
    }
}