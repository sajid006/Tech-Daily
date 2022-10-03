import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
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
      const userToken = cookies.get('user');
      const data = {};
      const userDetails = await axios.post(
        `${apiUrl}users/verifyToken`,
        data,{
        headers: {
          Authorization: `Bearer ${userToken}`
      }
    },
        config
      );
      console.log(userDetails);
      if (userDetails.data){setCurrentUser(userDetails.data);}
      else setCurrentUser(null);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setCurrentUser(null);
    }
  };
  const signup = async (userDetails) => {
    const response = await axios.post(`${apiUrl}users`, userDetails, config);
    if (response.data) {
      setCurrentUser(response.data.username);
    }
    return response;
  };
  const login = async (userDetails) => {
    const response = await axios.post(`${apiUrl}users/login`, userDetails, config);
    if (response.data) {
      console.log(response.data);
      console.log("dlks "+ response.data.username);
      setCurrentUser(response.data.username);
      
      cookies.set('user', response.data.token, { path: '/'});
      // console.log(cookies.get('user'));
    }
    return response;
  };
  const logout = async () => {
    await axios.get(`${apiUrl}users/logout`, config);
    cookies.set('user', '', { path: '/'});
    setCurrentUser(null);
  };
  // const verify = async () => {
  //   const data = {};
  //   const userDetails = await axios.post(
  //     `${apiUrl}users/verifyToken`,
  //     data,
  //     config
  //   );
  //   if (userDetails.data) setCurrentUser(userDetails.data);
  //   else {
  //     setCurrentUser(null);
  //   }
  // };
  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    verify
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
