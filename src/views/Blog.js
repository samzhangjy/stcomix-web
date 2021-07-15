import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import MarkDown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};

export default function Blog() {
  const { blogName } = useParams();
  const [post, setPost] = useState("");

  const gfm = require("remark-gfm");
  const rehypeRaw = require("rehype-raw");

  useEffect(() => {
    import(`../data/blogs/${blogName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container p-10" style={{ padding: "50px" }}>
      <br />
      <br />
      <br />
      <ReactMarkdown
        className="prose lg:prose-lg"
        components={components}
        style={{ minWidth: "1000px !important" }}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {post}
      </ReactMarkdown>
    </div>
  );
}
