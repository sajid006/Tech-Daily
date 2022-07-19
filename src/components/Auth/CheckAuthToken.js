import Cookies from "universal-cookie";
const jwt = require("jsonwebtoken");

const checkAuthToken = () => {
    try {
      const cookies = new Cookies();
      const userToken = cookies.get('user');
      const decoded = jwt.verify(userToken, process.env.REACT_APP_JWT_SECRET)
        .username;
      console.log(decoded);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  export default checkAuthToken;