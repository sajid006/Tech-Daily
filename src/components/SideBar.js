import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { NavData } from "../lib/NavData";
import styles from "./SideBar.module.css";

export default function Sidenav(props) {
    const [open, setopen] = useState(props.sideBarOn);
    const toggleOpen = () => {
      setopen(!open)
    }
    console.log(props.sideBarOn);
    useEffect(() => {
      toggleOpen();
    }, [props.sideBarOn]);
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        {NavData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}
