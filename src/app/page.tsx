import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "mdFiles");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map((filename) => {
    return {
      id: filename.replace(/\.md$/, ""),
      title: filename.replace(/\.md$/, "").replace(/-/g, " "),
    };
  });

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <p className="mb-5">
        To add a blog post, add a new markdown file in the mdFiles folder,
        located on the root of the app.
      </p>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl capitalize">{post.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
