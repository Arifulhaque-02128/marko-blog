import React from 'react';
import Link from 'next/link';
import navStyle from './Navbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
    return (
        <Navbar className="container" bg="transparent" expand="lg">
            <Navbar.Brand href="https://www.markopolo.ai/">
                <img className={navStyle.logo} src="/brand.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="btn btn-light mx-3" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/addBlog">
                        <button className="btn btn-primary mx-3"> Add Blog </button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;