import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import CustomMenuList from './index';
import CustomMenuItem from '../../atoms/CustomMenuItem';
import JsonMenuList from '../../../utils/menuList.json';

export default {
  title: 'molecules/CustomMenuList',
  decorators: [withKnobs],
};

export const Basic = () => (
  <CustomMenuList
    list={JsonMenuList}
  />
);
