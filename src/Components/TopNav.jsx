import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Circle, AlignJustify } from "react-feather";
import Logo from "./Logo";

export default function TopNav() {
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-logo"></Navbar.Brand>

        <Nav className="top-nav">
          <div className="container">
            <div className="sidebar-icon">
              <AlignJustify />
            </div>
            <div className="logo">
              <Logo />
            </div>
          </div>
          <Link to="/profile">
            <Circle className="icon" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
