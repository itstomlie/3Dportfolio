import { Link } from "react-router-dom";
import { styles } from "../../styles";
import useFetchPosts from "../../hooks/useFetchPosts";
import grayMatter from "gray-matter";
import { Loader2 } from "lucide-react";

const BlogList = () => {
  const { posts, loading, error } = useFetchPosts();

  if (error) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-primary`}>
      <div className={`${styles.padding}`}>
        <h1 className={`mb-5 ${styles.sectionHeadText}`}>Blog Posts</h1>
        {loading ? (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <Loader2 className="animate-spin w-10 h-10" />
          </div>
        ) : (
          posts.map((post) => {
            const src = post.body;
            const { content, data } = grayMatter(src);

            const readingTime = (text) => {
              const minutes = Math.ceil(text.trim().split(" ").length / 225);
              return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
            };

            return (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                state={{ post: { ...post, content, data } }}
                className="group block mb-8"
              >
                <div>
                  <h2 className="mb-2 group-hover:text-secondary">
                    {post.title}
                  </h2>
                  <p className="sm:text-[16px] text-[12px] text-gray-300 group-hover:text-secondary">
                    {data.subtitle}
                  </p>
                  <p className="text-gray-500 group-hover:text-secondary mb-2">
                    {data.description}
                  </p>
                  <div className="flex gap-5">
                    <p className="text-gray-500">{post.createdAt}</p>
                    <p className="text-gray-500">{readingTime(post.body)}</p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogList;
