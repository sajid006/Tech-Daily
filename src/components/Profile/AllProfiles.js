import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Common from "../Common";
import PaginatedItems from "../Pagination/Pagination";
import classes from './AllProfiles.module.css';
import UserItem from './UserItem';
const axios = require("axios").default;
const AllProfiles = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/users`
        );
        setUsers(res.data);
        console.log(users);
      } catch (err) {
        console.log(err);
        
      }
    }
    
    fetchData();
  }, []);
  const UsersList = users.map((User) => (
    <UserItem
      key={User.username}
      username={User.username}
      name={User.name}
      email={User.email}
      createdAt={User.createdAt}
      updatedAt={User.updatedAt}
    />
  ));
  const showUsersList = () => {
    return (<div className={classes.AllProfiles}><PaginatedItems items={UsersList}></PaginatedItems></div>)
  }
   
  return (
    <>
      <Common val={showUsersList} />
      </>
  );
};

export default AllProfiles;
