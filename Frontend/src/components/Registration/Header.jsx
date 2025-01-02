
import { Navbar, Container} from "react-bootstrap";
import Link from "antd/es/typography/Link";
import LoginPage from "../../pages/LoginPage";
const Header = () => {
      
   
  return (
    <Navbar>
    <Container>
      <Navbar.Brand as={Link} to="registration" >Registration Page</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Navbar.Brand  variant="primary">
            <LoginPage/>
          </Navbar.Brand>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
