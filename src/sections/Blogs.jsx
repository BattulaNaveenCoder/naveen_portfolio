import React from 'react';
import { FileText, Calendar, Tag, ExternalLink } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blogs = () => (
  <section id="blogs" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Blogs</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          A few recent thoughts and write-ups (dummy data).
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 hover:scale-[1.02] flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <FileText size={22} />
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4 flex-1">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-purple-500 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30"
                >
                  <Tag size={12} /> {t}
                </span>
              ))}
            </div>

            <div>
              <a
                href={post.url}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
              >
                Read more <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
