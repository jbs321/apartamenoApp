import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Search from "../search.jsx";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" style={{"background": "inherit", color: "green"}} />
                <div className="header-banner"></div>
                <div className="header-spacer container">
                    <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Apartamento</h1>
                    <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Find all you need about Apartments, Buildings and more.</h2>
                    <Search buildings={this.props.buildings}/>
                </div>
            </header>
        );
    }
}

export default Header;
