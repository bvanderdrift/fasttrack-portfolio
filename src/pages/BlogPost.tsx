import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getPostContent } from "@/utils/blogUtils";
import { BlogPost } from "@/components/BlogCard";
import { marked } from "marked";

const configureMarkedRenderer = (slug: string) => {
  const renderer = new marked.Renderer();
  
  renderer.image = (href, title, text) => {
    if (href.startsWith('http') || href.startsWith('//')) {
      return `<img src="${href}" alt="${text}" title="${title || ''}" class="rounded-md my-4 max-w-full" />`;
    }
    
    const imagePath = `/src/data/blog/${slug}/${href}`;
    return `<img src="${imagePath}" alt="${text}" title="${title || ''}" class="rounded-md my-4 max-w-full" />`;
  };
  
  return renderer;
};

const renderMarkdown = (markdown: string, slug: string): string => {
  const renderer = configureMarkedRenderer(slug);
  
  marked.setOptions({
    renderer,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    xhtml: true
  });
  
  return marked.parse(markdown) as string;
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!slug) {
      navigate("/thoughts");
      return;
    }
    
    const postData = getPostBySlug(slug);
    
    if (!postData || !postData.published) {
      navigate("/thoughts");
      return;
    }
    
    setPost(postData);
    
    const markdown = getPostContent(slug);
    setContent(renderMarkdown(markdown, slug));
    setIsLoading(false);
  }, [slug, navigate]);
  
  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/4"></div>
              <div className="h-64 bg-secondary rounded w-full mt-8"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (!post) {
    return null;
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 animate-fade-in">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to all posts
            </button>
            
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="tech-tag bg-secondary text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="prose max-w-none prose-headings:font-medium prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors prose-pre:bg-zinc-950 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
