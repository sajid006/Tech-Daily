import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <button className={classes.button}>
          <h1>Tech Daily</h1>
        </button>
        {!props.loggedIn && (
          <Row>
            <Col md>
              <HeaderButton onClick={props.onShowLogin} value={"Log In"} />
            </Col>
            <Col md>
              <HeaderButton onClick={props.onShowSignup} value={"Sign Up"} />
            </Col>
          </Row>
        )}
        {props.loggedIn && (
          <Row>
            <Col md>
              <HeaderButton onClick={props.onClickProfile} value={props.loggedIn} />
            </Col>
            <Col md>
              <HeaderButton onClick={props.onShowLogout} value={"Log Out"} />
            </Col>
          </Row>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
