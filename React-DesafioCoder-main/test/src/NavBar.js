import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Zapatillas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <NavDropdown title="Marcas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Jordan</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Nike</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Vans</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>
  </Container>
</Navbar>
  );
}

export default NavBar;
