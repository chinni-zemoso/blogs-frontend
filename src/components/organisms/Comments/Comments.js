import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Typography } from "@material-ui/core";
import CustomAvatar from "../../atoms/CustomAvatar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CustomButton from "../../molecules/Button/CustomButton";
import { URL } from "../../../utils/serviceConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  textArea: {
    width: "100%",
  },
}));

export default function Comment(props) {
  const classes = useStyles();
  const [enteredText, setEnteredText] = useState("");

  const handleChange = (event) => {
    setEnteredText({ value: event.target.value });
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    //call post service
    var commentedData = {};
    commentedData.postId = props.postId;
    commentedData.userId = props.loggedinUser.id;
    commentedData.body = enteredText.value;
    commentedData.postedOn = new Date().toISOString().slice(0, 19).replace("T", " ");

    console.log("Data, to store ");
    console.log(JSON.stringify(commentedData));
    if (commentedData) {
      fetch(URL.storeCommentsURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify(commentedData),
      });
    }
    window.location.reload(false);
    event.preventDefault();
  };

  const comments = props.comments;
  if (comments) {
    return (
      <List className={classes.root}>
        {comments.map((comment) => {
          return (
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id}>
                <ListItemAvatar>
                  <CustomAvatar image={comment.image} size="small" />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="body1">{`${comment.name} - ${comment.email}`}</Typography>
                  <Typography variant="body2">{comment.body}</Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
        <ListItem>
          <ListItemText>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Leave a comment..."
              rowsMin={3}
              className={classes.textArea}
              onChange={handleChange}
            />
            <CustomButton variant="contained" color="primary" label="Submit" onClick={handleSubmit} />
          </ListItemText>
        </ListItem>
      </List>
    );
  } else {
    return <></>;
  }
}
