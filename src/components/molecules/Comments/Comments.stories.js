import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Comments from './Comments';

const comments = [{
  "id": "2",
  "name": "chinni",
  "email": "chinni@gmail.com",
  "body": "this is a sample body where it represents the actual body of the comment",
  "avatarUrl":"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}];

export default {
  title: 'molecules/Comments',
  decorators: [withKnobs],
};

export const WithoutKnobs = () => (
  <Comments
    comments={comments}
  />
);
