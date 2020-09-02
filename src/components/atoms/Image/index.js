import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "530px",
    height: "190px",
    marginTop: "15px",
    marginLeft: "6px",
    marginRight: "8px"
  },
}));

export default function Image(props) {
  const classes = useStyles();
  return <img {...props} className={classes.img} />
}