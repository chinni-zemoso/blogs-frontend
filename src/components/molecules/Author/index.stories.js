import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import AuthorWithAvatar from './index';

const props = {
  author: "James Gosling",
  avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
};


export default {
  title: 'molecules/AuthorWithAvatar',
  decorators:[withKnobs],
};

export const WithKnobs = () => (
  <AuthorWithAvatar
    author={text('Author', 'James Gosling')}
    avatarUrl={text('AvatarURL', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50')}
  />
);

export const WithoutKnobs = () => (
  <AuthorWithAvatar {...props} />
);