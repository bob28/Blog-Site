import ReactMarkdown from "react-markdown";

export default function Post({ content }: { content: string }) {
  return (
    <div className="">
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </div>
  );
}
