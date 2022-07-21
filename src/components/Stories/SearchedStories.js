import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Common from "../../Home/Common";
import SearchStory from "./SearchStory";
import Stories from "./Stories";

function SearchedStories() {
  const {id} = useParams();
  const [api,setApi] = useState("");
  useEffect(() => {
    setApi(`http://localhost:3000/api/v1/articles/search/${id}`);
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
