import React from "react";
import { Col, Row } from "react-bootstrap";
import HeaderButton from "./HeaderButton";
const LoggedInHeader = (props) => {
  return (
    <Row>
    <Col md>
      <HeaderButton onClick={props.onClickProfile} value={props.loggedIn} />
    </Col>
    <Col md>
      <HeaderButton onClick={props.onShowLogout} value={"Log Out"} />
    </Col>
  </Row>
  );
};
export default LoggedInHeader;