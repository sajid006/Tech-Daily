import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Common from "../../Home/Common";
import checkAuthToken from "../Auth/CheckAuthToken";
import AddStoryForm from "./AddStoryForm";
function AddStory() {
    const navigate = useNavigate();
    useEffect(() => {
        const username = checkAuthToken();
        if (!username){
            alert('You must be logged in to add a story')
            navigate('/');
        }
      }, []);
  return (
    <Common val={AddStoryForm} />
  );
}

export default AddStory;
