import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, FormControl } from  'react-bootstrap';
import './navbar.css'
import { logo } from '../../assets';



  
 const  Navigation = ()  => {

  return (
    <div>
      <Navbar className="d-flex justify-content-between">
        <Navbar.Brand className="" href="/">
          <div className="logo__container">
          <img
            className="logo d-block w-20"
            src={logo}
            alt="First slide"
          />
          </div>
        </Navbar.Brand>
        <Navbar.Brand className="text-info">
          <Link to="#" className="bg-transparent d-lg-none">
            <i className="bar fa fa-bars" aria-hidden="true"></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="text-info">
          <Link to="/contact">
            <i className="ico fa fa-globe fa-2x" aria-hidden="true"></i>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Nav className="nav justify-content-start  font-weight-bold bg-dark fixed">
        <span className="close text-white d-lg-none" aria-hidden="false">&times;</span>
        <Nav.Item className="item">
          <Nav.Link href="/">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Nav.Link href="/about">ABOUT US</Nav.Link>
        </Nav.Item>
        <NavDropdown className="" title="WHAT WE DO" id="nav-dropdown">
          <NavDropdown.Item href="/emergency">EMERGENCIES</NavDropdown.Item>
          <NavDropdown.Item href="education">EDUCATION, SKILLS BUILDING AND WORK</NavDropdown.Item>
          <NavDropdown.Item href="/violence">GENDER BASED VIOLENCE</NavDropdown.Item>
          <NavDropdown.Item href="/rights">SEXUAL HEALTH AND RIGHTS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="">
          <Nav.Link href="/donate">DONATE</Nav.Link>
        </Nav.Item>
        <Nav.Item className="">
          <Nav.Link href="/partnerships">PATNERSHIPS</Nav.Link>
        </Nav.Item>
        <Nav.Item className="">
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Nav.Link href="/blogpage">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item className="">
          <Form inline className="search w-100">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form></Nav.Item>
      </Nav>
    </div>
  );
  }
  export default Navigation