import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import DateFormating from "../../DateFormatting";
import Card from "../UI/Card";
import DeleteStoryForm from "./DeleteStoryForm";
import classes from "./StoryItem/StoryItem.module.css";
import StoryItemRating from "./StoryItem/StoryItemRating";
import UpdateStoryForm from "./UpdateStoryForm";
const axios = require("axios").default;
const OneStory = (props) => {
  const [editable, setEditable] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const { verify, currentUser} = useAuth();
  
  useEffect(() => {
    console.log(props.username);
    verify();
    if (currentUser === props.username) {
      setEditable(true);
    }
    else setEditable(false);
  }, [props.username, currentUser]);

  const showEditStory = () => {
    setEditForm(true);
  }
  const closeEditStory = () => {
    setEditForm(false);
  }

  const showDeleteStory = () => {
    setDeleteForm(true);
  }
  const closeDeleteStory = () => {
    setDeleteForm(false);
  }
  let editText;
  if (editable) {
    editText = <div style={{display:"flex"}}>
      &nbsp;&nbsp;<button onClick={showEditStory}>Edit Story</button>&nbsp;&nbsp;<button onClick={showDeleteStory}>Delete Story</button>
      </div>
      
  } else {
    editText = <h4>&nbsp;&nbsp;Rate This story:</h4>;
  }
  const userProfile = "/profiles/"+props.username;
  const createdAt = DateFormating(props.createdAt);
  const updatedAt = DateFormating(props.updatedAt);
  return (
    <div>
    {editForm && <UpdateStoryForm title={props.title} description={props.description} onClose={closeEditStory} id={props.id} toggleSetUpdated={props.toggleSetUpdated}/>}
    {deleteForm && <DeleteStoryForm onClose={closeDeleteStory} id={props.id}/>}
   
      <Card>
        <li className={classes.Story}>
          <div>
            <h3>{props.title}</h3>
            <h4>Author: <a href={userProfile}>{props.username}</a></h4>
            <div className={classes.description}>{props.description}</div>
            <h6>Posted At: {createdAt}</h6>
            <h6>Updated At: {updatedAt}</h6>
          </div>
          <div>
            <StoryItemRating />
          </div>
        </li>
      </Card>
      <Card>
        {editText}
        <h4>&nbsp;&nbsp;Download as:</h4>
      </Card>
    </div>
  );
};

export default OneStory;
