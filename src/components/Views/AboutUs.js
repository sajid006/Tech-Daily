import React from "react";
import Robot from "../../assets/Robot.jpg";
import Common from "../Common";
import Card from "../UI/Card";
import classes from './Views.module.css';
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
const AboutUs = () => {
  const AboutMessage = () => {
    return (
      <div className={classes.aboutus}>
        <Card>
        <img src={Robot} alt="Sajid" className={classes.aboutimg}/>
        <h1>Owner: Sajid Hasan</h1>
        <h2>Contact: 01521462376</h2>
        <SocialMediaLinks />
        </Card>
      </div>
    );
  };
  return <Common val={AboutMessage} />;
};
export default AboutUs;
