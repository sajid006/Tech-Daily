import React from "react";
import loadGif from "./../../assets/load-md.png";
import classes from "./LoadingModal.module.css";

function LoadingModal() {
    return (
        <div className={`${classes.main}`}>
            <img src={loadGif} alt="Loading" class="center"/>
        </div>
    );
}


export default LoadingModal;