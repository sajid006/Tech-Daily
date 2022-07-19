import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Modal from "../UI/Modal";
const axios = require("axios").default;
const apiUrl = "http://localhost:3000/api/v1/";
const DeleteAccount = (props) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userToken = cookies.get('user');

  const [errMessage, setErrMessage] = useState("");
  const deleteUserHandler = async() => {
    async function deleteData() {
      try {
        await axios.delete(
          apiUrl + `users/${props.username}`,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        props.onClose();
        cookies.remove('user');
        navigate("/");
      } catch (err) {
        console.log(err.response.data);
        setErrMessage("Failed to delete");
      }
    }
    await deleteData();
  }
  return <Modal onClose={props.onClose}>
    <h3>Are you sure you want to delete your account?</h3>
    {errMessage && <div className="error-text">{errMessage}</div>}
    <Button variant="light" onClick={props.onClose}>No</Button>{' '}
    <Button variant="danger" onClick={deleteUserHandler}>Delete</Button>
  </Modal>;
};

export default DeleteAccount;
