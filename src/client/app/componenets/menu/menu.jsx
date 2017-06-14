import React, {Component} from 'react';

class Menu extends Component {
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
                    <a className="nav-link active" href="#" onClick={this.handleNav}>Home</a>
                </div>
                <div className="nav-item ">
                    <a className="nav-link" href="#" onClick={this.handleNav}>Buildings</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#" onClick={this.handleNav}>Users</a>
                </div>

            </nav>
        );
    }
}

export default Menu;
