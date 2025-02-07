import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
const Header = (props) => {
  const currentUser = useSelector(state => state.auth.currentUser);
  const navigate = useNavigate();
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
