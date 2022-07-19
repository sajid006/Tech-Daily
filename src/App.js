import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProfiles from "./components/Profile/AllProfiles";
import Profile from "./components/Profile/Profile";
import AddStory from "./components/Stories/AddStory";
import FullStory from "./components/Stories/FullStory";
import Home from "./Home/Home";
import "./index.css";
import NotFound from "./NotFound";

const App = () => {
return (
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/home" element={<Home/>}></Route>
    <Route exact path="/profiles" element={<AllProfiles/>}></Route>
    <Route exact path="/profiles/:id" element={<Profile/>}></Route>
    <Route exact path="/stories" element={<AddStory/>}></Route>
    <Route exact path="/stories/:id" element={<FullStory/>}></Route>
    <Route exact path="*" element={<NotFound/>}></Route>
    </Routes>
  </Router>);
};

export default App;