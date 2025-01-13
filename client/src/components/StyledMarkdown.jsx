import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const StyledMarkdown = ({ content }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="prose prose-lg prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-400">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            // Headings
            h1: ({ node, ...props }) => <h1 className="mb-8 mt-6" {...props} style={{ color: '#66a346' }}/>,
            h2: ({ node, ...props }) => <h2 className="mb-6 mt-12" {...props} style={{ color: '#66a346' }} />,
            h3: ({ node, ...props }) => <h3 className="mb-4 mt-8" {...props} style={{ color: '#66a346' }} />,
            
            // Paragraphs and text
            p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
            em: ({ node, ...props }) => <em className="italic" {...props} />,
            
            // Lists
            ul: ({ node, ...props }) => <ul className="mb-6 pl-6" {...props} />,
            ol: ({ node, ...props }) => <ol className="mb-6 pl-6" {...props} />,
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            
            // Code blocks
            code: ({ node, inline, ...props }) => 
              inline ? (
                <code className="font-mono" {...props} />
              ) : (
                <code className="block font-mono text-sm p-4 mb-6" {...props} />
              ),
            
            // Links and images
            a: ({ node, ...props }) => (
              <a 
                className="text-blue-600 hover:text-blue-800 underline" 
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img 
                className="max-w-full h-auto rounded-lg my-6" 
                {...props} 
              />
            ),
            
            // Blockquotes
            blockquote: ({ node, ...props }) => (
              <blockquote className="my-6 text-gray-700" {...props} />
            ),
            
            // Tables
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200" {...props} />
              </div>
            ),
            th: ({ node, ...props }) => (
              <th className="px-6 py-3 bg-gray-50 text-left text-sm font-semibold" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="px-6 py-4 whitespace-nowrap text-sm" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default StyledMarkdown;