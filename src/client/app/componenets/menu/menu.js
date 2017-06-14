import React, {Component} from 'react';
import Toggle from "../form/toggle/toggle";
import Button from "../form/button/button";

class Menu extends Component {
    handleNav(e) {
        e.preventDefault();
        console.log(this);
    }

    render() {
        return (
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={this.handleNav}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleNav}>Buildings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleNav}>Users</a>
                    </li>
                    <li className="nav-item">
                        <Toggle/>
                    </li>
                    <li className="nav-item">
                        <Button/>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
