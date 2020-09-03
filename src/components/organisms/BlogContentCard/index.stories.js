import React from 'react'
import { storiesOf } from '@storybook/react'
import BlogContentCard from '.'
import { text, withKnobs } from '@storybook/addon-knobs'

const props = {
  image: "https://i.ibb.co/p1vf3cv/java-learning.png",
  title: "Instant Java Leanrning",
  author: "James Gosling",
  avatarUrl: "",
  body: "Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer.",
  comments: [
    {
      "id": "2",
      "name": "Appato",
      "email": "appoto.r@gmail.com",
      "body": "Great post, thankk you "
    },
    {
      "id": "1",
      "name": "Maharana suresh",
      "email": "suresh.m@gmail.com",
      "body": "The thought of java learning makes more clear about the content provided in this post"
    }
  ]
};

export default {
  title: 'organisms/BlogContentCard',
  decorators: [withKnobs],
};

export const Basic = () => {
  const name = text('Name', 'Ramu');
  const email = text('EMail', 'ramu.minla@gmail.com');
  const body = text('Body', 'Java is a general-purpose programming language .');
  const avatarUrl = text('AvatarUrl', 'https://gravatar.com/avatar/3c710d74b01a45a93064c85bfc3edb19?s=400&d=robohash&r=x');

  const comments = [{
    "id": "2",
    "name": `${name}`,
    "email": `${email}`,
    "body": `${body}`,
    "avatarUrl": `${avatarUrl}`
  }];
  return <BlogContentCard
    image={text('Image', 'https://i.ibb.co/p1vf3cv/java-learning.png')}
    title={text('Title', 'Instant Java Leanrning')}
    author={text('Author', 'James Gosling')}
    avatarUrl={text('AvatarURL', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50')}
    body={text('Body', 'Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer.')}
    comments={comments}
  />
};
