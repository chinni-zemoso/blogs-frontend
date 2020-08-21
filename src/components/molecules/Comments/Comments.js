import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List, ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography
} from "@material-ui/core";
import CustomAvatar from "../../atoms/CustomAvatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

const Comment = ({ comments }) => {
  const classes = useStyles();
  return (
    <>
      
      <List className={classes.root}>
        {comments.map(comment => {
          console.log("Comment", comment);
          return (


            <React.Fragment key={comment.id}>
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemAvatar>
                  <CustomAvatar avatarUrl={comment.avatarUrl} />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant='subtitle1'>
                    {comment.name}
                  </Typography>
                  <Typography variant='body1'>
                    {`${comment.email} - ${comment.body}`}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default Comment;
