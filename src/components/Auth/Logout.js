import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Modal from "../UI/Modal";
const Logout = (props) => {
  let navigate = useNavigate();
  const logoutHandler = () => {
    const cookies = new Cookies();
    cookies.remove('user');
    props.resetLoggedIn();
    props.onClose();
    navigate('/');
  };
  return (
    <Modal onClose={props.onClose}>
      <div>Are you sure you want to log out?</div>
      <Row className="row-actions">
        <Col md className="float-right">
          <button onClick={props.onClose}>No</button>
        </Col>
        <Col md className="float-right">
          <button className="form-cancel" onClick={logoutHandler}>Yes</button>
        </Col>
      </Row>
    </Modal>
  );
};

export default Logout;
