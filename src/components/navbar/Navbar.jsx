import React, { useRef} from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown,Container, Form, FormControl } from  'react-bootstrap';
import './navbar.css'
import { logo } from '../../assets';



  
 const  Navigation = ()  => {
  const close = useRef();
  const navTag = useRef()
console.log(close.current)
console.log(navTag.current)


const navEvents = () => {
  navTag.current.style.display = 'block';
 
}
const closeSide = () => {
  navTag.current.style.display = 'none'
}
  const showNav = () => {
navEvents()
  }

  return (
    <div>
      <Navbar className="d-flex justify-content-between">
      <Container fluid>
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
            <i className="bar fa fa-bars" aria-hidden="true" onClick={showNav}></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="text-info">
          <Link to="/contact" className="link">
            <i className="ico fa fa-globe fa-2x" aria-hidden="true"></i>
          </Link>
        </Navbar.Brand>
        </Container>
       
      </Navbar>
      <Nav className="nav  font-weight-bold bg-dark fixed" ref={navTag}>
        <span className="close text-white d-lg-none" aria-hidden="false" ref={close} onClick={closeSide}>&times;</span>
        <Nav.Item className="">
          <Link to="/" className="link">HOME</Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Link to="/about" className="link">ABOUT US</Link>
        </Nav.Item>
        <Nav.Item>
        
         
        <NavDropdown title="WHAT WE DO" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to="education" className='link'>SEX EDUCATION AND ECONOMIC EMPOWERMENT</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link to="/violence" className='link'>GENDER BASED VIOLENCE AND RAPE</Link></NavDropdown.Item>
        </NavDropdown>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/donate" className="link">DONATE</Link>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/partnerships" className="link">PARTNERSHIPS</Link>
        </Nav.Item>
        <Nav.Item className="">
          <Link to="/contact" className="link">CONTACT US</Link>
        </Nav.Item>
        <Nav.Item className="item">
          <Link to="/blogpage" className="link">BLOG</Link>
        </Nav.Item>
        <Nav.Item className="">
          <Form inline='true' className="search w-100">
            <FormControl type="text" placeholder="Search" className="mr -sm-2" />
          </Form></Nav.Item>
      </Nav>

    </div>
  );
  }
  export default Navigation