import { MenuList } from '@material-ui/core';
import React from 'react';
import CustomMenuItem from '../../atoms/CustomMenuItem'

export default function CustomMenuList(props) {
  const list = props.list;
  if (list) {
    const customMenuItems = list.map((eachItem) => (
      <CustomMenuItem label={eachItem} />
    ));
    return (
      <MenuList>
        {customMenuItems}
      </MenuList>
    );
  } else {
    return (
      <>
      </>
    );
  }
}