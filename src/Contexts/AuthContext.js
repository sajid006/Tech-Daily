import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import LoadingModal from "../components/UI/LoadingModal";
import apiUrl from "../utils/ApiUrl";
const axios = require("axios").default;
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const config = {
    withCredentials: true,
  };
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verify();
  });
  const verify = async () => {
    try {
      const userToken = cookies.get("user");
      const data = {};
      //console.log(userToken);
      const userDetails = await axios.post(`${apiUrl}users/verifyToken`, data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      //console.log(userDetails);
      if (userDetails.data) {
        setCurrentUser(userDetails.data);
      } else setCurrentUser(null);
      setLoading(false);
    } catch (err) {
      //console.log(err);
      setCurrentUser(null);
    }
  };
  const signup = async (userDetails) => {
    const response = await axios.post(`${apiUrl}users/signup`, userDetails, config);
    if (response.data) {
      setCurrentUser(response.data.username);
      cookies.set("user", response.data.token, { path: "/" });
    }
    return response;
  };
  const login = async (userDetails) => {
    const response = await axios.post(
      `${apiUrl}users/login`,
      userDetails,
      config
    );
    if (response.data) {
      setCurrentUser(response.data.username);
      cookies.set("user", response.data.token, { path: "/" });
    }
    return response;
  };
  const logout = async () => {
    //await axios.get(`${apiUrl}users/logout`, config);
    cookies.set("user", "", { path: "/" });
    setCurrentUser(null);
  };
  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    verify,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* {loading && <p> LOADING.....</p>} */}
      {loading && <LoadingModal/>}
    </AuthContext.Provider>
  );
}
