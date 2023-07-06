import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

type MarkdownViewerProps = {
  children: string;
  className?: string;
};

const MarkdownViewer: FC<MarkdownViewerProps> = ({ children, className }) => {
  return (
    <ReactMarkdown
      className={`prose ${className}`}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return (
            <code {...props} className={className}>
              {children}
            </code>
          );
          // return !inline && match ? (
          //   <SyntaxHighlighter {...props} style={materialOceanic} language={match[1]} PreTag="div">
          //     {String(children).replace(/\n$/, '')}
          //   </SyntaxHighlighter>
          // ) : (
          //   <code {...props} className={className}>
          //     {children}
          //   </code>
          // );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
