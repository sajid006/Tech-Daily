import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchStory from "../components/Stories/SearchStory";
import Stories from "../components/Stories/Stories";
import Common from "./Common";
const api = "http://localhost:3000/api/v1/articles"
function Home() {
  const ShowStories = () => {
    return (<div><SearchStory /><Stories link={api}/></div>)
  }
  return (
    <Common val={ShowStories} />
  );
}

export default Home;
