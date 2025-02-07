import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoggedInHome from "../Home/LoggedInHome";
import LoggedOutHome from "../Home/LoggedOutHome";
import classes from './NavHeader.module.css';
import { DensityMedium } from "@mui/icons-material";
import { verify } from "../../store/slices/authSlice";

const NavHeader = (props) => {
  const currentUser = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(verify);
  }, [currentUser]);

  return (
    <div className={classes.navheader}>
      <div>
        <button onClick={props.toggleSideBar} className="navbutton">
          <DensityMedium />
        </button>
      </div>
      <div>{currentUser ? <LoggedInHome /> : <LoggedOutHome />}</div>
    </div>
  );
};
export default NavHeader;
