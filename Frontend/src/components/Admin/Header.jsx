import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//icons
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/registration");
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div className="w-100 ">
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link
                  className="d-flex flex-column align-items-center text-danger"
                  onClick={Logout}
                >
                  <IoMdLogOut size={30} />
                  <small>Logout</small>
                </Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="w-100 ">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">CRUD Operations</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="addProduct">
                    Add Products
                  </Nav.Link>
                  <Nav.Link as={Link} to="display">
                    Display
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
