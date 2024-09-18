import { useParams, useLocation } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useState } from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [blog] = useState(location.state?.post || null);

  const { posts, loading, error } = useFetchPosts(blog ? null : slug);

  const post = blog || posts[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <Markdown>{post.body}</Markdown>
    </div>
  );
};

export default BlogDetail;
