---
slug: "/thoughts/test-google-cloud-functions"
date: 2020-12-14T17:20:42.123Z
title: "Test Google Cloud functions"
short_description: "😁 Make your life easier."
published: true
listed: true
---

Ever started a new project quickly realizing you would love to re-use some code from another project? This happened to me during the development of functional tests for [Google Cloud functions](https://cloud.google.com/functions). Maybe it can be of help to you too.

## The problem

Unreadable code can feel like untying your earplug wires after getting them out of your pocket. Take a look at how a test might've looked for a cloud function (feel free to skip it, I'm just trying to show this is a callback mess):

```javascript
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
```

Don't even start about if your function runs async 🤢 (which most do). Promise + callback hell it'll be for you.

## Solution

With some abstraction magic, this test became much more simple:

```javascript
const asyncFunction = promisifyHandler(yourFunction);

it("should work", async () => {
  const { status, body } = await asyncFunction({});

  expect(statusCode).to.equal(201);
  expect(body).to.equal("Hello World");
});
```

Let `yourFunction` go wild! It can `.send`, `.write`, `.end` and much more!

## Now you go!

I've created [a little npm](https://www.npmjs.com/package/pify-express-handler) package out of this; for you (and myself) to re-use! The Google Cloud Function handlers are actually just [Express](https://expressjs.com/) handlers. Did you know this is the same in Firebase Functions? So to test Firebase Functions locally works with this too!

```bash
npm install pify-express-handler --save-dev
```

Let me know your thoughts! I hope it helps you out :).

## Alternatives

If you're using [Serverless Framework](https://www.serverless.com/) you might be better off using [their testing infrastructure](https://www.serverless.com/blog/serverless-test-framework). But don't use it for just testing, [it's very heavy](https://www.npmjs.com/package/serverless).

Another option is using [`firebase-functions-test`](https://github.com/firebase/firebase-functions-test) if you're using firebase. But, you still need to stub your own `res` object and do `require`s in funky locations. You can see [an example test at work in their repo](https://github.com/firebase/functions-samples/blob/master/quickstarts/uppercase/functions/test/test.online.js).
