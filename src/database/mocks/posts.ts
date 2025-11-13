interface Post {
  id: number;
  slug: string;
  title: string;
  duration: number;
  image: string;
  snippet: string;
  content: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    slug: 'introduction-to-knexjs',
    title: 'Introduction to Knex.js',
    duration: 10,
    // image: '/images/posts/knexjs-intro.png',
    image: '/images/placeholder.png',
    snippet: 'A beginner-friendly introduction to Knex.js, a SQL query builder for Node.js.',
    content: 'Knex.js is a powerful SQL query builder for Node.js that supports multiple database systems...',
  },
  {
    id: 2,
    slug: 'advanced-typescript-tips',
    title: 'Advanced TypeScript Tips',
    duration: 15,
    // image: '/images/posts/typescript-advanced.png',
    image: '/images/placeholder.png',
    snippet: 'Explore some advanced tips and tricks to enhance your TypeScript coding skills.',
    content: 'TypeScript is a superset of JavaScript that adds static typing and other features...',
  },
  {
    id: 3,
    slug: 'building-restful-apis-with-express',
    title: 'Building RESTful APIs with Express',
    duration: 20,
    // image: '/images/posts/express-api.png',
    image: '/images/placeholder.png',
    snippet: 'Learn how to build RESTful APIs using Express.js, a popular web framework for Node.js.',
    content: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features...',
  },
];

export default mockPosts;
