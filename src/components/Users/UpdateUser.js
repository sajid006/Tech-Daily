import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Cookies from 'universal-cookie';
import apiUrl from "../../utils/ApiUrl";
import Modal from "../UI/Modal";
const axios = require("axios").default;


const UpdateUser = (props) => {
  const cookies = new Cookies();
  const userToken = cookies.get('user');
  const [enteredName, setEnteredName] = useState(props.name);
  const [enteredEmail, setEnteredEmail] = useState(props.email);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(true);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(true);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = true;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid = false;



  let formIsValid = false;

  if (enteredEmailIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const FormSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (
      !enteredPasswordIsValid ||
      !enteredNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    } else {
      async function fetchData() {
        try {
          const res = await axios.patch(
            apiUrl + `users/${props.username}`,
            {
              name: enteredName,
              email: enteredEmail,
              password: enteredPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${userToken}`
            }
          }
          );
          setUpdateMessage(res.data);
          console.log(res.data);
          props.onClose();
        } catch (err) {
          console.log(err.response.data);
          setErrMessage(err.response.data.Message);
        }
      }
      await fetchData();
      console.log(updateMessage);
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPassword);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={FormSubmissionHandler}>
        <h3>Update Details of {props.username}</h3>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="Name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="Email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Email must not be empty.</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
          />
          {passwordInputIsInvalid && (
            <p className="error-text">Password must not be empty.</p>
          )}
        </div>
        {errMessage && <div className="error-text">{errMessage}</div>}
        <Row className="row-actions">
          <Col md className="form-actions">
            <button className="form-cancel" onClick={props.onClose}>
              Cancel
            </button>
          </Col>
          <Col md className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </Col>
        </Row>
      </form>
    </Modal>
  );
};

export default UpdateUser;
