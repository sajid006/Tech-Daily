import React, { useEffect } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import LoggedInHome from "../../Home/LoggedInHome";
import LoggedOutHome from "../../Home/LoggedOutHome";
const axios = require("axios").default;
const api = "http://localhost:3000/api/v1/";
const NavHeader = (props) => {
  const {verify, currentUser} = useAuth();
  // const setLoggedIn = (value) => {
  //   isLoggedIn(value);
  // };
  // const resetLoggedIn = () => {
  //   isLoggedIn("");
  // };
  useEffect(() => {
    verify();
  }, [currentUser]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <button onClick={props.toggleSideBar} className="navbutton">
          <i className="fa fa-fw fa-bars"></i>
        </button>
      </div>
      <div>{currentUser ? <LoggedInHome /> : <LoggedOutHome />}</div>
    </div>
  );
};
export default NavHeader;
