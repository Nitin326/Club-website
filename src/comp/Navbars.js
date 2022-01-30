import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../Assates/Images/logo.png';
import '../Assates/Style/Nav.css';

const Navbars = () => {
  return (
    <>
      <Navbar bg="info" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img
              src={logo}
              width="120"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto menu-list">
              <NavLink className='menu-item' to="/">Home</NavLink>
              <NavLink className='menu-item' to="/about">About</NavLink>
              <NavLink className='menu-item' to="/projects">Projects</NavLink>
              <NavLink className='menu-item' to="/members">Members</NavLink>
              <NavLink className='menu-item' to="/login">Login</NavLink>
              <NavLink className='menu-item' to="/register">Register</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Navbars