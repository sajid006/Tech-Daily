import React from "react";
import Card from "../UI/Card";
import classes from "./StoryItem/StoryItem.module.css";
import StoryItemRating from "./StoryItem/StoryItemRating";
const OneStory = (props) => {
  return (
    <Card>
      <li className={classes.Story}>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.author}</h4>
          <div className={classes.description}>{props.description}</div>
        </div>
        <div>
          <StoryItemRating />
        </div>
      </li>
      <h4>&nbsp;&nbsp;Rate This story:</h4>
      <h4>&nbsp;&nbsp;Download as:</h4>
    </Card>
  );
};

export default OneStory;
