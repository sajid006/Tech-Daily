import React from "react";
import DateFormating from "../../utils/DateFormatting";
import Card from "../UI/Card";
import classes from "./UserItem.module.css";
const StoryItem = (props) => {

  const profileLink= "/profiles/"+ props.username;
  return (
    <Card>
      <li className={classes.Story}>
        <div>
        <h3>Username: <a href={profileLink}>{props.username}</a></h3>
        <h3>Name: {props.name}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Account created at: {DateFormating(props.createdAt)}</h3>
        <h3>Account last updated: {DateFormating(props.updatedAt)}</h3>
        </div>
      </li>
    </Card>
  );
};

export default StoryItem;
