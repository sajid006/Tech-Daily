import { Dehaze } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import LoggedInHome from "../Home/LoggedInHome";
import LoggedOutHome from "../Home/LoggedOutHome";
import classes from './NavHeader.module.css';
const NavHeader = (props) => {
  const {verify, currentUser} = useAuth();
  useEffect(() => {
    verify();
  }, [currentUser]);

  return (
    <div className={classes.navheader}>
      <div>
        <button onClick={props.toggleSideBar} className="navbutton">
          <Dehaze/>
        </button>
      </div>
      <div>{currentUser ? <LoggedInHome /> : <LoggedOutHome />}</div>
    </div>
  );
};
export default NavHeader;
