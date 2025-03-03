
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { getPublishedPosts } from "@/utils/blogUtils";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // In a real implementation, this would fetch posts from markdown files
    const fetchedPosts = getPublishedPosts();
    setPosts(fetchedPosts);
  }, []);
  
  return (
    <div className="min-h-screen bg-subtle-pattern bg-fixed">
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, learnings, and insights from my journey as a product engineer.
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-20 content-card rounded-xl p-8">
              <p className="text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
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
