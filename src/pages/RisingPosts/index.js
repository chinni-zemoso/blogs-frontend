import React, { useState, useEffect } from "react";
import BlogContentTemplate from "../../components/templates/BookContentTemplate";
import BlogContentCard from "../../components/organisms/BlogContentCard";
import blogsList from "../../utils/blogList.json";
import EmptyState from "../../components/organisms/EmptyState";
import emptyScreenDataJson from "../../utils/emptyScreenData.json";
import { getAllPosts } from "../../services/BlogPostServices";

export default function RisingPosts(props) {
  console.log("RP--blogsList");
  console.log(blogsList);
  const [framedData, setFramedData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const framedData = await getAllPosts();
      setFramedData(framedData);
    }
    fetchData();
  }, []);

  if (!framedData) {
    console.log("RP--json-");
    console.log(framedData);
    const blogContentCardList = framedData.map((data) => <BlogContentCard {...data} {...props} />);

    return (
      <>
        <BlogContentTemplate blogContentCardList={blogContentCardList} />
      </>
    );
  } else {
    return (
      <>
        <EmptyState {...emptyScreenDataJson} />
      </>
    );
  }
}
