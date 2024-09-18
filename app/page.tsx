import { Post } from "./posts/route";

export default async function Home() {
  const posts: Post[] = await fetch("http://localhost:3000/posts").then((res) =>
    res.json()
  );

  return (
    <section className="container mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center ">
        List is rendered at: {new Date().toLocaleDateString()}
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-white"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
