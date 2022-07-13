import React from "react";
import classes from './StoryItem.module.css';
import StoryItemForm from './StoryItemForm';
const StoryItem = (props) => {

  return (
    <li className={classes.Story}>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.author}</h4>
        <div className={classes.description}>{props.description}</div>
        <button>See More</button>
      </div>
      <div>
        <StoryItemForm/>
      </div>
    </li>
  );
};

export default StoryItem;
