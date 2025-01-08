import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import AdminLogin from "./Admin/AdminLogin";
const RegistrationPage = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    let api = "http://localhost:8000/users/registration";
    axios.post(api, input).then((res) => {
      message.success(res.data.msg);
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="registerParent">
        <div>
          <div id="registration" className=" mt-5">
            <div
              className="p-4 rounded shadow-lg"
              style={{
                maxWidth: "500px",
                margin: "auto",
                background: "linear-gradient(to bottom, #ffffff, #d4f1f9)",
              }}
            >
              <h2 className="text-center" style={{ color: "#ff5733" }}>
                User Registration
              </h2>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ color: "#2c3e50" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-2"
                    id="name"
                    name="name"
                    value={input.name}
                    onChange={handleInput}
                    style={{ borderColor: "#2980b9" }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ color: "#2c3e50" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-2"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleInput}
                    style={{ borderColor: "#27ae60" }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "#2c3e50" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control border-2"
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={handleInput}
                    style={{ borderColor: "#e74c3c" }}
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn w-100"
                  style={{
                    backgroundColor: "#3498db",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div>
          <AdminLogin/>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
