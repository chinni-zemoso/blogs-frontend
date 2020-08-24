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
    title: 'organism/BlogContentCard',
    decorators: [withKnobs],
};

export const WithKnobs = () => (
    <BlogContentCard
        image={text('Image', '')}
        title={text('Title', '')}
        author={text('Author', '')}
        avatarUrl={text('AvatarURL', '')}
        body={text('Body', '')}
    />
);

export const WithoutKnobs = () => (
    <BlogContentCard {...props} />
);