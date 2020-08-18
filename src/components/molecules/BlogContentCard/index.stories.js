import React from 'react'
import { storiesOf } from '@storybook/react'
import BlogContentCard from '.'
import { text, withKnobs } from '@storybook/addon-knobs'

const props = {
    image: "../../assets/How-to-learn-Java.png",
    title: "Instant Java Leanrning",
    author: "James Gosling",
    avatarUrl: "",
    body: "Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer.",
};

export default {
    // component: BlogContentCard,
    title: 'molecules/BlogContentCard',
    decorators: [withKnobs],
};

export const WithKnobs = () => (
    <BlogContentCard
        title={text('Title', '')}
        author={text('Author', '')}
        avatarUrl={text('AvatarURL', '')}
        body={text('Body', '')}
    />
);
export const WithoutKnobs = () => (
    <BlogContentCard {...props}/>
);