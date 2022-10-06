import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import apiUrl from "../../utils/ApiUrl";
import classes from './AddStoryForm.module.css';
const axios = require("axios").default;

const AddStoryForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const [enteredDescriptionTouched, setEnteredDescriptionTouched] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { currentUser } = useAuth();
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
              
              const username = currentUser;
              const res = await axios.post(
                apiUrl + "stories",
                {
                  username: username,
                  title: enteredTitle,
                  description: enteredDescription,
                }, { withCredentials: true }
              );
              const ID = res.data.id;
              console.log(ID);
              navigate(`/stories/${ID}`);
            } catch (err) {
              setErrMessage(err.response.data.message);
            }
          }
          await postData();
      }
    

  };

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
            className={classes.descriptionbox}
          />
          {descriptionInputIsInvalid && (
            <p className="error-text">Description must not be empty.</p>
          )}
        </div>
        <div className={classes.buttonclass}>
        <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  
};
export default AddStoryForm;
