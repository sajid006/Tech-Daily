import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
const axios = require("axios").default;
const apiUrl = "http://localhost:3000/api/v1/";
const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUsernameTouched, setEnteredUsernameTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState(false);
  const navigate = useNavigate();
  const enteredUsernameIsValid = enteredUsername.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const usernameInputIsInvalid =
    !enteredUsernameIsValid && enteredUsernameTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const usernameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const usernameInputBlurHandler = (event) => {
    setEnteredUsernameTouched(true);
  };

  // const navigate = useNavigate('/produce');
  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const FormSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredUsernameTouched(true);
    setEnteredPasswordTouched(true);
    if (!enteredUsernameIsValid || !enteredPasswordIsValid) {
      return;
    } else {
      async function fetchData() {
        try {
          const res = await axios.post(apiUrl + "users/login", {
            username: enteredUsername,
            password: enteredPassword,
          }, {withCredentials: true});
          setLoginMessage(res.data);
          props.isLoggedIn(res.data.username);
          props.onClose();
          navigate('/');
        } catch (err) {
          console.log(err.response.data);
          setErrMessage(err.response.data.message);
        }
      }
      await fetchData();
      console.log(loginMessage);
    }

    console.log(enteredUsername);
    console.log(enteredPassword);

    // usernameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const usernameInputClasses = usernameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = passwordInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={FormSubmissionHandler}>
        <h3>Log In</h3>
        <div className={usernameInputClasses}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="Username"
            icon="person"
            onChange={usernameInputChangeHandler}
            onBlur={usernameInputBlurHandler}
            value={enteredUsername}
          />
          {usernameInputIsInvalid && (
            <p className="error-text">Username must not be empty.</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            icon="password"
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

export default Login;
