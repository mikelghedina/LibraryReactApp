import React, {Component} from "react";
import {NavItem} from "react-bootstrap";

class NavBar extends Component{

    render() {
        return(
            <nav>
                <ul>
                    <NavItem item ="Books" tolink="/books"></NavItem>
                    <NavItem item ="Authors" tolink="/authors"></NavItem>
                    <NavItem item ="Quotes" tolink="/quotes"></NavItem>
                    <NavItem item ="Users" tolink="/users"></NavItem>
                    <NavItem item ="Registry" tolink="/registry"></NavItem>
                </ul>
            </nav>
        )
    }
}
export default NavBar;