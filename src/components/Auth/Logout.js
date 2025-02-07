import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import { logout } from "../../store/slices/authSlice";

const axios = require("axios").default;
const Logout = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(logout);
    console.log('yo');
    props.onClose();
    navigate("/");
  };
  return (
    <Modal onClose={props.onClose}>
      <div>Are you sure you want to log out?</div>
      <Row className="row-actions">
        <Col md className="float-right">
          <button onClick={props.onClose}>No</button>
        </Col>
        <Col md className="float-right">
          <button className="form-cancel" onClick={logoutHandler}>
            Yes
          </button>
        </Col>
      </Row>
    </Modal>
  );
};

export default Logout;
