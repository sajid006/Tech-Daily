
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
const axios = require("axios").default;
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginMessage, setLoginMessage] = useState(false);
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
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  // const navigate = useNavigate('/produce');
  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const FormSubmissionHandler = async (event) => {
    event.preventDefault();

    
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    } else {
      async function fetchData() {
        try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/users/login",
            {
              username: enteredEmail,
              password: enteredPassword,
            }
          );
          setLoginMessage(res.data);
          console.log(res.data);
          navigate('/home');
          
        } catch (err) {
          console.log(err);
          setIsSubmitted(true);
        }
      }
      await fetchData();
      console.log(loginMessage);
      
    }

    console.log(enteredEmail);
    console.log(enteredPassword);

    // emailInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = passwordInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={FormSubmissionHandler}>
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
        {isSubmitted && <div className="error-text">Invalid Username or Password</div>}
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
