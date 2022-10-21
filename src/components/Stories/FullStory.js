import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiUrl from "../../utils/ApiUrl";
import Common from "../Common";
import Card from "../UI/Card";
import OneStory from "./OneStoryItem";
import classes from './Stories.module.css';
const axios = require("axios").default;


const FullStory = () => {
  const [article, setArticle] = useState(Object);
  const [errMessage, setErrMessage] = useState("");
  const [updated, setUpdated] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          apiUrl + `stories/${id}`
        );
        setArticle(res.data);
      } catch (err) {
        //console.log(err.message);
        setErrMessage(err.message);
      }
    }
    fetchData();
  }, [updated]);
  const toggleSetUpdated = () => {
    setUpdated(!updated);
  }
  const Story = (
    <OneStory
      key={article.id}
      id={article.id}
      title={article.title}
      description={article.description}
      authorname={article.authorName}
      createdAt={article.createdAt}
      updatedAt={article.updatedAt}
      toggleSetUpdated={toggleSetUpdated}
    />
  );
    const showFullStory = () => {
        return (<div className={classes.Stories}>
          {!errMessage && <section className={classes.Stories}>{Story}</section>}
          {errMessage && <section className={classes.Stories}><Card>Story Not Found</Card></section>}
          </div>);
    }
  return (
    <Common val={showFullStory} />
  );
};

export default FullStory;
