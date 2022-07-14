import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
const axios = require("axios").default;
const apiUrl = "http://localhost:3000/api/v1/";
const Signup = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUsernameTouched, setEnteredUsernameTouched] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [signupMessage, setSignupMessage] = useState(false);
  /*
    const [articles, setArticles] = useState([]);
  useEffect( () => { 
      async function fetchData() {
          try {
              const res = await axios.get('http://localhost:3000/api/v1/articles'); 
              setArticles(res.data);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  */
  const navigate = useNavigate();
  const enteredUsernameIsValid = enteredUsername.trim() !== "";
  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const usernameInputIsInvalid =
    !enteredUsernameIsValid && enteredUsernameTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (
    enteredUsernameIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid &&
    enteredNameIsValid
  ) {
    formIsValid = true;
  }

  const usernameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const usernameInputBlurHandler = (event) => {
    setEnteredUsernameTouched(true);
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

    setEnteredUsernameTouched(true);
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (
      !enteredUsernameIsValid ||
      !enteredPasswordIsValid ||
      !enteredNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    } else {
      async function fetchData() {
        try {
          const res = await axios.post(apiUrl + "users", {
            username: enteredUsername,
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
          });
          setSignupMessage(res.data);
          console.log(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/home");
          window.location.reload();
        } catch (err) {
          console.log(err.response.data);
          setErrMessage(err.response.data.message);
        }
      }
      await fetchData();
      console.log(signupMessage);
    }

    console.log(enteredUsername);
    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPassword);

    // usernameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    // setEnteredUsername("");
    // setEnteredUsernameTouched(false);
    // setEnteredName("");
    // setEnteredNameTouched(false);
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const usernameInputClasses = usernameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
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
        <div className={usernameInputClasses}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="Username"
            onChange={usernameInputChangeHandler}
            onBlur={usernameInputBlurHandler}
            value={enteredUsername}
          />
          {usernameInputIsInvalid && (
            <p className="error-text">Username must not be empty.</p>
          )}
        </div>
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

export default Signup;
