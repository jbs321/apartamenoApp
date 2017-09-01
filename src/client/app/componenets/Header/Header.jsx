import React from 'react';

import Search from "../Search/Search.jsx";
import history from "../../History.jsx"
import {LEGGED_MENU_ITEMS} from "./Variables.jsx";
import Auth from '../Auth/Auth.jsx';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.logged = Auth.isAuth();
    }

    render() {
        return (
                <header className="header">
                    <div className="header-banner"></div>

                    <div className="header-spacer container">
                        <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Apartamento</h1>
                        <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Find all you need about Apartments, Buildings
                            and more.</h2>
                        <Search {...this.props}/>
                    </div>
                </header>
        );
    }
}