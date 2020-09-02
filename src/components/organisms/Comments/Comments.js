import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List, ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import CustomAvatar from "../../atoms/CustomAvatar";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CustomButton from "../../molecules/Button/CustomButton";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }, textArea: {
    width: '100%',
  }
}));

export default function Comment(props) {
  const classes = useStyles();
  const [enteredText, setEnteredText] = useState('')

  const handleChange = (event) => {
    setEnteredText({ value: event.target.value });
    event.preventDefault();
  }

  // const handleSubmit = (event) => {
  //   alert('A name was submitted: ');
  //   event.preventDefault();
  // }

  const handleOnClick = (event) => {
    console.log('A name was submitted: ');
    console.log(enteredText.value);
//call post service


    event.preventDefault();
  }

  const comments = props.comments;
  if (comments) {
    return (
      <List className={classes.root}>
        {comments.map(comment => {
          return (
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id}>
                <ListItemAvatar>
                  <CustomAvatar image={comment.image} size='small' />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant='body1'>
                    {`${comment.name} - ${comment.email}`}
                  </Typography>
                  <Typography variant='body2'>
                    {comment.body}
                  </Typography>
                </ListItemText>

              </ListItem>

              <Divider />
            </React.Fragment>
          );
        })}
        <ListItem>
          <ListItemText>
            <TextareaAutosize aria-label="empty textarea" placeholder="Leave a comment..." rowsMin={3} className={classes.textArea} onChange={handleChange} />
            <CustomButton variant="contained" color="primary" label='Submit' onClick={handleOnClick} />
          </ListItemText>
        </ListItem>
      </List>
    );
  } else {
    return (
      <>
      </>
    );
  }
};
