import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import Post from "@/src/app/components/post";

async function getPost(id: string) {
  const postsDirectory = path.join(process.cwd(), "mdFiles");
  const fullPath = path.join(postsDirectory, `${id}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    return fileContents;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const content = await getPost(id);

  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10">Post: {id}</h1>
      <Post content={content} />
    </div>
  );
}
