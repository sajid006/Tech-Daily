import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import apiUrl from "../../utils/ApiUrl";
import Common from "../Common";
import SearchStoryForm from "../Stories/SearchStoryForm";
import Stories from "../Stories/Stories";
function Home() {
  const ShowStories = () => {
    const api = apiUrl + `stories`;
    return (<div><SearchStoryForm /><Stories link={api} /></div>)
  }
  return (
    <Common val={ShowStories} />
  );
}

export default Home;
