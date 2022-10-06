import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import apiUrl from "../../utils/ApiUrl";
import Common from "../Common";
import SearchStoryForm from "../Stories/SearchStoryForm";
import Stories from "../Stories/Stories";
function Home() {
  const [api, setApi] = useState(apiUrl + `stories`);
  useEffect(() => {
    setApi(apiUrl + `stories`);
  },[])
  const ShowStories = () => {
    return (<div><SearchStoryForm /><Stories link={api} /></div>)
  }
  return (
    <Common val={ShowStories} />
  );
}

export default Home;
