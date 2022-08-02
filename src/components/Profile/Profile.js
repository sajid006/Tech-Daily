import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import DateFormating from "../../utils/DateFormatting";
import Common from "../Common";
import Stories from "../Stories/Stories";
import Card from "../UI/Card";
import DeleteAccount from "./DeleteAccount";
import UpdateProfile from "./UpdateProfile";
const axios = require("axios").default;
const Profile = () => {
  const [user, setUser] = useState("");
  const [update, setUpdate] = useState("");
  const [deleteBar, setDeleteBar] = useState("");
  const [editable, setEditable] = useState(false);
  const {id} = useParams();
  const [api, setApi] = useState(`http://localhost:3000/api/v1/users/${id}/articles`);
  const { currentUser, verify } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/users/${id}`
        );
        setUser(res.data);
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    }
    setApi(`http://localhost:3000/api/v1/users/${id}/articles`);
    fetchData();
    verify();
    console.log(id);
    if (id === currentUser) setEditable(true);
    else setEditable(false);
  }, [update, id, currentUser]);
  const showUpdateHandler = () => {
    setUpdate(true);
  };
  const hideUpdateHandler = () => {
    setUpdate(false);
  };
  const showDeleteHandler = () => {
    setDeleteBar(true);
  };
  const hideDeleteHandler = () => {
    setDeleteBar(false);
  };

  const showProfile = () => {
    return (
      <>
        <div className="profile">
          <Card>
            <div>
              <h3>Username: {user.username}</h3>
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <h3>Account created at: {DateFormating(user.createdAt)}</h3>
              <h3>Account last updated: {DateFormating(user.updatedAt)}</h3>
            </div>
            {editable && (
              <div>
                <Button variant="primary" size="lg" onClick={showUpdateHandler}>
                  Update Profile
                </Button>{" "}
                <Button variant="danger" size="lg" onClick={showDeleteHandler}>
                  Delete Account
                </Button>
              </div>
            )}
          </Card>
          <Card>
            <div style={{ width: "100%", height: "2rem", color: "blue" }}>
              <h4>&nbsp;&nbsp;All stories of {user.name}</h4>
            </div>
          </Card>
        </div>
        <div style={{ marginTop: "-5rem" }}>
          <Stories link={api} />
        </div>
      </>
    );
  };
  return (
    <>
      {update && (
        <UpdateProfile
          onClose={hideUpdateHandler}
          username={currentUser}
          email={user.email}
          name={user.name}
        />
      )}
      {deleteBar && (
        <DeleteAccount onClose={hideDeleteHandler} username={currentUser} />
      )}
      <Common val={showProfile} />
    </>
  );
};

export default Profile;
