import React, { useContext, useEffect, useState } from "react";
const axios = require("axios").default;
const AuthContext = React.createContext();
const api = "http://localhost:3000/api/v1/";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const config = {
    withCredentials: true,
  };
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const data = {};
        const userDetails = await axios.post(
          `${api}users/verifyToken`,
          data,
          config
        );
        if (userDetails.data){console.log(userDetails.data); setCurrentUser(userDetails.data);}
        else {
          setCurrentUser(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setCurrentUser(null);
      }
    };
    verifyToken();
  });
  const signup = async (userDetails) => {
    const response = await axios.post(`${api}users`, userDetails, config);
    if (response.data) {
      setCurrentUser(response.data.username);
    }
    return response;
  };
  const login = async (userDetails) => {
    const response = await axios.post(`${api}users/login`, userDetails, config);
    if (response.data) {
      console.log(response.data);
      setCurrentUser(response.data.username);
    }
    return response;
  };
  const logout = async () => {
    await axios.get(`${api}users/logout`, config);
    setCurrentUser(null);
  };
  const verify = async () => {
    const data = {};
    const userDetails = await axios.post(
      `${api}users/verifyToken`,
      data,
      config
    );
    if (userDetails.data) setCurrentUser(userDetails.data);
    else {
      setCurrentUser(null);
    }
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
    </AuthContext.Provider>
  );
}
