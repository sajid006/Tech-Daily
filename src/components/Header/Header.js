import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import classes from "./Header.module.css";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
const Header = (props) => {
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  return (
    <Fragment>
      <header className={classes.header}>
          <button className={classes.button} onClick={() => navigate("/")}>
            <h1>Tech Daily</h1>
          </button>
          

        {!currentUser && (
          <LoggedOutHeader
            onShowLogin={props.onShowLogin}
            onShowSignup={props.onShowSignup}
          />
        )}
        {currentUser && (
          <LoggedInHeader
            onShowLogout={props.onShowLogout}
            onClickUser={props.onClickUser}
          />
        )}
      </header>
    </Fragment>
  );
};

export default Header;
