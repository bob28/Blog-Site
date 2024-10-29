import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import DarkModeToggle from "@/src/app/components/darkModeToggle";
export default async function Home() {
  // get the post directory
  const postsDirectory = path.join(process.cwd(), "mdFiles");
  const filenames = await fs.readdir(postsDirectory);

  // Remove the file extension and return an array of objects of the markdown title
  const posts = filenames.map((filename) => {
    return {
      id: filename.replace(/\.md$/, ""),
      title: filename.replace(/\.md$/, "").replace(/-/g, " "),
    };
  });

  return (
    <main className="max-w-4xl mx-auto p-8 dark:bg-slate-800">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-white">Blog Posts</h1>
        <DarkModeToggle />
      </div>
      <p className="mb-5 dark:text-gray-200">
        To add a blog post, add a new markdown file in the mdFiles folder,
        located on the root of the app.
      </p>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block p-4 border rounded-md shadow-lg hover:bg-gray-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700"
          >
            <h2 className="text-xl capitalize">{post.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
