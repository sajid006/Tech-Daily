import React, { useState } from "react";
import Login from "../components/Auth/Login/Login";
import Signup from "../components/Auth/Signup/Signup";
import Header from "../components/Layout/Header";

const LoggedOutHome = ({loggedIn , isLoggedIn}) => {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [signupIsShown, setSignupIsShown] = useState(false);
  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  const showSignupHandler = () => {
    setSignupIsShown(true);
  };

  const hideSignupHandler = () => {
    setSignupIsShown(false);
  };
  return (
    <>
      {loginIsShown && <Login onClose={hideLoginHandler} loggedIn={loggedIn} isLoggedIn={isLoggedIn}/>}
      {signupIsShown && <Signup onClose={hideSignupHandler} loggedIn={loggedIn} isLoggedIn={isLoggedIn}/>}
      <Header onShowLogin={showLoginHandler} onShowSignup={showSignupHandler} />
    </>
  );
};

export default LoggedOutHome;
