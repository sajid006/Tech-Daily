import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkAuthToken from "./components/Auth/CheckAuthToken";
import Login from "./components/Auth/Login/Login";
import Logout from "./components/Auth/Logout";
import Signup from "./components/Auth/Signup/Signup";
import Header from "./components/Layout/Header";
import Stories from "./components/Stories/Stories";

function Profile() {
  const [loginIsShown, setLoginIsShown] = useState(false);
  const [signupIsShown, setSignupIsShown] = useState(false);
  const [logoutIsShown, setLogoutIsShown] = useState(false);
  const [loggedIn, isLoggedIn] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    const username = checkAuthToken();
    if(username)setLoggedIn(username);
    else resetLoggedIn();
  }, []);
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

  const showLogoutHandler = () => {
    setLogoutIsShown(true);
  };

  const hideLogoutHandler = () => {
    setLogoutIsShown(false);
  };

  const setLoggedIn = (value) => {
    isLoggedIn(value);
  };
  const resetLoggedIn = () => {
    isLoggedIn("");
  };
  const navigateToProfile = () => {
    navigate(`/profile`);
  }
  return (
    <React.Fragment>
      {!loggedIn && (
        <>
          {loginIsShown && <Login onClose={hideLoginHandler} />}
          {signupIsShown && <Signup onClose={hideSignupHandler} />}
          <Header
            loggedIn={loggedIn}
            onShowLogin={showLoginHandler}
            onShowSignup={showSignupHandler}
          />
        </>
      )}

      {loggedIn && (
        <>
        {logoutIsShown && <Logout onClose={hideLogoutHandler} />}

          <Header 
          loggedIn={loggedIn}
          onShowLogout={showLogoutHandler}
          onClickProfile={navigateToProfile}
          />
        </>
      )}
      
        <Stories />
      
    </React.Fragment>
  );
}

export default Profile;
