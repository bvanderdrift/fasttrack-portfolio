
import { BlogPost } from "@/components/BlogCard";

// Get basic metadata for all blog posts
export const getAllPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [
    {
      slug: "cryptos-hair-on-fire-problem",
      title: "Crypto's Hair on Fire Problem",
      excerpt: "🔥 is crypto a solution-without-a-problem or can we find a hair on fire problem it can solve?",
      date: "2020-09-11",
      readingTime: "4 min read",
      tags: ["Cryptocurrency", "Technology"],
      published: false,
    },
    {
      slug: "presidential-systems-create-chaos",
      title: "Presedential Systems create Chaos",
      excerpt: "📖 Exploration of a theory that the US's presidential system will converge to chaos.",
      date: "2020-09-11",
      readingTime: "3 min read",
      tags: ["Politics", "Theory"],
      published: false,
    },
    {
      slug: "low-context-programming",
      title: "Low context programming",
      excerpt: "👶 The less context your code needs to be understood; the better is scales.",
      date: "2020-09-11",
      readingTime: "3 min read",
      tags: ["Programming", "Best Practices"],
      published: false,
    },
    {
      slug: "tech-debt-dependency-graphs",
      title: "Tech debt dependency graphs",
      excerpt: "🕸️ How do you determine what tech debt to tackle first?",
      date: "2020-09-11",
      readingTime: "2 min read",
      tags: ["Tech Debt", "Development"],
      published: false,
    },
    {
      slug: "cryptutopia",
      title: "Cryptutopia",
      excerpt: "💰 What might life look like if government embraces crypto?",
      date: "2020-04-11",
      readingTime: "3 min read",
      tags: ["Cryptocurrency", "Future"],
      published: false,
    },
    {
      slug: "empty-darkrooms",
      title: "Empty darkrooms, full dancefloors",
      excerpt: "👯‍♀️ How the new generations live Berlin life.",
      date: "2023-01-25",
      readingTime: "3 min read",
      tags: ["Culture", "Berlin"],
      published: true,
    },
    {
      slug: "eth2-bank-run",
      title: "Bankrun on Ethereum 2's Stakes; what if?",
      excerpt: "😱 Ether prices plummet and people want to get theirs out of the validation stakes; what will happen to the network?",
      date: "2020-09-11",
      readingTime: "5 min read",
      tags: ["Ethereum", "Cryptocurrency"],
      published: false,
    },
    {
      slug: "test-google-cloud-functions",
      title: "Test Google Cloud functions",
      excerpt: "😁 Make your life easier.",
      date: "2020-12-14",
      readingTime: "4 min read",
      tags: ["Google Cloud", "Testing"],
      published: true,
    },
    {
      slug: "why-the-hurry",
      title: "Why the hurry?",
      excerpt: "💸 You're probably overpaying for your Ethereum gas prices.",
      date: "2020-11-14",
      readingTime: "3 min read",
      tags: ["Ethereum", "Gas Prices"],
      published: true,
    },
    {
      slug: "web3js-to-ethers",
      title: "Migrating from web3.js to ethers",
      excerpt: "🧈 Buttery smooth",
      date: "2023-02-02",
      readingTime: "5 min read",
      tags: ["Web3", "Ethereum", "JavaScript"],
      published: true,
    },
    {
      slug: "data-on-dropdowns",
      title: "The Data on Dropdowns",
      excerpt: "😠 Sometimes I stumble upon a dropdown with two options. Let's see if we can do better.",
      date: "2020-10-05",
      readingTime: "5 min read",
      tags: ["UX", "UI", "Research"],
      published: true,
    }
  ];
  
  return posts;
};

export const getPublishedPosts = (): BlogPost[] => {
  return getAllPosts().filter(post => post.published);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};

// Fetch markdown content instead of importing it
export const getPostContent = async (slug: string): Promise<string> => {
  try {
    // Construct the path to the markdown file
    const markdownPath = `/src/data/blog/${slug}/index.md`;
    
    // Fetch the file as text
    const response = await fetch(markdownPath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${response.statusText}`);
    }
    
    const content = await response.text();
    
    // Validate that we received actual markdown content
    if (!content || content.trim() === '') {
      throw new Error('Received empty markdown content');
    }
    
    return content;
  } catch (error) {
    console.error(`Error loading markdown for slug ${slug}:`, error);
    throw error; // Re-throw to let the component handle the error display
  }
};

// Function to calculate estimated reading time from markdown content
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readingTime} min read`;
};
