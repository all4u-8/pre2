// src/components/NavBar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Enlace al catálogo principal al hacer clic en el brand */}
        <Navbar.Brand as={Link} to="/">SmartShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Enlaces a categorías específicas utilizando el nombre como param */}
            <Nav.Link as={Link} to="/category/telefonos">Telefonos</Nav.Link>
            <Nav.Link as={Link} to="/category/computadores">Computadores</Nav.Link>
            <Nav.Link as={Link} to="/category/perifericos">Perifericos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
