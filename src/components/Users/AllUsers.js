import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import apiUrl from '../../utils/ApiUrl';
import Common from "../Common";
import classes from './AllUsers.module.css';
import UserItem from './UserItem';
const axios = require("axios").default;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          apiUrl+'users'
        );
        setUsers(res.data);
        //console.log(users);
      } catch (err) {
        //console.log(err);
        
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
    //return (<div className={classes.AllUsers}><PaginatedItems items={UsersList}></PaginatedItems></div>)
    return (<div className={classes.AllUsers}>{UsersList}</div>)
  }
   
  return (
    <>
      <Common val={showUsersList} />
      </>
  );
};

export default AllUsers;
