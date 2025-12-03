import React from 'react';
import { Calendar, Tag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Blogs = () => (
  <section id="blogs" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Blogs</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
          A few recent thoughts and write-ups.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative h-56">
              <Link to={`/blogs/${post.id}`}>
                <img
                  src={post.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'}
                  alt={post.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop';
                  }}
                />
              </Link>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center justify-between rounded-xl bg-black/40 backdrop-blur-md px-3 py-2 text-xs">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-600/80 text-white border border-white/20 shadow-sm"
                      >
                        <Tag size={12} className="opacity-90" /> {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-white">
                    <Calendar size={14} className="mr-2 opacity-80" />
                    <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white text-xl font-semibold leading-tight">
                <Link to={`/blogs/${post.id}`} className="hover:text-purple-300">
                  {post.title}
                </Link>
              </h3>
              {post.subtitle && (
                <p className="text-sm text-gray-400 mt-1">{post.subtitle}</p>
              )}

              <p className="text-gray-300 mt-4 line-clamp-3">
                {post.description || post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  to={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  Read more <ExternalLink size={16} />
                </Link>
                <div className="text-xs text-gray-400">
                  ~ {Math.max(3, Math.min(8, Math.ceil(((post.description || post.excerpt).length) / 250)))} min read
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
