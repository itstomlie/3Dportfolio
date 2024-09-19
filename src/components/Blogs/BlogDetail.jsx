import { useParams, useLocation } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useState, useEffect } from "react";
import { styles } from "../../styles";
import { Loader2 } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);

  const { posts, loading, error } = useFetchPosts(post ? null : slug);

  useEffect(() => {
    if (!post && posts.length > 0) {
      setPost(posts[0]);
    }
  }, [posts, post]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return (
      <article className={`${styles.padding} min-h-screen bg-primary `}>
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <h2>Post Not Found</h2>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${styles.padding} min-h-screen bg-primary h-full w-full`}
    >
      {loading ? (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <Loader2 className="animate-spin w-10 h-10" />
        </div>
      ) : (
        <>
          <h1
            className={`text-center mb-5 ${styles.sectionHeadText} ${styles.sectionTextGradient}`}
          >
            {post.title}
          </h1>
          <div className="flex justify-between">
            <p>itsTomLie</p>
            <p>{post.createdAt}</p>
          </div>
          <div className="h-1 my-2 bg-gradient-to-r from-secondary to-white sm:mx-0 sm:w-full" />
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    className: "text-[#facc15] hover:text-[#62fcd1]",
                  },
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </>
      )}
    </article>
  );
};

export default BlogDetail;
