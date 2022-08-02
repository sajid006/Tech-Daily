import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { AuthContextProvider } from "../Contexts/AuthContext";
import Home from "./Home/Home";
import AllProfiles from "./Profile/AllProfiles";
import Profile from "./Profile/Profile";
import AddStory from "./Stories/AddStory";
import FullStory from "./Stories/FullStory";
import SearchedStories from "./Stories/SearchedStories";
import AboutUs from "./Views/AboutUs";
import NotFound from "./Views/NotFound";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/profiles" element={<AllProfiles />}></Route>
          <Route exact path="/profiles/:id" element={<Profile />}></Route>
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
