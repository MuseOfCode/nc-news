import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Search, User, Home, Bookmark } from "react-feather";
import { useState } from "react";

export default function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="nav-logo"></Navbar.Brand>

        {/* Right Section - Icons */}
        <Nav className="nav-right">
          <div
            className="search-container"
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => setSearchOpen(false)}
          >
            <Search className="icon search-icon" />
            {searchOpen && (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            )}
          </div>

          <Link to="/likes">
            <Home className="icon" />
          </Link>
          <Link to="/likes">
            <Bookmark className="icon" />
          </Link>
          <Link to="/profile">
            <User className="icon" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
