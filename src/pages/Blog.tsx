import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { getPublishedPosts } from "@/utils/blogUtils";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    // Only run once the component has mounted
    if (!hasMounted.current) {
      // Fetch published posts
      const fetchedPosts = getPublishedPosts();
      // Sort by date, newest first
      const sortedPosts = [...fetchedPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setPosts(sortedPosts);

      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        setIsLoaded(true);
        hasMounted.current = true;
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-dots-pattern bg-fixed">
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight mb-4 opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              Thoughts
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              on tech, product & life
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 content-card rounded-xl p-8">
              <p className="text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                  isLoaded={isLoaded}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
