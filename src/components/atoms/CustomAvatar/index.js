import { IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    // <IconButton>
      <Avatar alt="Remy Sharp" src={props.avatarUrl}/>
    // </IconButton>
  );
}