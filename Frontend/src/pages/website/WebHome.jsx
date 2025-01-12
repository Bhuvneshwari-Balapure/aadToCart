import axios from "axios";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WebHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authCheck = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      try {
        const tokenResponse = await axios.post(
          "http://localhost:8000/users/checkUserValidation",
          null,
          { headers: { "x-auth-token": token } }
        );

        console.log(tokenResponse.data);
        if (tokenResponse.data) {
          navigate("/website");
        }
      } catch (error) {
        console.error("Error validating token:", error);
      }
    };

    authCheck();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};
export default WebHome;
