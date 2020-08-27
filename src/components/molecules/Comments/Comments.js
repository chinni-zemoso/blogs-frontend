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
}));

export default function Comment(props) {
  const classes = useStyles();
  const comments = props.comments;
  if (comments) {
    return (
      <List className={classes.root}>
        {comments.map(comment => {
          return (
            <React.Fragment key={comment.id}>
              <ListItem key={comment.id}>
                <ListItemAvatar>
                  <CustomAvatar avatarUrl={comment.avatarUrl} />
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
      </List>
    );
  } else {
    return (
      <>
      </>
    );
  }
};
