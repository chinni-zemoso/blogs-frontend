import { IconButton, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function CustomAvatar(props) {
  const classes = useStyles(props);
  return <Avatar alt="image.jpg" src={props.avatarUrl}
    className={(props.size === 'large') ? classes.largeAvatar : {}}
  />

}