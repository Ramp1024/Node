import React , {Component} from 'react';
import {Navbar , Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./Header.css";

class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="header">
                <Navbar className="color-nav" expand="lg">
                    <Navbar.Brand className="nav-br" href="/">LandSpect</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="navbar-list">
                                <Link to="/">
                                    <Nav.Link href="#home">Home</Nav.Link>  
                                </Link>    
                                <Link to="/about">
                                        <Nav.Link href="#link">About</Nav.Link>
                                </Link>
                                <Link to="/contacts">
                                        <Nav.Link href="#link">Contacts</Nav.Link>
                                </Link>
                        </div>  
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
