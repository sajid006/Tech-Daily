import React from "react";
import Robot from "../../assets/Robot.jpg";
import Common from "../Common";
import Card from "../UI/Card";

const AboutUs = () => {
  const AboutMessage = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem", width: "90%", marginLeft: "5%"}}>
        <Card>
        <img src={Robot} alt="Sajid" style={{width: "15rem", height: "15rem", borderRadius: "50%"}}/>
        <h1>Owner: Sajid Hasan</h1>
        <h2>Email: sajid.hasan@cefalo.com</h2>
        <h2>Contact: 01521462376</h2>
        </Card>
      </div>
    );
  };
  return <Common val={AboutMessage} />;
};
export default AboutUs;
