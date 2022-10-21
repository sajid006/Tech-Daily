import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import DateFormating from "../../utils/DateFormatting";
import { downloadFile } from "../../utils/DownloadFile";
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
    //console.log(props.authorname);
    verify();
    if (currentUser === props.authorname) {
      setEditable(true);
    } else setEditable(false);
    data = [{
      title: props.title,
      authorname: props.authorname,
      description: props.description,
      createdAt: createdAt,
      updatedAt: updatedAt,
    }]
  }, [props.authorname, currentUser]);

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
    editText = <div style={{display:"flex"}}>
      &nbsp;&nbsp;<button onClick={showEditStory}>Edit Story</button>&nbsp;&nbsp;<button onClick={showDeleteStory}>Delete Story</button>
      </div>
  } else {
    editText = <p></p>
  }
  const userDetails = "/users/" + props.authorname;
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
      {deleteForm && <DeleteStoryForm onClose={closeDeleteStory} id={props.id}/>}

      <Card>
        <li className={classes.Story}>
          <div className={classes.div}>
            <h3>{props.title}</h3>
            <h4>
              Author: <a href={userDetails}>{props.authorname}</a>
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
