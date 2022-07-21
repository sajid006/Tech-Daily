import React from "react";
import Card from "./components/UI/Card";
import Common from "./Home/Common";

const NotFound = () => {
    const NotFoundMessage = () => {
        return (<div style={{ textAlign: "center", height: "10rem", marginTop: "10rem" }}>
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