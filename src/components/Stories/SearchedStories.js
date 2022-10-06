import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiUrl from "../../utils/ApiUrl";
import Common from "../Common";
import SearchStory from "./SearchStoryForm";
import Stories from "./Stories";

function SearchedStories() {
  const {id} = useParams();
  const [api,setApi] = useState(`${apiUrl}stories/search/${id}`);
  useEffect(() => {
    setApi(`${apiUrl}/stories/search/${id}`);
  },[id]);
  
  const ShowStories = () => {
    return (
      <div>
        <SearchStory searchValue={id}/>
        <Stories link={api} />
      </div>
    );
  };
  return <Common val={ShowStories} />;
}

export default SearchedStories;
