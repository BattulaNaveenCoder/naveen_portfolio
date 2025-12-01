import React from 'react';
import { blogs } from '../../data/blogs';
import { ExternalLink, Tag } from 'lucide-react';

const BlogsPreview = () => {
  const latest = blogs.slice(0, 2);
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">From the Blog</h3>
          <a href="/blogs" className="text-purple-300 hover:text-white">All Posts →</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {latest.map((p) => (
            <article key={p.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h4 className="text-white font-semibold mb-1">{p.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{p.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.slice(0,2).map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <a href="/blogs" className="inline-flex items-center gap-2 text-purple-300 hover:text-white">
                Read More <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPreview;
