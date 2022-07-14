import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import checkAuthToken from "../components/Auth/CheckAuthToken";
import Stories from "../components/Stories/Stories";
import LoggedInHome from "./LoggedInHome";
import LoggedOutHome from "./LoggedOutHome";

function Home() {
  const [loggedIn, isLoggedIn] = useState("");
  useEffect(() => {
    const username = checkAuthToken();
    if(username)setLoggedIn(username);
    else resetLoggedIn();
  }, []);


  const setLoggedIn = (value) => {
    isLoggedIn(value);
  };
  const resetLoggedIn = () => {
    isLoggedIn("");
  };

  return (
    <React.Fragment>
      {!loggedIn && <LoggedOutHome/>}

      {loggedIn && <LoggedInHome loggedIn={loggedIn} />}
        <Stories />
      
    </React.Fragment>
  );
}

export default Home;
