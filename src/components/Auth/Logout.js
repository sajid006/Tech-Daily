import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Modal from "../UI/Modal";
const axios = require("axios").default;
const api= "http://localhost:3000/api/v1/"
const Logout = (props) => {
  const {logout} = useAuth();
  let navigate = useNavigate();
  const logoutHandler = async () => {
    await logout();
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
