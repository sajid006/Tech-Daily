
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Login from './components/Auth/Login/Login';
import Header from './components/Layout/Header';
import Stories from './components/Stories/Stories';
function App() {

  const [loginIsShown, setLoginIsShown] = useState(false);
  const [signupIsShown, setSignupIsShown] = useState(false);
  const [LoggedIn, isLoggedIn] = useState(false);

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  const showSignupHandler = () => {
    setSignupIsShown(true);
  };

  const hideSignupHandler = () => {
    setSignupIsShown(false);
  };

  const setLoggedIn = () => {
    isLoggedIn(true);
  }
  const resetLoggedIn = () => {
    isLoggedIn(false);
  }
  return (
    <React.Fragment>
 
    
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      <Header onShowLogin={showLoginHandler} />
      <Card>
        <Stories />
      </Card>
    </React.Fragment>
  );
}

export default App;
