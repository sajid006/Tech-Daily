import React, { useEffect, useState } from "react";
import LoggedInHome from "../../Home/LoggedInHome";
import LoggedOutHome from "../../Home/LoggedOutHome";
import checkAuthToken from "../Auth/CheckAuthToken";

const NavHeader = (props) => {
  const [loggedIn, isLoggedIn] = useState("");
  useEffect(() => {
    const username = checkAuthToken();
    if (username) setLoggedIn(username);
    else resetLoggedIn();
  }, []);

  const setLoggedIn = (value) => {
    isLoggedIn(value);
  };
  const resetLoggedIn = () => {
    isLoggedIn("");
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <button onClick={props.toggleSideBar} class="navbutton">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div>
        {!loggedIn && <LoggedOutHome />}
        {loggedIn && <LoggedInHome loggedIn={loggedIn} />}
      </div>
    </div>
  );
};
export default NavHeader;
