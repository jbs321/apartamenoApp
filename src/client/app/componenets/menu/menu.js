import React, {Component} from 'react';

class Menu extends Component {
    handleNav(e) {
        e.preventDefault();
        console.log(this);
    }

    render() {
        return (
            <nav className=" menu navbar navbar-toggleable-md navbar-light bg-faded">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item my-lg-0">
                        <img className="icon" src="./public/img/icon.png" alt=""/>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={this.handleNav}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleNav}>Buildings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleNav}>Users</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
