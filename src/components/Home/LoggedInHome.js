import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Logout from "../Auth/Logout";
import Header from "../Header/Header";
const LoggedInHome = () => {
  const [logoutIsShown, setLogoutIsShown] = useState(false);
  const { currentUser} = useAuth();
  let navigate = useNavigate();
  const showLogoutHandler = () => {
    setLogoutIsShown(true);
  };

  const hideLogoutHandler = () => {
    setLogoutIsShown(false);
  };

  const navigateToProfile = () => {
    navigate(`/profiles/${currentUser}`);
  };
  return (
    <>
      {logoutIsShown && <Logout onClose={hideLogoutHandler}/>}
      <Header
        onShowLogout={showLogoutHandler}
        onClickProfile={navigateToProfile}
      />
    </>
  );
};

export default LoggedInHome;
