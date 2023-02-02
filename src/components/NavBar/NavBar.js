import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#new">New</Nav.Link>
            <Nav.Link href="#popular">Popular</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
