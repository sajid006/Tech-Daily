import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import Modal from "../UI/Modal";
const axios = require("axios").default;
const apiUrl = "http://localhost:3000/api/v1/";
const DeleteStoryForm = (props) => {
  const navigate = useNavigate();

  const [errMessage, setErrMessage] = useState("");
  const deleteUserHandler = async() => {
    async function deleteData() {
      try {
        await axios.delete(
          apiUrl + `articles/${props.id}`,
           { withCredentials: true }
        );
        props.onClose();
        navigate("/");
      } catch (err) {
        console.log(err.response.data);
        setErrMessage("Failed to delete");
      }
    }
    await deleteData();
  }
  return <Modal onClose={props.onClose}>
    <h3>Are you sure you want to delete this story?</h3>
    {errMessage && <div className="error-text">{errMessage}</div>}
    <Button variant="light" onClick={props.onClose}>No</Button>{' '}
    <Button variant="danger" onClick={deleteUserHandler}>Delete</Button>
  </Modal>;
};

export default DeleteStoryForm;
