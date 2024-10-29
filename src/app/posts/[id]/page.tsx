import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import Post from "@/src/app/components/post";
import DarkModeToggle from "@/src/app/components/darkModeToggle";

async function getPost(id: string) {
  const postsDirectory = path.join(process.cwd(), "mdFiles");
  const fullPath = path.join(postsDirectory, `${id}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    return fileContents;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "mdFiles");
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => ({
    id: filename.replace(/\.md$/, ""),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const content = await getPost(id);

  if (!content) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8 dark:bg-slate-800">
      <div className="flex justify-between items-center mb-8 mb-10">
        <h1 className="text-2xl font-bold  dark:text-white">Post: {id}</h1>
        <DarkModeToggle />
      </div>
      <Post content={content} />
    </main>
  );
}
