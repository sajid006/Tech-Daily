import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import apiUrl from "../../utils/ApiUrl";
import Common from "../Common";
import SearchStoryForm from "../Stories/SearchStoryForm";
import Stories from "../Stories/Stories";

function Home() {
  const ShowStories = () => {
    return (<div><SearchStoryForm /><Stories link={apiUrl+`stories`}/></div>)
  }
  return (
    <Common val={ShowStories} />
  );
}

export default Home;
