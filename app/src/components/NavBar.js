import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from './navIcon.ico'; // Example logo, replace with your own
import "./hover.css";
import {useNavigate} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  const nav = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '70px'}}>
      <Container style={{margin: '0'}} >
        <Navbar.Brand href="/Home" style={{ paddingLeft: '15px', paddingRight: '15px', marginRight: '2%', marginLeft: '3%' }}>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Imperium'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ margin: '0' }}>
            <Nav.Link href="/Home" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Home</Nav.Link>
            <Nav.Link href="/Login" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>Donate</Nav.Link>
            <Nav.Link href="#faqs" className="nav-link" style={{ paddingLeft: '15px', paddingRight: '15px', margin: '0' }}>FAQs</Nav.Link>
            {/* Add more Nav.Link components for additional pages */}
          </Nav>
          <Button type="button" onClick={()=>nav("/Login")} variant="outline-light" className="ms-auto" style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '3px', paddingBottom: '5px', marginRight: '-30%' }}>Login</Button>
          <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sign Up
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/Register">Register as Donor</Dropdown.Item>
                <Dropdown.Item href="/RegisterOrg">Register as Organization</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
