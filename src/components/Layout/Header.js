import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className={classes.header}>
        
          
          <button className={classes.button} onClick={() => navigate("/")}>
            <h1>Tech Daily</h1>
          </button>
          

        {!props.loggedIn && (
          <LoggedOutHeader
            onShowLogin={props.onShowLogin}
            onShowSignup={props.onShowSignup}
          />
        )}
        {props.loggedIn && (
          <LoggedInHeader
            loggedIn={props.loggedIn}
            onShowLogout={props.onShowLogout}
            onClickProfile={props.onClickProfile}
          />
        )}
      </header>
    </Fragment>
  );
};

export default Header;
