import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, FormControl } from  'react-bootstrap';
import './navbar.css'
import { logo } from '../../assets';



  
 const  Navigation = ()  => {

  return (
    <div>
      <Navbar className="nav d-flex justify-content-between">
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
          <Link to="/contact" className="link">
            <i className="ico fa fa-globe fa-2x" aria-hidden="true"></i>
          </Link>
        </Navbar.Brand>
      </Navbar>
      <Nav className="nav justify-content-start  font-weight-bold bg-dark fixed">
        <span className="close text-white d-lg-none" aria-hidden="false">&times;</span>
        <Nav.Item className="item">
          <Link to="/" className="link">HOME</Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Link to="/about" className="link">ABOUT US</Link>
        </Nav.Item>
        <Nav.Item>
        
         
        <NavDropdown className="drop" title="WHAT WE DO" id="nav-dropdown">
          <NavDropdown.Item><Link to="education" className='link'>SEX EDUCATION AND ECONOMIC EMPOWERMENT</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link to="/violence" className='link'>GENDER BASED VIOLENCE AND RAPE</Link></NavDropdown.Item>
        </NavDropdown>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/donate" className="link">DONATE</Link>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/partnerships" className="link">PATNERSHIPS</Link>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/contact" className="link">CONTACT US</Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Link to="/blogpage" className="link">BLOG</Link>
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