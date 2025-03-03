
import { BlogPost } from "@/components/BlogCard";

// NOTE: In a real implementation, this would use a markdown parser
// and file system reading. For this demo, we'll simulate the functionality
// with mock data that would be replaced with actual file parsing.

// This simulates reading from the /src/data/blog directory
export const getAllPosts = (): BlogPost[] => {
  // In a real implementation, this would read markdown files from the /blog directory
  // and parse frontmatter for metadata
  
  return [
    {
      slug: "hello-world",
      title: "Hello World: My First Blog Post",
      excerpt: "Welcome to my blog! This is my first post where I discuss my journey as a product engineer and the lessons I've learned along the way.",
      date: "2023-06-15",
      readingTime: "3 min read",
      tags: ["Introduction", "Product Engineering"],
      published: true,
    },
    {
      slug: "pragmatic-approach",
      title: "The Pragmatic Approach to Product Engineering",
      excerpt: "How taking a pragmatic approach to product development leads to faster delivery and better outcomes for users.",
      date: "2023-07-22",
      readingTime: "5 min read",
      tags: ["Product Engineering", "Best Practices", "Pragmatism"],
      published: true,
    },
    {
      slug: "typescript-tips",
      title: "5 TypeScript Tips That Will Make Your Code Better",
      excerpt: "TypeScript has changed how we write JavaScript. Here are five tips that will take your TypeScript code to the next level.",
      date: "2023-08-10",
      readingTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      published: true,
    },
    {
      slug: "draft-post",
      title: "Draft Post - Not Published Yet",
      excerpt: "This is a draft post that shouldn't appear on the site because it's not published yet.",
      date: "2023-09-01",
      readingTime: "4 min read",
      tags: ["Draft"],
      published: false,
    }
  ];
};

export const getPublishedPosts = (): BlogPost[] => {
  return getAllPosts().filter(post => post.published);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};

// Simulated function to get post content by slug
export const getPostContent = (slug: string): string => {
  // In a real implementation, this would read the markdown file content
  // This is a simplified version that returns mock content
  
  if (slug === "hello-world") {
    return `
# Hello World: My First Blog Post

*Published on June 15, 2023 • 3 min read*

Welcome to my blog! As a product engineer with experience in fast-moving startups, I've learned a lot about building user-centric products efficiently.

## Why I Started This Blog

I wanted to share my experiences and insights with fellow engineers and anyone interested in product development. Writing is a great way to organize thoughts and contribute to the community.

## What to Expect

In this blog, I'll be covering:

- Technical insights from my projects
- Best practices in product engineering
- Reflections on working in startups
- Cool technologies I'm exploring

## Code Example

Here's a simple React component:

\`\`\`jsx
const Welcome = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to my blog</p>
    </div>
  );
};
\`\`\`

Stay tuned for more posts coming soon!
    `;
  }
  
  return `# ${getPostBySlug(slug)?.title || "Post Not Found"}

*This content would be loaded from a markdown file in a real implementation.*

This is placeholder content for the ${slug} post.
  `;
};

// Function to calculate estimated reading time from markdown content
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readingTime} min read`;
};
