import React from "react";
import { Col, Row } from "react-bootstrap";
import HeaderButton from "./HeaderButton";
const LoggedOutHeader = (props) => {
  return (
    <Row>
      <Col md>
        <HeaderButton onClick={props.onShowLogin} value={"Log In"} />
      </Col>
      <Col md>
        <HeaderButton onClick={props.onShowSignup} value={"Sign Up"} />
      </Col>
    </Row>
  );
};
export default LoggedOutHeader;
