import React, { useEffect, useState } from "react";
import LoggedInHome from "../../Home/LoggedInHome";
import LoggedOutHome from "../../Home/LoggedOutHome";
import checkAuthToken from "../Auth/CheckAuthToken";

const NavHeader = (props) => {
  const [loggedIn, isLoggedIn] = useState("");
  const setLoggedIn = (value) => {
    isLoggedIn(value);
  };
  const resetLoggedIn = () => {
    isLoggedIn("");
  };
  useEffect(() => {
    const username = checkAuthToken();
    console.log("yo");
    if (username) setLoggedIn(username);
    else resetLoggedIn();
  }, [loggedIn]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <button onClick={props.toggleSideBar} className="navbutton">
          <i className="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div>
        {!loggedIn ? (
          <LoggedOutHome loggedIn={loggedIn} isLoggedIn={isLoggedIn} />
        ) : (
          <LoggedInHome loggedIn={loggedIn} isLoggedIn={isLoggedIn} />
        )}
      </div>
    </div>
  );
};
export default NavHeader;
