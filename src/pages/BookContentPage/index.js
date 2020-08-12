import React, { useState, useEffect } from 'react'
import BlogContentTemplate from '../../components/templates/BookContentTemplate';
import BlogContentCard from '../../components/molecules/BlogContentCard';
import LearnJavaImage from '../../assets/How-to-learn-Java.png'

export default function BlogContentPage() {
    return (
        <>
            <BlogContentTemplate
                blogContentCard={<BlogContentCard image={'../../assets/How-to-learn-Java.png'}/>}
            />
        </>
    )
}
