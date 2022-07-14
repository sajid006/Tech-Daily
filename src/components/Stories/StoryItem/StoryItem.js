import React from "react";
import { Card } from 'react-bootstrap';
import classes from "./StoryItem.module.css";
import StoryItemRating from "./StoryItemRating";
const StoryItem = (props) => {
  return (
    <Card>
      <li className={classes.Story}>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.author}</h4>
          <div className={classes.description}>{props.description}</div>
          <button>See More</button>
        </div>
        <div>
          <StoryItemRating />
        </div>
      </li>
    </Card>
  );
};

export default StoryItem;
