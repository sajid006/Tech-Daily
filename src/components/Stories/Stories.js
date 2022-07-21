import React, { useEffect, useState } from "react";
import PaginatedItems from "../Pagination/Pagination";
import classes from "./Stories.module.css";
import StoryItem from "./StoryItem/StoryItem";
const axios = require("axios").default;

const Stories = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(props.link);
        res.data.reverse();
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [props.link]);

  const StoriesList = articles.map((Story) => (
    <StoryItem
      key={Story.id}
      id={Story.id}
      name={Story.title}
      description={Story.description}
      username={Story.username}
      createdAt={Story.createdAt}
      updatedAt={Story.updatedAt}
    />
  ));

  return (
    <div className={classes.Stories}>
      <PaginatedItems items={StoriesList}></PaginatedItems>
    </div>
  );
};

export default Stories;
