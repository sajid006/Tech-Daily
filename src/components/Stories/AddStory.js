import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Common from "../../Home/Common";
import classes from './AddStory.module.css';
const jwt = require("jsonwebtoken");

const axios = require("axios").default;
const apiUrl = "http://localhost:3000/api/v1/";
const AddStory = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const [enteredDescriptionTouched, setEnteredDescriptionTouched] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  let username;
  

  const enteredTitleIsValid = enteredTitle.trim() !== "";
  const enteredDescriptionIsValid = enteredDescription.trim() !=="";
  const titleInputIsInvalid =
  !enteredTitleIsValid && enteredTitleTouched;
const descriptionInputIsInvalid =
  !enteredDescriptionIsValid && enteredDescriptionTouched;

let formIsValid = false;

if (enteredTitleIsValid && enteredDescriptionIsValid) {
  formIsValid = true;
}

const titleInputChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
};

const descriptionInputChangeHandler = (event) => {
  setEnteredDescription(event.target.value);
};

const titleInputBlurHandler = (event) => {
  setEnteredTitleTouched(true);
};

// const navigate = useNavigate('/produce');
const descriptionInputBlurHandler = (event) => {
  setEnteredDescriptionTouched(true);
};
  const FormSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredTitleTouched(true);
    setEnteredDescriptionTouched(true);
    if (!enteredTitleIsValid || !enteredDescriptionIsValid) {
        return;
      } else {
        async function postData() {
            try {
              const user = localStorage.getItem("user");
              const userToken = JSON.parse(user).accessToken;
              const username = jwt.verify(userToken, process.env.REACT_APP_JWT_SECRET)
              .username;
              const res = await axios.post(
                apiUrl + "articles",
                {
                  username: username,
                  title: enteredTitle,
                  description: enteredDescription,
                },
                {
                  headers: {
                    Authorization: "Bearer " + userToken,
                  },
                }
              );
              const ID = res.data.id;
              console.log(ID);
              navigate(`/stories/${ID}`);
            } catch (err) {
              console.log(err.response.data.message);
              setErrMessage(err.response.data.message);
            }
          }
          await postData();
      }
    

  };

  // usernameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

  const titleInputClasses = titleInputIsInvalid
  ? "form-control invalid"
  : "form-control";

const descriptionInputClasses = descriptionInputIsInvalid
  ? "form-control invalid"
  : "form-control";
  const AddForm = () => {
    return (
<form className={classes.formclass} onSubmit={FormSubmissionHandler}>
        <h3>Add a Story</h3>
        <div className={classes.descriptionStyle}>
          <label className={classes.title} htmlFor="name">Title</label>
          <input
            type="text"
            id="Title"
            onChange={titleInputChangeHandler}
            onBlur={titleInputBlurHandler}
            value={enteredTitle}
          />
          {titleInputIsInvalid && (
            <p className="error-text">Title must not be empty.</p>
          )}
        </div>
        <div className={classes.descriptionStyle}>
          <label className={classes.title} htmlFor="name">Description</label>
          <textarea 
            type="text"
            id="Description"
            onChange={descriptionInputChangeHandler}
            onBlur={descriptionInputBlurHandler}
            value={enteredDescription}
          />
          {descriptionInputIsInvalid && (
            <p className="error-text">Description must not be empty.</p>
          )}
        </div>
        <div>
        <button disabled={!formIsValid}>Submit</button>
        </div>

      </form>

      
    );
  };
  return <Common val={AddForm} />;
};
export default AddStory;
