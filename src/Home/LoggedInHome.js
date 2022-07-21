import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Auth/Logout";
import Header from "../components/Layout/Header";
const LoggedInHome = (props) => {
  const [logoutIsShown, setLogoutIsShown] = useState(false);
  let navigate = useNavigate();
  const showLogoutHandler = () => {
    setLogoutIsShown(true);
  };

  const hideLogoutHandler = () => {
    setLogoutIsShown(false);
  };

  const navigateToProfile = () => {
    navigate(`/profiles/${props.loggedIn}`);
  };
  return (
    <>
      {logoutIsShown && <Logout onClose={hideLogoutHandler} resetLoggedIn={props.resetLoggedIn} />}
      <Header
        loggedIn={props.loggedIn}
        onShowLogout={showLogoutHandler}
        onClickProfile={navigateToProfile}
      />
    </>
  );
};

export default LoggedInHome;
