import React from 'react';
import CustomAvatar from '../../atoms/CustomAvatar';
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    'box-sizing': 'content-box',
    display: 'flex',
    position: 'row',
  }, by: {
    display: 'block',
    'padding-left': '5px',
    'padding-top': '5px',
    'overflow': "hidden",
    'whiteSpace': "nowrap",
    'textOverflow': "ellipsis",
  }
}));

export default function AuthorWithAvatar(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CustomAvatar {...props} />
      <Typography className={classes.by}> by {props.author}</Typography>
    </div >
  );

}