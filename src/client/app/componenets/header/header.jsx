import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Search from "../search.jsx";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <header className="header">
                <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={{"background": "inherit", color: "green"}}
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>

                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}>
                    <AppBar title="AppBar"  showMenuIconButton={false}/>
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
