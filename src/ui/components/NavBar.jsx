import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <Navbar
        style={{ background: "yellow" }}
        className="navbar sticky-top navbar-expand-lg"
      >
         <Container fluid>
        <Link
          style={{ fontFamily: "sans-serif", fontWeight:"bold"}}
          className="navbar-brand text-danger"
        >
          {" "}
          Los Toritos{" "}
        </Link>

        <Navbar.Toggle
          style={{ fontFamily: "sans-serif" }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse style={{ fontFamily: "sans-serif" }} id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontFamily: "sans-serif", fontWeight:"bold" }}
            navbarScroll
          >
            <Nav.Link className="text-danger bold" as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-danger" as={NavLink} to="/sale">
              Sale
            </Nav.Link>
            <Nav.Link className="text-danger" as={NavLink} to="/inventary">
              Inventary
            </Nav.Link>
            <Nav.Link className="text-danger" as={NavLink} to="/report">
              Report
            </Nav.Link>
          </Nav>

          {user && (
            <span style={{fontWeight:"bold"}} className="nav-item navbar-link text-danger">
              {user.name}
            </span>
          )}

          <Nav className="ms-auto" navbarScroll>
            <button
            style={{fontWeight:"bold"}}
              className="nav-item nav-link btn text-danger"
              onClick={() => onLogout()}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
