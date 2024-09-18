import { useState, useEffect } from "react";
import { GithubBlog } from "@rena.to/github-blog";
import { Octokit } from "octokit";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GH_TOKEN,
        });

        const posts = await octokit.request(
          "GET /repos/itstomlie/3Dportfolio/issues",
          {
            owner: "itstomlie",
            repo: "https://github.com/itstomlie/3Dportfolio",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setPosts(posts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(posts);
  return (
    <div>
      <h2>Blog Posts</h2>
      {/* <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Blog;
