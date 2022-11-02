import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import apiUrl from "../../utils/ApiUrl";
const axios = require("axios").default;

const DeleteStoryForm = (props) => {
  const userToken = localStorage.getItem('user');
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");
  const deleteUserHandler = async() => {
    async function deleteData() {
      try {
        await axios.delete(
          apiUrl + `stories/${props.id}`,
          {
            headers: {
              'Authorization': `Bearer ${userToken}`
            },
          });
        navigate("/");
      } catch (err) {
        console.log(err.response.data);
        setErrMessage("Failed to delete");
      }
    }
    await deleteData();
  }
  return <div>
    <h3>Are you sure you want to delete this story?</h3>
    {errMessage && <div className="error-text">{errMessage}</div>}
    <Button variant="light" onClick={props.handleClose}>No</Button>{' '}
    <Button variant="danger" onClick={deleteUserHandler}>Delete</Button>
  </div>;


};

export default DeleteStoryForm;
