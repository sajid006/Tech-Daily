import React, { useEffect, useState } from "react";
import classes from './Stories.module.css';
import StoryItem from './StoryItem/StoryItem';
const axios = require('axios').default;

const AvailableStories =  () => {
  const [articles, setArticles] = useState([]);
  useEffect( () => { 
      async function fetchData() {
          try {
              const res = await axios.get('http://localhost:3000/api/v1/articles'); 
              setArticles(res.data);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  const StoriesList = articles.map((Story) => (
    <StoryItem
      key={Story.id}
      id={Story.id}
      name={Story.title}
      description={Story.description}
      author={Story.username}
    />
  ));

  return (
    <section className={classes.Stories}>
      {StoriesList}
    </section>
  );
};

export default AvailableStories;
