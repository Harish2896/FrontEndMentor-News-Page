//import { Container, Navbar, Nav } from "react-bootstrap";
import { Navbar } from "../../styles/Navbar.styled";
import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";

const NavBar = () => {
  const [isMobileViewOn, setIsMobileViewOn] = useState(false);

  const toggleNav = () => {
    setIsMobileViewOn(!isMobileViewOn);
  };
  return (
    <Navbar className="mb-5">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={isMobileViewOn ? "nav-links-mobile" : "nav-links"}>
        <img
          className="close-menu-icon"
          src={closeIcon}
          alt="closeIcon"
          onClick={toggleNav}
        />
        <a className="link" href="#new">
          New
        </a>
        <a className="link" href="#popular">
          Popular
        </a>
        <a className="link" href="#trending">
          Trending
        </a>
        <a className="link" href="#home">
          Home
        </a>
        <a className="link" href="#categories">
          Categories
        </a>
      </div>

      <img
        className="menu-icon"
        onClick={toggleNav}
        src={menuIcon}
        alt="menuIcon"
      />
    </Navbar>
  );
};

// <Navbar bg="light" variant="light" expand="md" className="mb-5">
//       <Container fluid>
//         <Navbar.Brand href="#home">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//           <Nav className="ms-auto">
//             <Nav.Link href="#new">New</Nav.Link>
//             <Nav.Link href="#popular">Popular</Nav.Link>
//             <Nav.Link href="#trending">Trending</Nav.Link>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#categories">Categories</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

export default NavBar;
