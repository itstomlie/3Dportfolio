import { Link } from "react-router-dom";
import useFetchPosts from "../../hooks/useFetchPosts"; // Import the custom hook

const BlogList = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <Link to={`/blogs/${post.slug}`} state={{ post }}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
