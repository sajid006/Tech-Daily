import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { AuthContextProvider } from "../Contexts/AuthContext";
import Home from "./Home/Home";
import AddStory from "./Stories/AddStory";
import FullStory from "./Stories/FullStory";
import SearchedStories from "./Stories/SearchedStories";
import AllUsers from "./Users/AllUsers";
import User from "./Users/User";
import AboutUs from "./Views/AboutUs";
import NotFound from "./Views/NotFound";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/users" element={<AllUsers />}></Route>
          <Route exact path="/users/:id" element={<User />}></Route>
          <Route exact path="/stories/new" element={<AddStory />}></Route>
          <Route exact path="/stories/:id" element={<FullStory />}></Route>
          <Route
            exact
            path="/stories/search/:id"
            element={<SearchedStories />}
          ></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
        </Routes>
      </AuthContextProvider>
      <Footer/>
    </Router>
    
  );
};

export default App;
