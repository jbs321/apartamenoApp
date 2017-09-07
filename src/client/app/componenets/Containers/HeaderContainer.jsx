import React from 'react';
import Auth from '../Auth/Auth.jsx';
import TopMenuContainer from './TopMenuContainer.jsx';
import SearchContainer from "./SearchContainer.jsx";

export default class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.logged = Auth.isAuth();
    }

    render() {
        return (
                <header className="header">
                    <TopMenuContainer/>

                    <div className="header-banner"></div>

                    <div className="header-spacer container">
                        <h1 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Apartamento</h1>
                        <h2 className="col-xs-12 col-sm-10 col-md-10 col-lg-7">Find all you need about Apartments, Buildings
                            and more.</h2>
                        <SearchContainer {...this.props}/>
                    </div>
                </header>
        );
    }
}