import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import 'prismjs/themes/prism-tomorrow.css';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);
  const hasMarkdownTitle = post?.content?.trim().startsWith('#');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!post) {
    return (
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Blog not found</h1>
          <p className="text-gray-400 mb-6">The post you are looking for doesn\'t exist.</p>
          <Link to="/blogs" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img
            src={post.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop';
            }}
          />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-sm text-gray-300">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                  <Tag size={12} /> {t}
                </span>
              ))}
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-2 text-gray-400" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {!hasMarkdownTitle && (
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-white leading-tight">{post.title}</h1>
            {post.subtitle && (
              <p className="text-lg text-gray-300 mt-2">{post.subtitle}</p>
            )}
          </div>
        )}

        <article className="prose prose-invert max-w-none mt-6">
          {post.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypePrism]}
              components={{
                h1({ children }) {
                  return (
                    <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
                      {children}
                    </h1>
                  );
                },
                h2({ children }) {
                  return (
                    <h2 className="text-2xl font-bold text-white mt-8 mb-3">
                      {children}
                    </h2>
                  );
                },
                h3({ children }) {
                  return (
                    <h3 className="text-xl font-semibold text-purple-200 mt-6 mb-2">
                      {children}
                    </h3>
                  );
                },
                p({ children }) {
                  return (
                    <p className="text-gray-200 leading-relaxed my-4">
                      {children}
                    </p>
                  );
                },
                ul({ children }) {
                  return (
                    <ul className="list-disc list-outside pl-6 space-y-2 text-gray-200">
                      {children}
                    </ul>
                  );
                },
                ol({ children }) {
                  return (
                    <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-200">
                      {children}
                    </ol>
                  );
                },
                table({ children }) {
                  return (
                    <div className="my-6 overflow-x-auto">
                      <table className="w-full table-auto border-collapse text-sm">
                        {children}
                      </table>
                    </div>
                  );
                },
                thead({ children }) {
                  return <thead className="bg-white/5">{children}</thead>;
                },
                tbody({ children }) {
                  return <tbody className="divide-y divide-white/10">{children}</tbody>;
                },
                tr({ children }) {
                  return <tr className="hover:bg-white/5 transition-colors">{children}</tr>;
                },
                th({ children }) {
                  return (
                    <th className="text-left font-semibold text-white px-4 py-2 border border-white/10">
                      {children}
                    </th>
                  );
                },
                td({ children }) {
                  return (
                    <td className="text-gray-200 px-4 py-2 border border-white/10 align-top">
                      {children}
                    </td>
                  );
                },
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return inline ? (
                    <code className="px-1 py-0.5 rounded bg-white/10 border border-white/10" {...props}>
                      {children}
                    </code>
                  ) : (
                    <pre className={`rounded-xl border border-white/10 bg-black/60 p-4 overflow-auto ${className || ''}`}>
                      <code className={className} {...props}>{children}</code>
                    </pre>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-200 text-lg leading-relaxed">
              {post.description || post.excerpt}
            </p>
          )}
        </article>

        <div className="mt-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
