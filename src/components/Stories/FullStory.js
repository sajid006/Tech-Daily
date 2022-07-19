import React, { useEffect, useState } from "react";
import Common from "../../Home/Common";
import Card from "../UI/Card";
import OneStory from "./OneStory";
import classes from './Stories.module.css';
const axios = require("axios").default;


const FullStory = () => {
  const [article, setArticle] = useState(Object);
  const [errMessage, setErrMessage] = useState("");
  let urlElement;
  let urlElements = window.location.pathname.split("/");
  urlElement = urlElements[2];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/articles/${urlElement}`
        );
        setArticle(res.data);
      } catch (err) {
        console.log(err.message);
        setErrMessage(err.message);
      }
    }
    fetchData();
  }, []);
  const Story = (
    <OneStory
      key={article.id}
      id={article.id}
      name={article.title}
      description={article.description}
      author={article.username}
      createdAt={article.createdAt}
      updatedAt={article.updatedAt}
    />
  );
    const showFullStory = () => {
        return (<div className={classes.Stories}>
          {!errMessage && <section className={classes.Stories}>{Story}</section>}
          {errMessage && <section style={{align:"center"}} className={classes.Stories}><Card>Story Not Found</Card></section>}
          </div>);
    }
  return (
    <Common val={showFullStory} />
  );
};

export default FullStory;
