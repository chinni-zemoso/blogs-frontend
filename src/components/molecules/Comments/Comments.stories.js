import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Comments from './Comments';

const comments = [{
  "id": "2",
  "name": "Ramu",
  "email": "ramu.minla@gmail.com",
  "body": "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.",
  "avatarUrl": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}];

export default {
  title: 'molecules/Comments',
  decorators: [withKnobs],
};

export const Basic = () => (
  <Comments
    comments={comments}
  />
);
