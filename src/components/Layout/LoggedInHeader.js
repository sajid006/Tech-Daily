import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import HeaderButton from "./HeaderButton";
const LoggedInHeader = (props) => {
  const { currentUser} = useAuth();
  return (
    <Row>
    <Col md>
      <HeaderButton onClick={props.onClickProfile} value={ currentUser } />
    </Col>
    <Col md>
      <HeaderButton onClick={props.onShowLogout} value={"Log Out"} />
    </Col>
  </Row>
  );
};
export default LoggedInHeader;