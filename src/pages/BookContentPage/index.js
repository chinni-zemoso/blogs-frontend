import React, { useState, useEffect } from 'react'
import BlogContentTemplate from '../../components/templates/BookContentTemplate';
import BlogContentCard from '../../components/organisms/BlogContentCard';
import { useHttp } from '../../utils/hooks/http'
import {urls }from '../../utils/serviceConstants'

export default function BlogContentPage() {

    const [blogsList] = useHttp(urls.getAllBlogsUrl, [blogsList]);
    console.log(blogsList)
    if (blogsList) {
        const blogContentCardList = blogsList.map((blog) => (
            <BlogContentCard {...blog} />
        ))
        return (
            <>
                <BlogContentTemplate
                    blogContentCardList={blogsList}
                />
                
            </>
        )
    }else{
        return <></>;
    }


}
