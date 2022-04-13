import MarkdownIt from "markdown-it/lib";
import { marked } from "marked";

export default function HTML({ content, className }) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
