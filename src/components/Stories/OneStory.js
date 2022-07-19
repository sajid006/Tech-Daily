import React, { useEffect, useState } from "react";
import checkAuthToken from "../Auth/CheckAuthToken";
import Card from "../UI/Card";
import classes from "./StoryItem/StoryItem.module.css";
import StoryItemRating from "./StoryItem/StoryItemRating";
const OneStory = (props) => {
  const [editable, setEditable] = useState(false);
  
  useEffect( () => { 
    const userFromToken = checkAuthToken();
    console.log(userFromToken);
    console.log(props.author);
    if(userFromToken===props.author){
      setEditable(true);
    }
}, []);
  
  let editText;
  if(editable){
    editText = (<button>Edit here</button>)
  }
  else{
    editText = (<h4>&nbsp;&nbsp;Rate This story:</h4>)
  }
  return (
    <Card>
      <li className={classes.Story}>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.author}</h4>
          <div className={classes.description}>{props.description}</div>
          <h6>Posted At: {props.createdAt}</h6>
          <h6>Updated At: {props.updatedAt}</h6>
        </div>
        <div>
          <StoryItemRating />
        </div>
      </li>
      {editText}
      <h4>&nbsp;&nbsp;Download as:</h4>
    </Card>
  );
};

export default OneStory;
