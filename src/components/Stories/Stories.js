import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import PaginatedItems from "../Pagination/Pagination";
import classes from "./Stories.module.css";
import StoryItem from "./StoryItem";
const axios = require("axios").default;
const Stories = (props) => {
  const [articles, setArticles] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        //setPageNumber(1);
        console.log(pageNumber);
        const res = await axios.get(props.link+"?pageNumber="+pageNumber+"&pageSize=3");
        setPageCount(res.data.totalPages);
        console.log(res.data.data);
        //if (!sorted) res.data.data.reverse();
        setArticles(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [pageNumber, sorted, props.link]);
  const changePageNumber = (number) => {
    console.log(number);
    setPageNumber(number);
    console.log(pageNumber);
  }
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
        <PaginatedItems items={StoriesList} pageNumber={pageNumber} pageCount={pageCount} changePageNumber={changePageNumber}></PaginatedItems>
      </div>
    </>
  );
};

export default Stories;
