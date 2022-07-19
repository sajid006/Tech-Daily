import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./StoryItem.module.css";
import StoryItemRating from "./StoryItemRating";
const StoryItem = (props) => {
  const navigate = useNavigate();
  return (
    <Card>
      <li className={classes.Story}>
        <div>
          <h3>{props.name}</h3>
          <h4>{props.author}</h4>
          <div className={classes.description}>{props.description}</div>
          <h6>Posted At: {props.createdAt}</h6>
          <h6>Updated At: {props.updatedAt}</h6>
          <button onClick={() => navigate(`/stories/${props.id}`)}>See More</button>
        </div>
        <div>
          <StoryItemRating />
        </div>
      </li>
    </Card>
  );
};

export default StoryItem;
