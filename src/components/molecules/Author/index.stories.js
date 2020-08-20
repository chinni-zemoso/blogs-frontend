import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import AuthorWithAvatar from './index';

const props = {
  author: "James Gosling",
  avatarUrl: "",
};


export default {
  title: 'molecules/AuthorWithAvatar',
  decorators:[withKnobs],
};

export const WithKnobs = () => (
  <AuthorWithAvatar
    author={text('Author', '')}
    avatarUrl={text('AvatarURL', '')}
  />
);
export const WithoutKnobs = () => (
  <AuthorWithAvatar {...props} />
);