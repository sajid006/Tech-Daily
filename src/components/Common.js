import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import classes from './Common.module.css';
import NavHeader from "./Header/NavHeader";
import SideBar from "./SideBar";
function Common(props) {
  const [sideBarOn, setSideBarOn] = useState(false);
  const toggleSideBar = () => {
    setSideBarOn(!sideBarOn);
  };
  return (
    <>
      <NavHeader toggleSideBar={toggleSideBar} />

      <div className={classes.common}>
        <div className={classes.sidebar}>
          <SideBar sideBarOn={sideBarOn}/>
        </div>
            
        <div className={classes.component}>
          {props.val()}
        </div>
      </div>
    </>
  );
}

export default Common;
