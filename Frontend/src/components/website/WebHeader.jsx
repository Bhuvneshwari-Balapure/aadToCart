import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
//icons
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

//useNavigation
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react"
//useSelector 
import { useSelector } from "react-redux";
const WebHeader = () => {

  //useSelector 
  const cart = useSelector(state=>state.cart.cart2)
  const[userName , setUserName]=useState("")
  useEffect(()=>{
      const Uname = window.localStorage.getItem("Name")
      setUserName(Uname)
      if(!Uname){
        navigate("/registration")
      }
      
  },[])





  const navigate = useNavigate();
  const Logout = () => {
    navigate("/registration");
    window.localStorage.clear();
  };

  return (
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
            <Navbar.Brand>Hello , Wellcome {userName}</Navbar.Brand>
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
      <div className="w-100">
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="gap-lg-5">
              <Nav
                className="me-auto my-2 my-lg-0 gap-lg-5"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="Webhome">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav>
                <Nav.Link
                  as={Link}
                  to="cart"
                  className="my-auto h-100"
                  style={{
                    color: "blue",

                    borderRadius: "50%",
                    border: "1px solid black",
                    width: "40px",
                    height: "40px",

                    margin: "auto auot",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {cart.length}
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="cart"
                  className="mx-30  d-flex flex-column "
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  <FaCartArrowDown size={30} />
                  <small>Cart</small>
                </Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      
    </div>
  );
};

export default WebHeader;
