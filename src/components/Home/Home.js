import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Common from "../Common";
import SearchStoryForm from "../Stories/SearchStoryForm";
import Stories from "../Stories/Stories";
const api = "http://localhost:3000/api/v1/articles"
function Home() {
  const ShowStories = () => {
    return (<div><SearchStoryForm /><Stories link={api}/></div>)
  }
  return (
    <Common val={ShowStories} />
  );
}

export default Home;
