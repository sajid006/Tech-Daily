import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import PaginatedItems from "../Pagination/Pagination";
import classes from "./Stories.module.css";
import StoryItem from "./StoryItem";
const axios = require("axios").default;
const Stories = (props) => {
  const [articles, setArticles] = useState([]);
  const [sorted, setSorted] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(props.link);
        if (!sorted) res.data.reverse();
        console.log(res.data);
        setArticles(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [props.link, sorted]);
  const StoriesList = articles.map((Story) => (
    
    <StoryItem
      key={Story.id}
      id={Story.id}
      name={Story.title}
      description={Story.description}
      authorname={Story.authorName}
      createdAt={Story.createdAt}
      updatedAt={Story.updatedAt}
    />
  ));

  return (
    <>
      <div className={classes.dropdown}>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item active={!sorted} onClick={()=>setSorted(false)}>New to Old</Dropdown.Item>
            <Dropdown.Item active={sorted} onClick={()=>setSorted(true)}>Old to New</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={classes.Stories}>
        <PaginatedItems items={StoriesList}></PaginatedItems>
      </div>
    </>
  );
};

export default Stories;
