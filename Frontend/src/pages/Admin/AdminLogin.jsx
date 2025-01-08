import { useState  } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name ;
    let value = e.target.value ;
    setInput((values) => ({ ...values, [name]: value }));
    
  };

  const handleSubmit = () => {

    const AdminMail = "ayushi@gmail.com";
    const AdminPass = "A123";
    if(input.adminEmail != AdminMail && input.adminPassword != AdminPass)
    {
        alert("Invalid Admin");
    }
    else {

        console.log(input);
        navigate("/display");
    }
  };

  return (
    <>
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
            Admin Login
          </h2>
          <form>
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
                id="adminEmail"
                name="adminEmail"
                value={input.adminEmail}
                onChange={handleInput}
                style={{ borderColor: "#27ae60" }}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="adminPassword"
                className="form-label"
                style={{ color: "#2c3e50" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control border-2"
                id="adminPassword"
                name="adminPassword"
                value={input.adminPassword}
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
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;
