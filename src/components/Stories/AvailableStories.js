import { useEffect, useState } from "react";
import Card from '../UI/Card';
import classes from './AvailableStories.module.css';
import StoryItem from './StoryItem/StoryItem';
const axios = require('axios').default;


const DUMMY_Stories = [
  {
    id: 'm1',
    name: 'Google Lens',
    description: 'Google Lens is best described as a search engine for the real world.',
    author: 'Sajid'
  },
  {
    id: 'm2',
    name: 'Internet Explorer',
    description: 'For most of the early 2000s, Internet Explorer was the most widely used web browser, reaching a peak of about 95 percent market share by 2003.',
    author: 'Sajid'
  },
  {
    id: 'm3',
    name: 'Microsoft Games',
    description: 'Microsoft has started working for developing games inside Microsoft Teams.',
    author: 'Sajid'
  },
  {
    id: 'm4',
    name: 'Oracle stock',
    description: 'Oracle Corp. shares jumped the most in six months after the company reported results suggesting that it will help accelerate growth.',
    author: 'Sajid'
  },
];

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
      <Card>
        <ul>{StoriesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableStories;
