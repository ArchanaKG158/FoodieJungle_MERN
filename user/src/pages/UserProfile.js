import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "../components/Layout/Header";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // console.log(setAnchorEl, "zzzzzzzzzz");
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem("token") == null) {
    //   navigate("/");
    // } else {
    setToken(JSON.parse(localStorage.getItem("token")));
    setUser(JSON.parse(localStorage.getItem("user")));
    // }
  }, []);

  const logout = async () => {
    alert("Are you sure you want to logout??");
    localStorage.clear();
    navigate("/Signin");
  };

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Check if user is authenticated on component mount
  //   checkAuthentication();
  // }, []);

  // const checkAuthentication = () => {
  //   // Make a request to the backend to check if the user is authenticated
  //   axios
  //     .get("/api/user/profile")
  //     .then((response) => {
  //       setIsAuthenticated(response.data.isAuthenticated);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error checking authentication:", error);
  //     });
  // };

  return (
    <div>
      {/* <Header isAuthenticated={isAuthenticated} /> */}
      <Button
        style={{
          color: "white",
          display: "flex",
          cursor: "pointer",
          marginLeft: "95px",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon />
        {user?.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <Link
          to="/user/myorder"
          style={{ color: "black", textDecoration: "none" }}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
