import {Nav, Navbar,Container, NavDropdown}from 'react-bootstrap';
import logo from './levelup-logo-navbar.png';
import { Link } from 'react-router-dom';
import './CustomNav.css';

function CustomNav() {
  return (
    <Navbar expand='lg' className='navbar-imperio' data-bs-theme="dark">
      <Container fluid className='ps-2'>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="250"
            className="d-inline-block align-top"
            alt="TecnoLab"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Nosotros</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;