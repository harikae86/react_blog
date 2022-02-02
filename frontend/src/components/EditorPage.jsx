import { useCallback } from "react";
import { useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import EditorContainer from "./EditorContainer";

const fetchBlogposts = async (id) => {
  const url = "http://localhost:3000/posts/" + id;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};
const EditorPage = () => {
  const params = useParams();
  const fetchById = useCallback(() => fetchBlogposts(params.id), [params.id]);
  const [data, loading] = useAsync(fetchById);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <EditorContainer blogpost={data} />;
};

export default EditorPage;
