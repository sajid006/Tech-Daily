import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import "./index.css";
import Profile from "./Profile";

const App = () => {
return (
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/home" element={<Home/>}></Route>
    <Route exact path="/profile" element={<Profile/>}></Route>
    </Routes>
  </Router>);
};

export default App;