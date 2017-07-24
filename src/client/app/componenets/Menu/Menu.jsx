import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    handleNav(e) {
        e.preventDefault();
        console.log(this);
    }

    render() {
        return (
            <nav className="menu navbar navbar-toggleable navbar-light bg-faded d-flex ">
                <div className="nav-item">
                    <img className="icon" src="./public/img/icon.png" alt=""/>
                </div>
                <div className="nav-item  ml-auto">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
            </nav>
        );
    }
}

export default Menu;
