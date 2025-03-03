
import { BlogPost } from "@/components/BlogCard";

// Get all blog posts from the markdown files in src/data/blog
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

// Get content from the markdown file
export const getPostContent = (slug: string): string => {
  let content = "";
  
  // In a real application, this would fetch the content from the file system
  // For the demo, we'll return pre-defined content for each post
  switch (slug) {
    case "empty-darkrooms":
      content = `
The difference over the years was staggering. Being back at a [Synoid party](https://ra.co/promoters/59510) after 3 years felt as if I walked into a fetish store, while expecting a skate crowd. Everywhere I looked, party-goers were decked out in fetish-wear, a sight that was once reserved for the deep of night and late Sunday evenings. It wasn't until I met a co-clubber hiding from the rain that it clicked.

![Inside the club](club.jpg)

"Berlin clubbing is so boring right now" she said as a couple in full see-through fishnet clothing walked by. "Everyone is wearing freedom but no-one is acting like it". That confused me.

She looked like an experienced clubber, somewhere in her 40s with snow-white hair. "Back in the day you would see people enjoying each-other left and right. But look at the darkroom here, there's no-one there."

The club that originally hosted Synoid is [now destroyed](https://groove.de/2021/02/03/griessmuehle-farewell-sonnenallee-zehn-anekdoten-aus-acht-jahren-2/) in favor of fancy office buildings. This party was my first time discovering the follow-up of that club: [RSO](https://rso.berlin/). On our exploration through the club we found staircases to under the dancefloor. The dancefloor was full, the space under it was empty. She just told me what it was.

"Everyone is wearing freedom but no-one is acting like it" made sense now. The new crowd seems to feel comfortable wearing the gear, but not interested in acting the gear.

If you scroll [through techno TikTok](https://www.tiktok.com/tag/technotiktok?lang=en) right now the looks are very similar; fishnets, chainlinks and black. [Big fashion brands](https://nakt-studio.com/) exist around the style. Even AI can spit out the looks:

![Even MidJourney knows what it looks like](outfit.png)

The soul of the Berlin club scene is beautiful; the freedom of being. You do you, and we'll love it. The new generations are more [risk-averse than ever](https://www.theguardian.com/society/2022/aug/19/generation-sensible-risk-missing-out-life-experiences-therapists). Hopefully they will live through Berlin clublife with the same sense of freedom as the previous generations.

Empty darkrooms with full dancefloors make me worry though.
      `;
      break;
    case "test-google-cloud-functions":
      content = `
Ever started a new project quickly realizing you would love to re-use some code from another project? This happened to me during the development of functional tests for [Google Cloud functions](https://cloud.google.com/functions). Maybe it can be of help to you too.

## The problem

Unreadable code can feel like untying your earplug wires after getting them out of your pocket. Take a look at how a test might've looked for a cloud function (feel free to skip it, I'm just trying to show this is a callback mess):

\`\`\`javascript
it("should work", () => {
  let statusCode = 200;
  let responseBody = "";
  const stubbedResponse = {
    status: code => {
      statusCode = code;
    },
    send: body => {
      expect(statusCode).to.equal(201);
      expect(body).to.equal("Hello World");
    },
  };

  yourFunction({}, stubbedResponse);
});
\`\`\`

Don't even start about if your function runs async 🤢 (which most do). Promise + callback hell it'll be for you.

## Solution

With some abstraction magic, this test became much more simple:

\`\`\`javascript
const asyncFunction = promisifyHandler(yourFunction);

it("should work", async () => {
  const { status, body } = await asyncFunction({});

  expect(statusCode).to.equal(201);
  expect(body).to.equal("Hello World");
});
\`\`\`

Let \`yourFunction\` go wild! It can \`.send\`, \`.write\`, \`.end\` and much more!

## Now you go!

I've created [a little npm](https://www.npmjs.com/package/pify-express-handler) package out of this; for you (and myself) to re-use! The Google Cloud Function handlers are actually just [Express](https://expressjs.com/) handlers. Did you know this is the same in Firebase Functions? So to test Firebase Functions locally works with this too!

\`\`\`bash
npm install pify-express-handler --save-dev
\`\`\`

Let me know your thoughts! I hope it helps you out :).

## Alternatives

If you're using [Serverless Framework](https://www.serverless.com/) you might be better off using [their testing infrastructure](https://www.serverless.com/blog/serverless-test-framework). But don't use it for just testing, [it's very heavy](https://www.npmjs.com/package/serverless).

Another option is using [\`firebase-functions-test\`](https://github.com/firebase/firebase-functions-test) if you're using firebase. But, you still need to stub your own \`res\` object and do \`require\`s in funky locations. You can see [an example test at work in their repo](https://github.com/firebase/functions-samples/blob/master/quickstarts/uppercase/functions/test/test.online.js).
      `;
      break;
    case "why-the-hurry":
      content = `
You've decided you want to do something expensive on Ethereum. Maybe it's deploying a new [Aragon DAO](https://client.aragon.org/#/). The transaction price in MetaMask (as of writing) is €71. Ouch, that's a lot.

Most people don't know what this fee is for. That sucks. They could save on gas fees and go out for a nice dinner instead 🍲. Let's take a look at what we can do to have both a DAO and make that dinner happen.

## 🦊 The MetaMask layers of confusion

Welcome at the first layer:

![MetaMask showing a suggested transaction cost of €71](./metamask-screen-1.png)

Notice that little 'edit' button up there? If you don't know what you're doing it feels scary to click it right? Let's be cheeky and press it anyway! Welcome at the second layer:

![MetaMask showing a slow, average and fast option](./metamask-screen-2.png)

So much information! And, it seems the €71 is already the cheapest possible!

False!

We still have the 'advanced' section to go visit for the true adventurers. Let's put on our helmet and dive into layer three:

![MetaMask's advanced settings allowing to tinker around with the gas prices](./metamask-screen-3.png)

This is where the magic happens; you can freely set the gas price. I've put it at 15 GWEI saving over €25!

> But Beer! That's off the charts and an 'extreme low' warning is showing!

Yeah! Who cares?

I recently did two transactions where I had set the price 'off the charts'. Let's go through what I got told and what ended up happening.

1. Recommended: 55 GWEI. Set at: 25 GWEI. Estimated wait time: > 1 hour. Actual wait time: 26 minutes. Saved: €6,-
2. Recommended: 25 GWEI. Set at: 15 GWEI. Estimated wait time: > 2 hours. Actual wait time: 3 minutes. Saved: €1,50

If you're in a hurry and you can't wait half an hour it makes sense to pay more. But, if you're doing a transaction that is fine to take 2 hours, I bet you can pay way less than what you're being told.

Go get your free dinner!

## 🥪 How MetaMask could help get your free dinner

It seems that MetaMask is biased towards fast transactions. The 'slow' option is still relatively fast. Why doesn't MetaMask show a 'turtle' option; where you're only paying half the price but wait a few hours?

It seems to be a problem in the wider Ethereum community. [Eth Gas Station](https://ethgasstation.info/) doesn't even show a 'slow' option. [Etherscan](https://etherscan.io/gastracker) does but again the 'slow' option is still relatively fast.

I can only wonder how many people are overpaying to make a transaction happen now while they could have waited for a few hours.
      `;
      break;
    case "web3js-to-ethers":
      content = `
This week I embarked on the journey of migrating my codebase from [\`web3\`](https://www.npmjs.com/package/web3) to [\`ethers\`](https://www.npmjs.com/package/ethers). With sweaty hands and a head full of worries I started. But victory! My fears were not necessary. The journey was relatively smooth, and we're in happier lands now.

Considering it? Read on!

### But why?

A service I was running kept crashing. Taking a look at the monitoring dashboard quickly showed the evil.

![Graph of RAM usage of the service](web3-ram-graph.png)

Classic signs of a memory leak. Nightmares. It was time to bring out the big guns: 

\`node --inspect\`

Yay for it's existence! 🎉.

There it was, exposing itself without shame. Take a look; grey is memory that has been freed by the garbage collector, purple what remained in memory.

![Bar chart of the leak](node-inspector-leak-chart.png)

The inspector gives you a nice breakdown of what memory was 'retained', which pointed towards a \`(closure)\` that was caused by \`setProvider\`. [It's a known issue](https://github.com/web3/web3.js/issues/3042)!

It's 3 years since the issue's creation, and sadly the leakage is still out in the wild. I was at a crossroads:

1. Left: refactor to create all \`Contract\` instances only when truly needed
2. Right: refactor to use \`ethers\` over \`web3\`.

![At the crossroads](crossroads.png)

Since my service has a dynamic config that updates frequently and refers to many different contracts, choosing 1. meant choosing a slower death. If \`Contract\` instances are going to live forever, at one point memory would fill up.

We could always restart the service, it's stateless. But that meant depending on extra infrastructure with extra maintenance.

I decided to time-box and go for the \`ethers\` migration.

### The right path

Whereas in \`web3\` the difference between read-only and write actions is between \`.call()\` and \`.send()\` that difference in \`ethers\` is split by \`Provider\`s and \`Signer\`s.

\`Signer\`s can hold a \`Provider\`. You can in turn pass a \`Signer\` or a \`Provider\` to a \`Contract\`, which will determine whether a call to a function that alters state will be simulated or not.

\`\`\`js
// web3
const web3 = new Web3('https://...');
const contract = new web3.eth.Contract(abi, '0x...');
// Simulates
contract.methods.transfer('0x...', 1).call();
// Use this to build a transaction
const data = contract.methods.transfer('0x...', 1).encodeABI(); 

// ethers
const provider = new JsonRpcProvider('https://...');
const wallet = new Wallet('0x...', provider);
// Simulates
new Contract('0x...', abi, provider).transfer('0x...', 1);
// Sends transaction 
new Contract('0x...', abi, wallet).transfer('0x...', 1); 
\`\`\`

\`web3\` has a clearer split. I would use [\`.encodeABI\` ](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#contract-encodeabi) to create a transaction which I would sign with a \`Wallet\` and then send off with \`Web3\`.

\`ethers\` seems to push for calling the the function on the \`Contract\` directly.

I wanted to migrate with minimal effort. Turns out \`ethers\`'s \`Contract\` exposes a \`populateTransaction\` field.

\`\`\`js
const tx = erc20Contract
    .populateTransaction
    .transfer('0x...', 1);
\`\`\`

This allowed for almost drop-in replacing \`web3\` with \`ethers\`.

### Other \`web3\` vs \`ethers\` differences

\`sendTransaction\` resolves at different moments.

\`\`\`js
// web3 resolves when mined
const receipt = await web3.eth.sendTransaction(tx);

// ethers resolves when sent
const sentTx = await provider.sendTransaction(tx);
const receipt = await sentTx.wait();
\`\`\`

Signing & sending transaction is a 1-liner in \`ethers\`.

\`\`\`js
// web3
const { rawTransaction: txHex } = wallet.signTransaction(tx);
const receipt = await web3.eth.sendTransaction(txHex);

// ethers
const sentTx = await wallet.sendTransaction(tx);
\`\`\`

### Conclusion

Overall it took about 12 hours of work including updating the unit tests. Look at the result though 🤤. No refactors outside of moving \`ethers\` were done. CPU load is more stable, and the memory leak is gone.

![post-refactor server charts](post-refactor-graphs.png)

Outside of a few bumps the migrations was smooth, did not take too much effort and lead to the desired result. If you're considering the move; **timebox yourself and give it a shot**. Worst case you just learn a new JS-based web3 piece of infrastructure!
      `;
      break;
    case "data-on-dropdowns":
      content = `
Scroll scroll scroll. Going through forms and having to open a dropdown to select your country, or even worse, gender can be time consuming. I've been wondering how time consuming exactly and whether some select types are better. So I thought; let's run an experiment!

I quickly hacked together some code and let over 500 unique users fill in a form asking for their age and country. The app asks users to select their country from 3 to 55 options (Distributed according to the Fibonacci sequence, because I like Fibonacci 🤓 ). The app shows either of the following four types of select interactions:

![Select types](./select_types.png)

The results were as follows (click on the image to open the actual chart):

[![Option vs time line chart](./option_vs_time_lined.png)](https://select-experiment.vercel.app/results/line)

## Why does the drop-down spike at 21 options?

Since all the respondents were from the States (I had to guarantee one option somehow) and the "U" is low in the alphabet, my assumption is that somewhere above 13 options is when the option started to fall off the screen.

## Why is autocomplete so high?

That's also what baffled me, I expected this to be the fastest way to do a select when there are many options. There are two hypotheses:

1. Most people started looking for "The United States" which would fail because the country is marked as "United States".

2. The interaction of the autocomplete is difficult. After user-testing the experiment with friends some said they didn't know whether they had to click the option, press enter or do another interaction.

In a scatter plot you can clearly identify that a good amount of people who had to use the autocomplete interaction struggled to select their answer.

[![Option vs time scatter plot](./option_vs_time_scatter.png)](https://select-experiment.vercel.app/results/scatter)

The "Autocomplete" outliers were at least three times as frequent as the others.

- Autocomplete: 10 outliers (shown in chart)
- Dropdown: 3 outliers (not shown)
- Textual card: 3 outliers (not shown)
- Visual Card: 2 outliers (not shown)

Since the autocomplete outliers were overrepresented, I assumed that the autocomplete were caused by something else than maleficent intent and decided not to remove the autocomplete outliers in the data-cleaning process (explained further down).

💡 Idea: re-run the experiment with "The" in front and a nudge to let users know they have to click the option. But, since I used Mechanical Turk to source the responses and this is just a fun experiment, it wasn't worth the 💰!

## What are some biases?

A quick experiment doesn't come without biases. First off, the ages of 20-49 are over-represented;

[![Age distribution chart](./age_distribution_chart.png)](https://select-experiment.vercel.app/results/age-distribution)

💭 Thought: the data of this experiment is representative for you if your demographic matches these responses. If your user's age distribution is very different you might want to consider re-running the experiment yourself for your demographic! Feel free to use the code here!

Also, over 80% of respondents is from the US 🇺🇸, with the rest being Dutch 🇳🇱 (I trialed it first with friends!).

[![Countries](./country_bar_chart.png)](https://select-experiment.vercel.app/results/countries)

💭 Thought: since users had to select their country, the positioning of "United States" and "Netherlands" in a list might have introduced a bias in the data.

## Data Cleaning

Of course there were also some jokers 🤡! I removed any response where:

- The age was negative. There were no positive age-outliers.
- The country was neither US or Dutch (in MTurk only US participants could answer, thus I feel safe removing other countries).
- Anyone whose time-to-completion was very extreme (e.g., some people took 1.5 minutes to select their country, wow!). As explained earlier I did leave the autocomplete outliers in.

## Conclusion

With an average of 18 data-points for each combination there is too little data to make strong recommendations, but I'm going to try anyway:

- 8 or less options? Avoid drop-downs & auto-completes, just use a single-interaction method; the textual or visual cards!
- Have over 55 options? Go for the auto-complete and save your users a bunch of headache 😊. Make sure to clearly communicate the required select interaction though, such as 'Enter' or a click!

Want to check out the results yourself? Check out all visualization [here](https://select-experiment.vercel.app/results)! Want to run the experiment yourself? Check out the code [here](https://github.com/bvanderdrift/select-experiment)! Looking for the raw JSON pre-cleaning to do your own analysis? Go [here](https://select-experiment.vercel.app/results/json)!
      `;
      break;
    case "cryptos-hair-on-fire-problem":
      content = `No content available yet`;
      break;
    default:
      content = `This is placeholder content for the ${slug} post. The full content would be loaded from the corresponding markdown file.`;
  }
  
  return content;
};

// Function to calculate estimated reading time from markdown content
export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readingTime} min read`;
};
