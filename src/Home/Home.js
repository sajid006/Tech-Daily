import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Stories from "../components/Stories/Stories";
import Common from "./Common";

function Home() {
  return (
    <Common val={Stories} />
  );
}

export default Home;
