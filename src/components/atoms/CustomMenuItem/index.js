import { makeStyles, MenuList, MenuItem } from '@material-ui/core';
import React from 'react';

export default function CustomMenuItem(props) {
  const label = props.label;
  return (
    <MenuItem>
      {label}
    </MenuItem>
  );
}