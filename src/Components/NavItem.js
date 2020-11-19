import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavItem extends Component{
    render() {
        return (
            <li>
                <Link to={this.props.link} {/*onClick={this.props.activec.bind(this, this.props.item)}*/}>
                    {this.props.item}
                </Link>
            </li>
        );
    }
}

export default NavItem