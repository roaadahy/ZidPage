import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from '../../assets/images/zid-logo.png'

const NavBar = () => {
    return (
      
        <Navbar >
          <img src={logo} alt="logo" id="logo" className="mx-5"/>
          <Nav className="ml-auto mt-2  mb-0 pe-0 justify-content-between col-lg-7" id="navbar__container">
          <Nav.Link as={Link} to="/" className="mb-2 text-dark">
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/التصنيفات" className="mb-2 text-dark">
              التصنيفات
            </Nav.Link>
            <Nav.Link as={Link} to="/التطبيقات" className="mb-2 text-dark">
              التطبيقات
            </Nav.Link>
            <Nav.Link as={Link} to="/طور التطبيق" className="mb-2 text-dark">
              طور التطبيق
            </Nav.Link>
            
          </Nav>
        
    </Navbar>
    
  );
};

export default NavBar;