import { IconButton, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: '35px',
    height: '35px',
  },
}));

export default function CustomAvatar(props) {
  const classes = useStyles(props);
  return <Avatar alt="image.jpg" src={props.image}
    className={(props.size === 'small') ? classes.smallAvatar : {}}
  />

}