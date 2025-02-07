import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Common from "../Common";
import AddStoryForm from "./AddStoryForm";
function AddStory() {
    const currentUser = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (!currentUser){
            alert('You must be logged in to add a story')
            navigate('/');
        }
      }, [currentUser]);
  return (
    <Common val={AddStoryForm} />
  );
}

export default AddStory;
