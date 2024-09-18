export const GET = () => {
  return Response.json(posts);
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Hello World",
    body: "This is the first post",
  },
  {
    id: 2,
    title: "Hello Again",
    body: "This is the second post",
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    body: "This is the third post for javascript fundamentals",
  },
  {
    id: 4,
    title: "JavaScript Data Types",
    body: "This is the fourth post for javascript data types",
  },
  {
    id: 5,
    title: "JavaScript Functions",
    body: "This is the fifth post for javascript functions",
  },
  {
    id: 6,
    title: "JavaScript Arrays",
    body: "This is the sixth post for javascript arrays",
  },
  {
    id: 7,
    title: "JavaScript Objects",
    body: "This is the seventh post for javascript objects",
  },
  {
    id: 8,
    title: "JavaScript Classes",
    body: "This is the eighth post for javascript classes",
  },
  {
    id: 9,
    title: "JavaScript Promises",
    body: "This is the ninth post for javascript promises",
  },
  {
    id: 10,
    title: "JavaScript Async/Await",
    body: "This is the tenth post for javascript async/await",
  },
  {
    id: 11,
    title: "JavaScript Modules",
    body: "This is the eleventh post for javascript modules",
  },
  {
    id: 12,
    title: "JavaScript Fetch API",
    body: "This is the twelfth post for javascript fetch api",
  },
  {
    id: 13,
    title: "JavaScript Local Storage",
    body: "This is the thirteenth post for javascript local storage",
  },
  {
    id: 14,
    title: "JavaScript Session Storage",
    body: "This is the fourteenth post for javascript session storage",
  },
  {
    id: 15,
    title: "JavaScript Cookies",
    body: "This is the fifteenth post for javascript cookies",
  },
  {
    id: 16,
    title: "JavaScript Web Storage",
    body: "This is the sixteenth post for javascript web storage",
  },
  {
    id: 17,
    title: "JavaScript Web Workers",
    body: "This is the seventeenth post for javascript web workers",
  },
  {
    id: 18,
    title: "JavaScript Service Workers",
    body: "This is the eighteenth post for javascript service workers",
  },
  {
    id: 19,
    title: "JavaScript Web Sockets",
    body: "This is the nineteenth post for javascript web sockets",
  },
];
