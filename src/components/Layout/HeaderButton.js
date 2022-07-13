import React from "react";
import classes from "./HeaderButton.module.css";
const HeaderCartButton = (props) => {
  const btnClasses = `${classes.button}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  );
};

export default HeaderCartButton;
