import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import apiUrl from "../../utils/ApiUrl";
import Modal from "../UI/Modal";
import classes from './AddStoryForm.module.css';
const axios = require("axios").default;
const UpdateStoryForm = (props) => {
  const cookies = new Cookies();
  const userToken = cookies.get('user');
  const [enteredTitle, setEnteredTitle] = useState(props.title);
  const [enteredDescription, setEnteredDescription] = useState(props.description);
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(true);
  const [enteredDescriptionTouched, setEnteredDescriptionTouched] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
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
              
              const res = await axios.patch(
                apiUrl + `stories/${props.id}`,
                {
                  title: enteredTitle,
                  description: enteredDescription,
                }, {
                  headers: {
                    Authorization: `Bearer ${userToken}`
                }
              }
              );
              props.onClose();
              props.toggleSetUpdated();
            } catch (err) {
              setErrMessage(err.response.data);
            }
          }
          await postData();
      }
  };
    return (
   <Modal onClose={props.onClose}>
 <form className={classes.EditStories} onSubmit={FormSubmissionHandler}>
        <h3>Update Story</h3>
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
            className={classes.descriptionbox}
          />
          {descriptionInputIsInvalid && (
            <p className="error-text">Description must not be empty.</p>
          )}
        </div>
        {errMessage && (
            <p className="error-text">{errMessage}</p>
          )}
        <div className={classes.buttonclass}>
        <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
   </Modal> 
    );
};
export default UpdateStoryForm ;
