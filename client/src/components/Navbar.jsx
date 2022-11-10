import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar_footer.css";
const Navbar = () => {
  const navigate = useNavigate();

  let token = JSON.parse(localStorage.getItem("token")) || [];
  // console.log(token);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/dashboard")}>DASHBOARD</h3>
      {token.isLoggedIn? (
        <h3 onClick={logout}>LOGOUT ({token.email})</h3>
      ) : (
        <h3 onClick={() => navigate("/")}>LOGIN</h3>
      )}
    </div>
  );
};

export default Navbar;
