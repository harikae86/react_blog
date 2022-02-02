import { useEffect, useState } from "react";
import Blogpost from "./Blogpost";
import useAsync from "../hooks/useAsync";

const fetchBlogposts = async () => {
  const url = "http://localhost:3000/posts";
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

const BlogList = () => {
  const [data, loading] = useAsync(fetchBlogposts);
  if (loading) {
    return <section>Loading...</section>;
  }
  return (
    <section>
      {data.map((item) => (
        <Blogpost
          key={item.id}
          author={item.author}
          title={item.title}
          body={item.body}
          id={item.id}
        />
      ))}
    </section>
  );
};

export default BlogList;
