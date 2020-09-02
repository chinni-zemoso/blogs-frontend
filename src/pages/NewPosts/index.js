import React from 'react'
import BlogContentTemplate from '../../components/templates/BookContentTemplate';
import BlogContentCard from '../../components/organisms/BlogContentCard';
import blogsList from '../../utils/blogList.json'
import { useHttp } from '../../utils/hooks/http'
import { urls } from '../../utils/serviceConstants'
import EmptyState from '../../components/organisms/EmptyState'
import emptyScreenDataJson from '../../utils/emptyScreenData.json'

export default function NewPosts() {
    console.log(blogsList)
    const blogsList = [];


    if (blogsList) {
        const blogContentCardList = blogsList.map((blog) => {
           return <BlogContentCard {...blog} />
        })
        return (
            <>
                <BlogContentTemplate
                    blogContentCardList={blogContentCardList}
                />
            </>
        )
    } else {
        return (
            <>
                <EmptyState {...emptyScreenDataJson} />
            </>);
    }
}