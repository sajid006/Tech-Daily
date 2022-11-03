import React, { useContext, useEffect, useState } from "react";
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
  const userToken = localStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const data = {};
        const userDetails = await axios.post(
          `${apiUrl}users/verifyToken`,
          data,
          {
            headers: {
              'Authorization': `Bearer ${userToken}`
            },
          });
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
    const response = await axios.post(`${apiUrl}users`, userDetails, config);
    if (response.data) {
      localStorage.setItem('user', response.data.token);
      setCurrentUser(response.data.username);
    }
    return response;
  };
  const login = async (userDetails) => {
    const response = await axios.post(`${apiUrl}users/login`, userDetails, config);
    if (response.data) {
      localStorage.setItem('user', response.data.token);
      setCurrentUser(response.data.username);
    }
    return response;
  };
  const logout = async () => {
    localStorage.setItem('user', '');
    await axios.get(`${apiUrl}users/logout`, config);
    setCurrentUser(null);
  };
  const verify = async () => {
    const data = {};
    const userDetails = await axios.post(
      `${apiUrl}users/verifyToken`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${userToken}`
        },
      });
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
      {loading && <LoadingModal/>}
    </AuthContext.Provider>
  );
}

