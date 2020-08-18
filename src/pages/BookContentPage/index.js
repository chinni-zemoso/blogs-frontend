import React, { useState, useEffect } from 'react'
import BlogContentTemplate from '../../components/templates/BookContentTemplate';
import BlogContentCard from '../../components/molecules/BlogContentCard';

export default function BlogContentPage() {
    const props = {
        image: "../../assets/How-to-learn-Java.png",
        title: "Instant Java Leanrning",
        author: "James Gosling",
        avatarUrl:"",
        body: "Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for a large number of things, including software development, mobile applications, and large systems development. As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer.",
    };
    return (
        <>
            <BlogContentTemplate
                blogContentCard={
                    <BlogContentCard {...props} />}
            />
        </>
    )
}
