import React from "react";
import { useNavigate } from "react-router-dom";
import DateFormating from "../../utils/DateFormatting";
import Card from "../UI/Card";
import classes from "./StoryItem.module.css";
const StoryItem = (props) => {
  const navigate = useNavigate();
  const createdAt = DateFormating(props.createdAt);
  const updatedAt = DateFormating(props.updatedAt);
  const userProfile = "/profiles/"+props.username;
  let description =props.description;
  if(description.length>300){
    description = description.slice(0,300);
    description = description.concat("...");
  }
  
  return (
    <Card>
      <li className={classes.Story}>
        <div>

        
          <h3>{props.name}</h3>
          <h4>Author: <a href={userProfile}>{props.username}</a></h4>
          <div className={classes.description}>{description}</div>
          <h6>Posted At: {createdAt}</h6>
          <h6>Updated At: {updatedAt}</h6>
          <button style={{fontSize: "12px"}} onClick={() => navigate(`/stories/${props.id}`)}>See More</button>
          </div>
      </li>
    </Card>
  );
};

export default StoryItem;
