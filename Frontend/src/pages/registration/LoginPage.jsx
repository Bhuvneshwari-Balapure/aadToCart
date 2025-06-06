import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  const [modalShow, setModalShow] = useState(false); // Modal visibility
  const [input, setInput] = useState({ email: "", password: "" }); // Input state
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async () => {
    if (userType === "admin") {
      let api = "http://localhost:8000/admin/adminlogin";
      try {
        const response = await axios.post(api, {
          email: input.email,
          password: input.password,
        });
        if (response.status === 200) {
          localStorage.setItem("adminname", response.data.name);
        }
        navigate("/display");
      } catch (error) {
        console.log(error);
      }
    } else if (userType === "user") {
      let api = "http://localhost:8000/users/login";

      axios
        .post(api, { email: input.email, password: input.password })
        .then((res) => {
          localStorage.setItem("Name", res.data.user.name);
          localStorage.setItem("authToken", res.data.token);

          message.success(res.data.msg);
          setModalShow(false);
          navigate("/Website");
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err.response);
          message.error(
            err.response?.data?.msg || "Login failed. Please try again."
          );
        });
    } else {
      message.error("User/Admin Not Found");
    }
  };

  return (
    <>
      {/* User Icon to open modal */}
      <span style={{ cursor: "pointer" }} onClick={() => setModalShow(true)}>
        <FaUserCircle size={30} style={{ color: "blue", cursor: "pointer" }} />
        User Login
      </span>

      {/* Login Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email}
                placeholder="Enter your email"
                onChange={handleInput}
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={input.password} // Controlled value (required for name and value)
                placeholder="Enter your password"
                onChange={handleInput}
              />
            </Form.Group>
            {/* switch as User/Admin */}
            <Form.Group className="mb-3" controlId="formBasicUserType">
              <Form.Label>Login As</Form.Label>
              <Form.Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option>Login As (Admin/User)</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" type="button" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginPage;
