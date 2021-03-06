import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Simple Navigation bar using react BootStrap to style it.
class NavBar extends Component{
    render() {
        return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>
                    <Nav.Link href="/authors">Authors</Nav.Link>
                    <Nav.Link href="/quotes">Quotes</Nav.Link>
                    <Nav.Link href="/registries">Registry</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    }
}
export default NavBar


