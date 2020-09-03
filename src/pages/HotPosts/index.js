import React, { useEffect, useState } from "react";
import BlogContentTemplate from "../../components/templates/BookContentTemplate";
import BlogContentCard from "../../components/organisms/BlogContentCard";
import blogsList from "../../utils/blogList.json";
import { useHttp } from "../../utils/hooks/http";
import { urls } from "../../utils/serviceConstants";
import EmptyState from "../../components/organisms/EmptyState";
import emptyScreenDataJson from "../../utils/emptyScreenData.json";
// import frameJsonObject from '../../utils/FramingJsonObject'
import { getAllPosts } from "../../services/BlogPostServices";

export default function HotPosts(props) {
  console.log("HP--blogsList");
  console.log(blogsList);
  const [framedData, setFramedData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const framedData = await getAllPosts();
      setFramedData(framedData);
    }
    fetchData();
  }, []);

  if (framedData) {
    console.log("HP--json-");
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
