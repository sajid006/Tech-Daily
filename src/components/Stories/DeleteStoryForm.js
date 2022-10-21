import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import apiUrl from "../../utils/ApiUrl";
import Modal from "../UI/Modal";
const axios = require("axios").default;
const DeleteStoryForm = (props) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userToken = cookies.get('user');
  const [errMessage, setErrMessage] = useState("");
  const deleteStoryHandler = async() => {
    async function deleteData() {
      try {
        await axios.delete(
          apiUrl + `stories/${props.id}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`
          }
        }
        );
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
    <Button variant="danger" onClick={deleteStoryHandler}>Delete</Button>
  </Modal>;


};

export default DeleteStoryForm;
