import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import DateFormating from "../../utils/DateFormatting";
import { downloadFile } from "../../utils/DownloadFile";
import Modal from "../Portals/Modal";
import Card from "../UI/Card";
import DeleteStoryForm from "./DeleteStoryForm";
import classes from "./StoryItem.module.css";
import UpdateStoryForm from "./UpdateStoryForm";
const OneStory = (props) => {
  const [editable, setEditable] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { verify, currentUser } = useAuth();
  let data;
  useEffect(() => {
    console.log(props.username);
    verify();
    if (currentUser === props.username) {
      setEditable(true);
    } else setEditable(false);
    data = [{
      title: props.title,
      username: props.username,
      description: props.description,
      createdAt: createdAt,
      updatedAt: updatedAt,
    }]
  }, [props.username, currentUser]);

  const showEditStory = () => {
    setEditForm(true);
  };
  const closeEditStory = () => {
    setEditForm(false);
  };

  const showDeleteStory = () => {
    setDeleteForm(true);
  };
  const closeDeleteStory = () => {
    setDeleteForm(false);
  };
  let editText;
  if (editable) {
    editText = (
      <div className={classes.sidediv}>
        &nbsp;&nbsp;<button onClick={showEditStory}>Edit Story</button>
        &nbsp;&nbsp;
        <button onClick={() => setIsOpen(true)}>Delete Story</button>
      </div>
    );
  } else {
    editText = <p></p>
  }
  const userUser = "/users/" + props.username;
  const createdAt = DateFormating(props.createdAt);
  const updatedAt = DateFormating(props.updatedAt);

  return (
    <div>
      {editForm && (
        <UpdateStoryForm
          title={props.title}
          description={props.description}
          onClose={closeEditStory}
          id={props.id}
          toggleSetUpdated={props.toggleSetUpdated}
        />
      )}
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DeleteStoryForm id={props.id} handleClose={() => setIsOpen(false)} />
      </Modal>

      <Card>
        <li className={classes.Story}>
          <div className={classes.div}>
            <h3>{props.title}</h3>
            <h4>
              Author: <a href={userUser}>{props.username}</a>
            </h4>
            <div className={classes.description}>{props.description}</div>
            <h6>Posted At: {createdAt}</h6>
            <h6>Updated At: {updatedAt}</h6>
          </div>
        </li>
      </Card>
      <Card>
        {editText}
        <p></p>
        <h4>
          &nbsp;&nbsp;Download as:{" "}
          <Button
            variant="success"
            onClick={() => downloadFile(props.id, props.title, "application/json")}
          >
            JSON
          </Button>{' '}
          <Button
            variant="danger"
            onClick={() => downloadFile(props.id, props.title, "application/xml")}
          >
            XML
          </Button>{' '}
          <Button
            variant="primary"
            onClick={() => downloadFile(props.id, props.title, "text/plain")}
          >
            Plain Text
          </Button>{' '}
          <Button
            variant="warning"
            onClick={() => downloadFile(props.id, props.title, "text/html")}
          >
            HTML
          </Button>
        </h4>
      </Card>
    </div>
  );
};

export default OneStory;
