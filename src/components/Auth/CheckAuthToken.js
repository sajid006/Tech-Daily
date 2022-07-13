const jwt = require("jsonwebtoken");
function checkAuthToken() {
    try {
      const user = localStorage.getItem("user");
      const userToken = JSON.parse(user).accessToken;
      console.log(userToken);
      console.log(process.env.REACT_APP_JWT_SECRET);
      const decoded = jwt.verify(userToken, process.env.REACT_APP_JWT_SECRET)
        .username;
      console.log(decoded);
      return decoded;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  export default checkAuthToken;