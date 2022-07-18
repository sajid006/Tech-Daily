import React, { useEffect, useState } from "react";
import SideBar from "../../Home/SideBar";
import NavHeader from "../Layout/NavHeader";
import Card from "../UI/Card";
import OneStory from "./OneStory";
import classes from './Stories.module.css';
const axios = require("axios").default;

const FullStory = () => {
  const [article, setArticle] = useState(Object);
  const [sideBarOn, setSideBarOn] = useState(false);
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
  const toggleSideBar = () => {
    setSideBarOn(!sideBarOn);
  };
  const Story = (
    <OneStory
      key={article.id}
      id={article.id}
      name={article.title}
      description={article.description}
      author={article.username}
    />
  );

  return (
    <>
      <NavHeader toggleSideBar={toggleSideBar} />
      <div style={{ height: "100rem", display: "flex" }}>
        {sideBarOn && (
          <div
            style={{
              marginTop: "5rem",
              height: "50%",
              top: "5rem",
              position: "sticky",
              backgroundColor: "black",
            }}
          >
            <SideBar />
          </div>
        )}
        <div>
        {!errMessage && <section className={classes.Stories}>{Story}</section>}
        {errMessage && <section style={{align:"center"}} className={classes.Stories}><Card>Story Not Found</Card></section>}
        </div>
        
      </div>
    </>
  );
};

export default FullStory;
