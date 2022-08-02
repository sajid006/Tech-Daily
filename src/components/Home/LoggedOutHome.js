import React, { useState } from "react";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/Signup";
import Header from "../Header/Header";

const LoggedOutHome = () => {
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
      {loginIsShown && <Login onClose={hideLoginHandler}/>}
      {signupIsShown && <Signup onClose={hideSignupHandler}/>}
      <Header onShowLogin={showLoginHandler} onShowSignup={showSignupHandler} />
    </>
  );
};

export default LoggedOutHome;
