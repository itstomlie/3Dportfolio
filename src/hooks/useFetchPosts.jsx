import { useState, useEffect } from "react";
import { Octokit } from "octokit";

const useFetchPosts = (slug = null) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GH_TOKEN,
        });

        const response = await octokit.request(
          "GET /repos/itstomlie/3Dportfolio/issues",
          {
            owner: "itstomlie",
            repo: "3Dportfolio",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );

        const formattedPosts = response.data.map((post) => {
          const slugLabel = post.labels.find((label) =>
            label.name.startsWith("slug:")
          );
          const postSlug = slugLabel ? slugLabel.name.split(":")[1] : null;

          const formattedDate = new Date(post.created_at).toLocaleDateString(
            "id-ID",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          );

          return {
            title: post.title,
            body: post.body,
            slug: postSlug,
            createdAt: formattedDate,
          };
        });

        if (slug) {
          const singlePost = formattedPosts.find((post) => post.slug === slug);
          setPosts(singlePost ? [singlePost] : []);
        } else {
          setPosts(formattedPosts);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [slug]);

  return { posts, loading, error };
};

export default useFetchPosts;
