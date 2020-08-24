import React, { useState, useEffect } from 'react'
import BlogContentTemplate from '../../components/templates/BookContentTemplate';
import BlogContentCard from '../../components/organisms/BlogContentCard';
import blogsList from '../../utils/blogList.json'
import { useHttp } from '../../utils/hooks/http'
import { urls } from '../../utils/serviceConstants'
import CustomMenu from '../../components/atoms/CustomMenu';
import CustomMenuList from '../../components/molecules/CustomMenuList';
import CustomMenuItem from '../../components/atoms/CustomMenuItem';

export default function BlogContentPage() {
    console.log(blogsList)
    if (blogsList) {
        const blogContentCardList = blogsList.map((blog) => (
            <BlogContentCard {...blog} />
        ))
        return (
            <>
                <BlogContentTemplate
                    blogContentCardList={blogContentCardList}
                />
            </>
        )
    } else {
        return <></>;
    }
}