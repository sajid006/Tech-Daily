import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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

      <div style={{display: "flex" }}>
        {sideBarOn && (
          <div style={{
            marginTop: "5rem",
            top: "5rem",
            position: "sticky",
            backgroundColor: "black"
          }}>
            <SideBar />
          </div>
        )}

        <div style={{width:"100%", marginBlockEnd:"10rem"}}>
          {props.val()}
        </div>
      </div>
    </>
  );
}

export default Common;
