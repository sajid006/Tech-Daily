import React from "react";
import Common from "../Common";
import Card from "../UI/Card";
import classes from './Views.module.css';
const NotFound = () => {
    const NotFoundMessage = () => {
        return (<div className={classes.notfound}>
        <Card>
          <h1>404</h1>
          <h2>The requested URL was not found on this server.</h2>
          <h2>
            <a href="/">Go Home</a>
          </h2>
        </Card>
      </div>)
    }
    return <Common val={NotFoundMessage} />;
    
}
export default NotFound;